/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"lester/portfolio/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});