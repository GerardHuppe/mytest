sap.ui.define([
	"gagarin/controller/BaseController",
	"sap/ui/model/json/JSONModel",
	"sap/ui/Device",
	"gagarin/custom/model/appModels",
	"gagarin/controller/ErrorHandler"
], function(BaseController, JSONModel, Device, appModels, ErrorHandler) {
	"use strict";

	return BaseController.extend("gagarin.controller.App", {

		onInit: function() {
			BaseController.prototype.onInit.apply(this, arguments);
			//var oViewModel, iOriginalBusyDelay = this.getView().getBusyIndicatorDelay();
			//var that = this;

			this._oErrorHandler = new ErrorHandler(this.getOwnerComponent());
			this.setModel(appModels.createStateJSONModel(this), "state");

			// this.getOwnerComponent().getModel().metadataLoaded().then(function() {
			// 	this.setStateProperty("/app/busy", false);
			// 	this.setStateProperty("/app/delay", iOriginalBusyDelay);
			// });
		}
	});

});
