"use strict";


console.log("main.js loaded");
require("bootstrap");
var object = {};
let header = require("./attractory.js");
let populate = require("./populate.js");
let parkInfo;
let headerTemplate = require("../templates/header.hbs");
let footerTemplate = require("../templates/footer.hbs");
let dropDowns = require("./dropdowns.js");
let events = require("./events.js");
let attractory = require("./attractory.js");

// Promise.all([attractory.getAttractionTypes, attractory.getAttractions])
// 	.then(
// 		dropDowns,
// 		() => {console.log("data load for dropdowns incomplete");}
// 	);

attractory.getAttractionTypes(object)
.then(
attractory.getAttractions,
() => {console.log("types did not load");}
)
.then(
dropDowns,
() => {console.log("data load for dropdowns incomplete");}
);

attractory.getParkInfo(object)
	.then(
		populate.header,
		()=> {console.log("attractory.getParkInfo did not run");}
	).then(
    	populate.footer,
		()=>{console.log("header did not run");}
  	).then(
		events.map,
		() => {console.log("populate.areas did not run");}
	);


attractory.getAttractionTypes(object)
	 .then(
		populate.types,
		() => {console.log("attractory.getTypeInfo did not run");}
	).then(
		events.type,
		() => {console.log("populate.types did not run");}
	);

attractory.getAttractions(object)
	.then(
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