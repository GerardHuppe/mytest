sap.ui.define([
		"sap/uxap/BlockBase"
	], function (BlockBase) {
		"use strict";

		return BlockBase.extend("gagarin.block.object.Suppliers", {

			metadata: {
				views: {
					Collapsed: {
						viewName: "gagarin.view.objectView.Suppliers",
						type: "XML"
					},
					Expanded: {
						viewName: "gagarin.view.objectEdit.Suppliers",
						type: "XML"
					}
				}
			}
		});
	}
);
