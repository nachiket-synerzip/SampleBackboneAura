/**
 * 
* This class is the entry point for list-widget widget, and it is responsible for instantiation of SearchFormView.
* 
* @class main
* @constructor
*/
define( ['sandbox', './views/ListWidgetView'], function (sandbox, ListWidgetView ) {
    "use strict";

    var ListWidgetWidget =  function ( element ) {
  
        sandbox.dom.loadCss( sandbox.util.getWidgetPath('list-widget') + '/css/style.css' );
  
        new ListWidgetView({
            el: sandbox.dom.find( element )
        });
    };
    
    return ListWidgetWidget;

});
