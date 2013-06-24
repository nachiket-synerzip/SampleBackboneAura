/* jslint sloppy:true */
/* global define */

// ## Core Extension
// @fileOverview Extend the aura-core mediator
define(['aura_core', 'backbone', 'localstorage'], function(core, Backbone, Store) {

	var mediator = Object.create(core);
	mediator.data.Store = Store;
	mediator.mvc = Backbone;
	mediator.ajax = {};

	mediator.dom.create = function(htmlSnippet) {
		return $(htmlSnippet);
	};
	mediator.ajax = function(_object) {
		var defaults = {};
		defaults.type = "GET";
		defaults.url = "";
		defaults.headers = {
			"Accept" : "application/json",
			"Content-Type" : "application/json; charset=utf-8",
		};
		defaults.dataType = "json";

		for (p in defaults) {
			if (_object[p]) {
				defaults[p] = _object[p];
			}
		};

		var request = $.ajax(defaults);
		request.success(function(data) {
			_object.onSuccess(data);
		});
		request.error(function(error) {
			_object.onError(error);
		});
	}
	return mediator;

}); 