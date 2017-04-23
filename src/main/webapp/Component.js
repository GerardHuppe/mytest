sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"gagarin/custom/model/appModels",
	"gagarin/controller/ErrorHandler",
	"sap/ui/core/ValueState",
	"gagarin/custom/class/ERouter"
], function(UIComponent, Device, appModels, ErrorHandler, ValueState) {
	"use strict";

	return UIComponent.extend("gagarin.Component", {

		metadata: {
			manifest: "json"
		},

		constructor: function(){
			UIComponent.prototype.constructor.apply(this, arguments);
		},

		init: function() {
			UIComponent.prototype.init.apply(this, arguments);

			sap.ui.localResources("controls");

			sap.ui.getCore().attachValidationError(function(oEvent) {
				if (typeof oEvent.getParameter("element").setValueState === "function"){
					oEvent.getParameter("element").setValueState(ValueState.Error);
				}
			});

			sap.ui.getCore().attachValidationSuccess(function(oEvent) {
				if (typeof oEvent.getParameter("element").setValueState === "function"){
					oEvent.getParameter("element").setValueState(ValueState.None);
				}
			});

			this.getRouter().initialize();
		},

		destroy: function() {
			UIComponent.prototype.destroy.apply(this, arguments);
		}
	});
});
