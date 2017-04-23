sap.ui.define([
		"sap/uxap/BlockBase"
	], function (BlockBase) {
		"use strict";

		return BlockBase.extend("gagarin.block.object.Documents", {

			metadata: {
				views: {
					Collapsed: {
						viewName: "gagarin.view.objectView.Documents",
						type: "XML"
					},
					Expanded: {
						viewName: "gagarin.view.objectEdit.Documents",
						type: "XML"
					}
				}
			}
		});
	}
);
