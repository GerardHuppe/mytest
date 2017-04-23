sap.ui.define([], function () {
	"use strict";

	return {
		not: function (arg) {
			return !arg;
		},

		deserialize: function (str) {
			var pairs = str.split(/&amp;|&/i),
				h = {},
				options = options || {};
			for (var i = 0; i < pairs.length; i++) {
				var kv = pairs[i].split('=');

				kv[0] = decodeURIComponent(kv[0]);
				if (kv[0].indexOf("[]", kv[0].length - 3) > -1) {
					kv[0] = kv[0].slice(0, -2);
				}

				if (!$.isArray(h[kv[0]])) {
					h[kv[0]] = [];
				}
				h[kv[0]].push(decodeURIComponent(kv[1]));
			}
			return h;
		},

		getFormattedDate: function (oDate) {
			return ("00" + (oDate.getMonth() + 1)).slice(-2) + "." +
				("00" + oDate.getDate()).slice(-2) + "." +
				oDate.getFullYear() + " " +
				("00" + oDate.getHours()).slice(-2) + ":" +
				("00" + oDate.getMinutes()).slice(-2) + ":" +
				("00" + oDate.getSeconds()).slice(-2);
		},

		deepEqual: function (a, b) {
			if (a === b) {
				return true;
			}

			if (a == null || typeof (a) !== "object" ||
				b == null || typeof (b) !== "object") {
				return false;
			}

			var propertiesInA = 0,
				propertiesInB = 0;
			for (var property in a) {
				propertiesInA += 1;
			}
			for (var property in b) {
				propertiesInB += 1;
				if (!(property in a) || !this.deepEqual(a[property], b[property])) {
					return false;
				}
			}
			return propertiesInA === propertiesInB;
		},

		twoDigits: function (val) {
			return (val >= 0 && val < 10) ? "0" + val : val;
		},



	};

});
