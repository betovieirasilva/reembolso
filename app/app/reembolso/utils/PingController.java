package reembolso.utils;

import com.mysema.query.jpa.impl.JPAQuery;
import play.db.jpa.JPA;
import play.db.jpa.Transactional;
import play.mvc.Controller;
import play.mvc.Result;

public class PingController extends Controller {

    public static Result ping() {
        return ok("OK");
    }

    public static Result home(){
        return ok("home");
    }
}