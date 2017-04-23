sap.ui.define([
		"gagarin/controller/Object.controller",
		"sap/ui/model/json/JSONModel"
	], function (ObjectController, JSONModel) {
		"use strict";

		return ObjectController.extend("gagarin.controller.object.Items", {

			onInit: function () {
				ObjectController.prototype.onInit.apply(this, arguments);
				var oModel = new JSONModel(jQuery.sap.getModulePath("gagarin", "/model/1.json"));
				this.getView().setModel(oModel);
			},
			onCollapseAll: function () {
				var oTreeTable = this.getView().byId("TreeTableBasic");
				oTreeTable.collapseAll();
			},

			onExpandFirstLevel: function () {
				var oTreeTable = this.getView().byId("TreeTableBasic");
				oTreeTable.expandToLevel(1);
			}
		});
	}
);
