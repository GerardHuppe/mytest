sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History",
	"gagarin/custom/class/Common",
	"sap/m/MessageBox"
], function (Controller, History, Common, MessageBox) {
	"use strict";

	return Controller.extend("gagarin.controller.BaseController", {

		common: Common,

		onInit: function () {
		},

		getRouter: function () {
			return this.getOwnerComponent().getRouter();
		},

		getModel: function (sName) {
			var oSource = (this.getOwnerComponent()) ? this.getOwnerComponent() : this.getView();
			return oSource.getModel(sName);
		},

		getStateProperty: function (sProperty) {
			return this.getModel("state").getProperty(sProperty);
		},

		setStateProperty: function (sProperty, oValue, bMerge) {
			if (arguments.length === 2){
				bMerge = false;
			}

			return this.getModel("state").setProperty(sProperty, oValue, bMerge);
		},

		setModel: function (oModel, sName) {
			var oSource = (this.getOwnerComponent()) ? this.getOwnerComponent() : this.getView();
			return oSource.setModel(oModel, sName);
		},

		getResourceBundle: function () {
			return this.getOwnerComponent().getModel("i18n").getResourceBundle();
		},

		byId: function (Id) {
			return sap.ui.getCore().byId(this.getView().createId(Id));
		},

		getText: function (sKey, arArguments) {
			return this.getModel("i18n").getResourceBundle().getText(sKey, arArguments);
		},

		getODataUrl: function(){
			var uri = this.getOwnerComponent().getManifestObject().getJson()["sap.app"].dataSources.mainService.uri;
			return uri;
		},

		onNavBack: function () {
			var sPreviousHash = History.getInstance().getPreviousHash();

			if (sPreviousHash !== undefined) {
				history.go(-1);
			} else {
				var bReplace = true;
				this.getRouter().navTo("worklist", {}, bReplace);
			}
		},

		setMultiProperty: function (oFieldSet, sModelPath, bCheckCurrent) {
			var that = this;
			var sFieldPath, aFieldValue;
			$.each(oFieldSet, function (field, value) {
				sFieldPath = sModelPath + "/" + field;
				if (value !== undefined) {
					aFieldValue = that.getModel().getProperty(sFieldPath);
					if (
						(!Common.deepEqual(aFieldValue, value) || !bCheckCurrent) &&
						((typeof value !== "object") || value.ms !== undefined || (typeof (value.getDate) === "function"))
					) {
						if (typeof (value.getDate) === "function") {
							that.getModel().setProperty(sModelPath + "/" + field, value);
						} else {
							that.getModel().setProperty(sModelPath + "/" + field, value);
						}
					}
				}
			});
		},

		twoDigits: function (val) {
			return (val >= 0 && val < 10) ? "0" + val : val;
		}
	});
});
