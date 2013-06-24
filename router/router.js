define(['backbone'], function (Backbone) {
    var AppRouter = Backbone.Router.extend({
        routes: {
            "": "showList"
        }
    });
    return AppRouter;
});
