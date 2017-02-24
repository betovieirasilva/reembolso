import play.Application;
import play.GlobalSettings;
import play.api.mvc.EssentialFilter;
import play.filters.gzip.GzipFilter;
import play.libs.F.Promise;
import play.mvc.Action;
import play.mvc.Http;
import play.mvc.Http.RequestHeader;
import play.mvc.Result;
import play.mvc.Results;
import reembolso.filters.CorsFilter;

import java.lang.reflect.Method;
import java.util.HashMap;
import java.util.Map;
import java.util.logging.Logger;

public class Global extends GlobalSettings {
    private static final Logger log = Logger.getLogger(Global.class.getSimpleName());
    @SuppressWarnings("unchecked")
    public <T extends EssentialFilter> Class<T>[] filters() {
        return new Class[]{GzipFilter.class, CorsFilter.class};
    }
}
