sap.ui.define([
		"sap/uxap/BlockBase"
	], function (BlockBase) {
		"use strict";

		return BlockBase.extend("gagarin.block.object.LinkedObjects", {

			metadata: {
				views: {
					Collapsed: {
						viewName: "gagarin.view.objectView.LinkedObjects",
						type: "XML"
					},
					Expanded: {
						viewName: "gagarin.view.objectEdit.LinkedObjects",
						type: "XML"
					}
				}
			}
		});
	}
);
