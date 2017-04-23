sap.ui.define([
	"gagarin/controller/ObjectController",
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/routing/History",
	"sap/m/MessageToast",
	"sap/m/Dialog",
	"sap/m/MessageBox",
	"sap/m/UploadCollectionParameter"
], function (ObjectController,
			 JSONModel,
			 History,
			 MessageToast,
			 Dialog,
			 MessageBox,
			 UploadCollectionParameter) {
	"use strict";

	return ObjectController.extend("gagarin.controller.Object", {

		onInit: function () {
			BaseController.prototype.onInit.apply(this, arguments);
		}
	});
});
