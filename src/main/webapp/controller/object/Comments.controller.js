sap.ui.define([
		"gagarin/controller/Object.controller"
	], function (ObjectController) {
		"use strict";

		return ObjectController.extend("gagarin.controller.object.Comments", {

			onInit: function () {
				ObjectController.prototype.onInit.apply(this, arguments);
			}
		});
	}
);
