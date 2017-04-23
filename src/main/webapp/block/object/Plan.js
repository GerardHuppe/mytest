sap.ui.define([
		"sap/uxap/BlockBase"
	], function (BlockBase) {
		"use strict";

		return BlockBase.extend("gagarin.block.object.Plan", {

			metadata: {
				views: {
					Collapsed: {
						viewName: "gagarin.view.objectView.Plan",
						type: "XML"
					},
					Expanded: {
						viewName: "gagarin.view.objectEdit.Plan",
						type: "XML"
					}
				}
			}
		});
	}
);
