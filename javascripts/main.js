"use strict";


console.log("is main loading?");

require("bootstrap");
let header = require("./header.js");
let areas = require("./areas.js");
let parkInfo;

header.getInfo()
	.then(
    (data) => {
		parkInfo = data;
		console.log(parkInfo);
        retrun areas.getAreas();
	}).then()

