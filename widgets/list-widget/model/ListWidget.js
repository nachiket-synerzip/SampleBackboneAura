/**
* This class represents the Model for ListWidget
*
* @class ListWidget
* @constructor
*/
define(
	['sandbox'], 
	function (sandbox) {
		"use strict";

		var ListWidgetModel = sandbox.mvc.Model({
			defaults: {
				name: "A",
				surname: "B"
			},
			initialize: function () {
			},
			parse: function (result) {
				return result;
			}
		});
		return ListWidgetModel;
	}
);
