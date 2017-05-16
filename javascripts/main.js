"use strict";


console.log("is main loading?");

require("bootstrap");
let header = require("./header.js");
let parkInfo;
let headerTemplate = require("../templates/header.hbs");

header.getInfo()
	.then((data) => {
		parkInfo = data;
		console.log(parkInfo);
        populateHeader(parkInfo);
	});

function populateHeader (parkInfo) {
    console.log(parkInfo[0]);
    $("#headerID").append(headerTemplate(parkInfo[0]));
}
