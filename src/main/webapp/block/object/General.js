sap.ui.define([
		"sap/uxap/BlockBase"
	], function (BlockBase) {
		"use strict";

		return BlockBase.extend("gagarin.block.object.General", {

			metadata: {
				views: {
					Collapsed: {
						viewName: "gagarin.view.objectView.General",
						type: "XML"
					},
					Expanded: {
						viewName: "gagarin.view.objectEdit.General",
						type: "XML"
					}
				}
			}
		});
	}
);
