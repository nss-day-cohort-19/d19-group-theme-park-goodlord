"use strict";


console.log("main.js loaded");

require("bootstrap");
let header = require("./header.js");
let parkInfo;
let headerTemplate = require("../templates/header.hbs");
let footerTemplate = require("../templates/footer.hbs");
let events = require("./events.js");
let attractory = require("./attractory.js");
let populate = require("./populate.js");

attractory.getParkInfo()
	.then(
		populate.header,
		()=> {console.log("populate.header did not run");}
	).then(
		populate.footer,
		()=>{console.log("populate.footer did not run");}
	).then(
		populate.areas,
		() => {console.log("populate.areas did not run");}
	).then(
		events.map,
		() => {console.log("events.map did not run");}
	).then(
		attractory.getTypeInfo,
		() => {console.log("attractory.getTypeInfo did not run");}
	).then(
		populate.types,
		() => {console.log("populate.types did not run");}
	).then(
		events.type,
		() => {console.log("events.type did not run");}
	).then(
		attractory.getAttractions,
		()=>{console.log("attractory.getAttractions did not run");}
	).then(
		populate.attractions,
		()=>{console.log("populate.attractions did not run");}
	);

	










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
