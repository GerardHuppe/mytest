sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/Device"
], function(JSONModel, Device) {
	"use strict";

	return {

		createDeviceModel: function() {
			var oModel = new JSONModel(Device);
			oModel.setDefaultBindingMode("OneWay");
			return oModel;
		},

		createStaticJSONModel: function() {
			var oModel = new JSONModel("custom/model/staticModel.json");
			oModel.setDefaultBindingMode("TwoWay");
			return oModel;
		},

		createStateJSONModel: function(oContext) {
			//var oBundle = oContext.getModel("i18n").getResourceBundle();
			var oModel = new JSONModel({
				app: {
					busy: false,
					delay: 10,
					languages: [
						{caption: "RU", key: "ru", description: "Русский"},
						{caption: "EN", key: "en", description: "English"}
					],
					selectedLanguage: null,
					mode: "Collapsed"
				}
			});
			oModel.setDefaultBindingMode("TwoWay");
			return oModel;
		}


	};

});
