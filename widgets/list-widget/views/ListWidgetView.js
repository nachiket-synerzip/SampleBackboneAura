/**
 * This class represents view of list widget
 *
 * @class ListWidgetView
 * @constructor
 */
define(['sandbox', '../config', 'jquery', 'jquery_ui', '../model/ListWidget', 
	'text!../templates/ListTemplate.html'], 
	function(sandbox, config, $, $ui, ListWidgetModel, ListWidgetTpl) {
		"use strict";
		var ListWidgetView = sandbox.mvc.View({

			template : _.template(ListWidgetTpl),

			events : {
			},

			initialize : function() {
				console.log("ListWidgetView initialize.");
				this.render();
			},

			render : function() {
				var self = this;
				self.$el.html(self.template());

			}
		});
		return ListWidgetView;
	}
);
