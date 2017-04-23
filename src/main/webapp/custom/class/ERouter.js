sap.ui.define([
	"sap/m/routing/Router",
	"sap/ui/core/routing/HashChanger"
], function (Router, HashChanger) {
	"use strict";

	return Router.extend("gagarin.custom.class.ERouter", {
		_HashChanger: null,

		constructor: function () {
			Router.prototype.constructor.apply(this, arguments);
			this._HashChanger = new HashChanger();
		},

		setHash: function (sHash) {
			this._HashChanger.setHash(sHash);
		}
	});

});
