"use strict";


console.log("is main loading?");

require("bootstrap");
let header = require("./header.js");
let parkInfo;
let headerTemplate = require("../templates/header.hbs");
let footerTemplate = require("../templates/footer.hbs");
let events = require("./events.js");
let attractory = require("./attractory.js");

attractory.getParkInfo()
	.then(
		populateHeader,
	).then(
		populateFooter,
	).then(
		
	).then(
		events.map,
	).then(
		attractory.getTypeInfo(areaID),

	)










// header.getInfo()
// 	.then((data) => {
// 		parkInfo = data;
// 		console.log(parkInfo);
//         populateFooter(parkInfo);
//         populateHeader(parkInfo)
//         then();
// 	});

function populateHeader (parkInfo) {
    return new Promise ((resolve, reject) => {
		console.log(parkInfo[0]);
		$("#headerID").append(headerTemplate(parkInfo[0]));
		resolve();
	}
}


function populateFooter (parkInfo) {
	return new Promise(

		)
    $("#footerID").append(footerTemplate(parkInfo[0]));
}
