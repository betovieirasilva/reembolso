package reembolso.cadastros.categoria;

import com.fasterxml.jackson.databind.JsonNode;
import play.db.jpa.Transactional;
import play.mvc.Controller;
import play.mvc.Result;

public class CategoriaController extends Controller {

    //@Transactional
    public static Result save() {
        JsonNode json = request().body().asJson();
        System.out.println("SAVE: " + json);
        return ok("save");
    }

}