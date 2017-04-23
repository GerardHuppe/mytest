sap.ui.define(['sap/ui/core/UIComponent'],
	function(UIComponent) {
	"use strict";

	var Component = UIComponent.extend("sap.m.sample.TableColumnWidth.Component", {

		metadata : {
			rootView : "sap.m.sample.TableColumnWidth.Table",
			dependencies : {
				libs : [
					"sap.m",
					"sap.ui.layout"
				]
			},

			config : {
				sample : {
					files : [
						"Documents.view.xml",
						"Documents.controller.js"
					]
				}
			}
		}
	});

	return Component;

});
