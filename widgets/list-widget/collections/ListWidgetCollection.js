define(
	['sandbox', '../config', '../models/ListWidget'], 
	function (sandbox, config, ListWidgetModel) {
		"use strict";
		var ListWidgetCollection = sandbox.mvc.Collection({
			model: ListWidgetModel,
			url: "data/items.js",
			parse: function (result) {
				return result;
			},
			initialize: function (options) {
			},
		});
		return ListWidgetCollection;
	}
);
