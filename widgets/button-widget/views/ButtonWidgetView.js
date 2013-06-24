/**
 * This class represents view of Button widget
 *
 * @class ButtonWidgetView
 * @constructor
 */
define(['sandbox', '../config', 'jquery', 'jquery_ui', 'text!../templates/ButtonTemplate.html'], 
	function(sandbox, config, $, $ui, ButtonWidgetTpl) {
		"use strict";
		var ButtonWidgetView = sandbox.mvc.View({

			template : _.template(ButtonWidgetTpl),

			events : {
				"click #widgetButton": "handleClick"
			},

			initialize : function() {
				console.log("ButtonWidgetView initialize.");
				this.render();
			},

			render : function() {
				var self = this;
				self.$el.html(self.template());

			},
			
			handleClick: function () {
				alert("Handle Click :)");
				sandbox.publish("Button.clicked", {
					hi: "payload data received from the event"
				});
			}
		});
		return ButtonWidgetView;
	}
);
