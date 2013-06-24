/* global define */

// ## Sandbox Extension
// @fileOverview Extend the aura-core facade
// @todo This is a stupid place to include jquery ui
/**
 * This is extension to the aura-sandbox. It includes helper methods 
 *
 * @class aura-extensions: facade (sandbox)
 * @constructor
 */
define(['aura_sandbox', 'core', 'perms', 'jquery_ui'], function(sandbox, core, perms) {

	var facade = Object.create(sandbox);
	facade.data.Store = core.data.Store;
	facade.mvc = {};
	facade.widgets = {};
	facade.ajax = {};

	facade.mvc.View = function(view) {
		return core.mvc.View.extend(view);
	};

	facade.mvc.Model = function(model) {
		return core.mvc.Model.extend(model);
	};

	facade.mvc.Collection = function(collection) {
		return core.mvc.Collection.extend(collection);
	};

	facade.widgets.stop = function(channel, el) {
		return sandbox.stop.apply(this, arguments);
	};

	facade.widgets.start = function(channel, el) {
		return sandbox.start.apply(this, arguments);
	};

	facade.dom.create = function(htmlSnippet) {
		return core.dom.create(htmlSnippet);
	};

	facade.dom.loadCss = function(path) {
		sandbox.dom.create('<link>').attr('rel', 'stylesheet').attr('type', 'text/css').attr('href', path).appendTo('head');
	};

	facade.dom.layout = function(element, options) {
		return core.dom.layout(element, options);
	};
	facade.ajax = function(_object) {
		return core.ajax(_object);
	};

	facade.util.getWidgetPath = function(widgetName) {
		return 'widgets/' + widgetName;
	};

	/**
	 * Extracts the id from the URL of type *\/:id
	 * For example:
	 * input: http://example.com:8888/#search-lease/details/113
	 * output: 113
	 * 
	 * @method getIdFromUrl
	 * @param {String} url
	 * @returns {String} the id extracted
	 */
	facade.util.getIdFromUrl = function(url) {
		var id = "";
		for (var i = url.length - 1; i >= 0; i--) {
			if (url[i] != "/") {
				id = url[i] + id;
			} else {
				break;
			}
		}
		return id;
	};
	
	/**
	 * Creates a query string from a key-value map
	 * For example:
	 * input: {"name": "ABC", "surname":"XYZ"}
	 * output: name=ABC&surname=XYZ
	 * 
	 * @method createQueryString
	 * @param {Object} the key-value map
	 * @returns {String} the query string created usign key-value pairs
	 */
	facade.util.createQueryString = function(object) {
		//we will create an array of "key=val" items and join them with "&"
		var q = [];
		for (var p in object) {
			q.push(p + "=" + object[p]);
		}
		return q.join("&");
	};

	/**
	 * Responsible for converting a field into jquery ui datepicker widget
	 *
	 * @method convertToDatePicker
	 * @param {Object} el
	 * @param {String} widgetName
	 * @param {String} imgSrc
	 */
	facade.util.convertToDatePicker = function(el,widgetName,imgSrc) {
		$(el).datepicker({
			showOn : "both",
			buttonImage : sandbox.util.getWidgetPath(widgetName) + imgSrc,
			buttonImageOnly : true
		});
	};
	/**
	 * Responsible for converting a field into jquery ui autocomplete widget
	 *
	 * @method convertToAutoComplete
	 * @param {Object} el
	 * @param {String} url
	 */ 
	 facade.util.convertToAutoComplete = function(el, url) {
		$(el).autocomplete({
			source : url,
		});
	};
	/**
	 * Responsible for populating the list in HTML select tag
	 *
	 * @method populateList
	 * @param {Object} el
	 * @param {Object} data
	 */ 
	 facade.util.populateList = function(el, data) {
		var options = "";

		$.each(data, function(index, value) {
			options += "<option value='" + value + "' >" + value + "</opton>";
		});
		sandbox.dom.find(el).html(options);
	};
	
	return facade;

}); 