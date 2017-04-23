sap.ui.define([
		"sap/uxap/BlockBase"
	], function (BlockBase) {
		"use strict";

		return BlockBase.extend("gagarin.block.object.WorkflowList", {

			metadata: {
				views: {
					Collapsed: {
						viewName: "gagarin.view.objectView.WorkflowList",
						type: "XML"
					},
					Expanded: {
						viewName: "gagarin.view.objectEdit.WorkflowList",
						type: "XML"
					}
				}
			}
		});
	}
);
