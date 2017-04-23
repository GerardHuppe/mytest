sap.ui.define([
		"gagarin/controller/Object.controller",
		"sap/ui/model/json/JSONModel",
	], function (ObjectController, JSONModel) {
		"use strict";

		return ObjectController.extend("gagarin.controller.object.Suppliers", {

			onInit: function () {
				ObjectController.prototype.onInit.apply(this, arguments);
				var oModel = new JSONModel(jQuery.sap.getModulePath("gagarin", "/model/1.json"));
				this.getView().setModel(oModel);
			},

			onHover: function (oControlEvent) {
				// sap.m.MessageToast.show(oControlEvemt.getSource().getHoverText(),{duration:1000});
				this.handleResponsivePopoverIn(oControlEvent);
			},

			onHoverOut: function (oControlEvent) {
				this.handleResponsivePopoverOut(oControlEvent);
			},

			onAddRow: function () {
				var oTab = this.getView().byId("idCriteriaTableEdit");
				oTab.getModel().getData().ProductCollection.push({});
				oTab.getModel().refresh(true);
			},

			onDeleteRow: function () {
				var oTab = this.getView().byId("idCriteriaTableEdit");
				oTab.getModel().getData().ProductCollection.pop();
				oTab.getModel().refresh(true);
			},

			onExit: function () {
				if (this._oPopover) {
					this._oPopover.destroy();
				}
			},

			handleResponsivePopoverOut: function (oControlEvent) {
				this._oPopover.close();
			},

			handleResponsivePopoverIn: function (oControlEvent) {
				if (!this._oPopover) {
					this._oPopover = sap.ui.xmlfragment("gagarin.fragment.Popover", this);
					this._oPopover.bindElement("/ProductCollection/0");
					this.getView().addDependent(this._oPopover);
					debugger;
				}

				this._oPopover.openBy(oControlEvent.getSource());
			},

			handleDelete: function (oEvent) {
				var oList = oEvent.getSource(),
					oItem = oEvent.getParameter("listItem"),
					sPath = oItem.getBindingContext().getPath();

				// after deletion put the focus back to the list
				oList.attachEventOnce("updateFinished", oList.focus, oList);

				// send a delete request to the odata service
				this.oProductModel.remove(sPath);
			},

			handleValueHelp: function (oEvent) {
				var sInputValue = oEvent.getSource().getValue();

				this.inputId = oEvent.getSource().getId();
				// create value help dialog
				if (!this._valueHelpDialog) {
					this._valueHelpDialog = sap.ui.xmlfragment(
						"sap.m.sample.InputAssisted.Dialog",
						this
					);
					this.getView().addDependent(this._valueHelpDialog);
				}

				// create a filter for the binding
				this._valueHelpDialog.getBinding("items").filter([new Filter(
					"Name",
					sap.ui.model.FilterOperator.Contains, sInputValue
				)]);

				// open value help dialog filtered by the input value
				this._valueHelpDialog.open(sInputValue);
			},

			_handleValueHelpSearch: function (oControlEvemt) {
				var sValue = oControlEvemt.getParameter("value");
				var oFilter = new Filter(
					"Name",
					sap.ui.model.FilterOperator.Contains, sValue
				);
				oControlEvemt.getSource().getBinding("items").filter([oFilter]);
			},

			_handleValueHelpClose: function (oControlEvemt) {
				var oSelectedItem = oControlEvemt.getParameter("selectedItem");
				if (oSelectedItem) {
					var productInput = this.getView().byId(this.inputId);
					productInput.setValue(oSelectedItem.getTitle());
				}
				oControlEvemt.getSource().getBinding("items").filter([]);
			}
		});
	}
);
