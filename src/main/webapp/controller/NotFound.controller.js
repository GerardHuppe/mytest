sap.ui.define([
		"gagarin/controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("gagarin.controller.NotFound", {

			onLinkPressed : function () {
				this.getRouter().navTo("worklist");
			}
		});
	}
);
