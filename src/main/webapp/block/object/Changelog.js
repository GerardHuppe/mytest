sap.ui.define([
		"sap/uxap/BlockBase"
	], function (BlockBase) {
		"use strict";

		return BlockBase.extend("gagarin.block.object.Changelog", {

			metadata: {
				views: {
					Collapsed: {
						viewName: "gagarin.view.objectView.Changelog",
						type: "XML"
					},
					Expanded: {
						viewName: "gagarin.view.objectEdit.Changelog",
						type: "XML"
					}
				}
			}
		});
	}
);
