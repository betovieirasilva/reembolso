package reembolso.filters;

import play.api.mvc.RequestHeader;
import play.api.mvc.Result;

public class CorsFilter extends JavaFilter {

    @Override
    public Result apply(Result currentResult, RequestHeader requestHeader) {
        ResultAdapter resultAdapter = new ResultAdapter(currentResult);
        resultAdapter.withHeader("Access-Control-Allow-Origin", "*");
        resultAdapter.withHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
        resultAdapter.withHeader("Access-Control-Allow-Headers", "Content-Type,X-AUTH-TOKEN");
        resultAdapter.withHeader("Access-Control-Max-Age", "1");
        return resultAdapter;
    }
}