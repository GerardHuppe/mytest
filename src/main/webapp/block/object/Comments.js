sap.ui.define([
		"sap/uxap/BlockBase"
	], function (BlockBase) {
		"use strict";

		return BlockBase.extend("gagarin.block.object.Comments", {

			metadata: {
				views: {
					Collapsed: {
						viewName: "gagarin.view.objectView.Comments",
						type: "XML"
					},
					Expanded: {
						viewName: "gagarin.view.objectEdit.Comments",
						type: "XML"
					}
				}
			}
		});
	}
);
