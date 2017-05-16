"use strict";


console.log("main.js loaded");
let header = require("./attractory.js");
let populate = require("./populate.js");
let parkInfo;
let headerTemplate = require("../templates/header.hbs");
let footerTemplate = require("../templates/footer.hbs");
let dropDowns = require("./dropdowns.js");
let events = require("./events.js");
let attractory = require("./attractory.js");

attractory.getParkInfo()
	.then(
		populate.header,
		()=> {console.log("attractory.getParkInfo did not run");}
	).then(
    dropDowns,
    () => {console.log("header did not run");}
  ).then
		populate.footer,
		()=>{console.log("drop downs did not run");}
	).then(
		attractory.getAreas,
		()=>{console.log("populate.footer did not run");}
	).then(
		populate.areas,
		() => {console.log("attractory.getAreas did not run");}
	).then(
		events.map,
		() => {console.log("populate.areas did not run");}
	).then(
		attractory.getAttractionTypes,
		() => {console.log("events.map did not run");}
	).then(
		populate.types,
		() => {console.log("attractory.getTypeInfo did not run");}
	).then(
		events.type,
		() => {console.log("populate.types did not run");}
	).then(
		attractory.getAttractions,
		()=>{console.log("events.type did not run");}
	).then(
		populate.attractions,
		()=>{console.log("attractory.getAttractions did not run");}
	);












// header.getInfo()
// 	.then((data) => {
// 		parkInfo = data;
// 		console.log(parkInfo);
//         populateFooter(parkInfo);
//         populateHeader(parkInfo)
//         then();
// 	});