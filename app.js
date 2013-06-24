if (typeof Object.create !== 'function') {
    Object.create = function (o) {
        function F() {
        }

        F.prototype = o;
        return new F();
    };
}

/* global require */
require.config({
    // shim underscore & backbone (cause we use the non AMD versions here)
    shim: {
        'dom': {
            deps: [ 'jquery' ], // switch to the DOM-lib of your choice
            exports: '$'
        },
        'underscore': {
            exports: '_'
        },
        'backbone': {
            deps: [ 'underscore', 'dom' ],
            exports: 'Backbone'
        },
        'deferred': {
            exports: 'Deferred',
            deps: [ 'dom' ]
        }
    },
    // paths
    paths: {
        // jQuery
        jquery: './js/aura/lib/jquery/jquery',

        // Aura
        dom: './js/aura/lib/dom',
        underscore: './js/aura/lib/underscore',
        aura_core: './js/aura/mediator',
        aura_perms: './js/aura/permissions',
        aura_sandbox: './js/aura/facade',

        // Backbone Extension
        core: './js/extensions/backbone/mediator',
        sandbox: './js/extensions/backbone/facade',
        text: './js/extensions/backbone/lib/text',
        backbone: './js/extensions/backbone/lib/backbone',
        localstorage: './js/extensions/backbone/lib/localstorage',
        jquery_ui: './js/extensions/backbone/lib/jquery-ui.min',
        router: './router/router',
        perms: './permissions'
    }
});

// Starts main modules
require(['core', 'sandbox', 'backbone', 'router', 'jquery', 'jquery_ui'], function (core, sandbox, Backbone, AppRouter, $, $ui) {
    var appRouter = new AppRouter;
    appRouter.on("route:List", function () {
    });

    //console.log(appRouter);

    sandbox.router = appRouter;

    core.start([
        /*{
            channel: 'button-widget',
            element: '#button-widget'
        },
        {
            channel: 'text-widget',
            element: '#text-widget'
        },*/
       {
            channel: 'list-widget',
            element: '#list-widget'
        }
    ]);

    Backbone.history.start();
});
