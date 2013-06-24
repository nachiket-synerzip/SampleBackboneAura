/**
 * 
* This class is the entry point for button-widget
* 
* @class main
* @constructor
*/
define( ['sandbox', './views/ButtonWidgetView'], function (sandbox, ButtonWidgetView ) {
    "use strict";

    var ButtonWidgetWidget =  function ( element ) {
  
        sandbox.dom.loadCss( sandbox.util.getWidgetPath('button-widget') + '/css/style.css' );
  
        new ButtonWidgetView({
            el: sandbox.dom.find( element )
        });
    };
    
    return ButtonWidgetWidget;

});
