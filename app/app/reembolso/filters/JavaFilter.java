package reembolso.filters;

import play.api.mvc.*;
import play.api.mvc.Filter;
import scala.Function1;
import scala.concurrent.Future;
import scala.runtime.AbstractFunction1;

public abstract class JavaFilter implements Filter {

    @Override
    public Future<Result> apply(Function1<RequestHeader, Future<Result>> nextFilter, RequestHeader requestHeader) {
        return nextFilter
                .apply(requestHeader)
                .map(new AbstractFunction1<Result, Result>() {
                         @Override
                         public Result apply(Result currentResult) {
                             return JavaFilter.this.apply(currentResult, requestHeader);
                         }
                     },
                        play.api.libs.concurrent.Execution.defaultContext());
    }

    @Override
    public EssentialAction apply(EssentialAction next) {
        return Filter$class.apply(this, next);
    }

    public abstract Result apply(Result currentResult, RequestHeader requestHeader);
}
