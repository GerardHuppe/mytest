sap.ui.define([
	"gagarin/controller/BaseController",
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/routing/History",
	"sap/m/MessageToast",
	"sap/m/Dialog",
	"sap/m/MessageBox",
	"sap/m/UploadCollectionParameter"

], function (BaseController,
			 JSONModel,
			 History,
			 MessageToast,
			 Dialog,
			 MessageBox,
			 UploadCollectionParameter) {
	"use strict";

	return BaseController.extend("gagarin.controller.Object", {

		objectPage: null,

		onInit: function () {
			BaseController.prototype.onInit.apply(this, arguments);
			this.objectPage = this.byId("ObjectPageLayout");
		},

		onEditPress: function (oControlEvent) {
			var sProperty = "/app/mode";
			var sCurrentValue = this.getStateProperty(sProperty);
			this.setStateProperty(sProperty, (sCurrentValue === "Expanded") ? "Collapsed" : "Expanded");
		}
	});


});
