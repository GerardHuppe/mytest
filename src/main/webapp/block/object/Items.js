sap.ui.define([
		"sap/uxap/BlockBase"
	], function (BlockBase) {
		"use strict";

		return BlockBase.extend("gagarin.block.object.Items", {

			metadata: {
				views: {
					Collapsed: {
						viewName: "gagarin.view.objectView.Items",
						type: "XML"
					},
					Expanded: {
						viewName: "gagarin.view.objectEdit.Items",
						type: "XML"
					}
				}
			}
		});
	}
);
