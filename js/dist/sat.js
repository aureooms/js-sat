"use strict";

(function () {

	'use strict';

	var definition = function definition(exports, undefined) {

		/* js/src/dummy.js */

		return exports;
	};
	if (typeof exports === "object") {
		definition(exports);
	} else if (typeof define === "function" && define.amd) {
		define("aureooms-js-sat", [], function () {
			return definition({});
		});
	} else if (typeof window === "object" && typeof window.document === "object") {
		definition(window["sat"] = {});
	} else console.error("unable to detect type of module to define for aureooms-js-sat");
})();