"use strict";


console.log("is main loading?");

require("bootstrap");
let header = require("./header.js");
let types = require("./types.js");
let areas = require("./areas.js");
let attractions = require("./attractions.js");
let headerTemplate = require("../templates/header.hbs");
let parkInfo;
let typesInfo;
let areasInfo;
let attractionsInfo;

header.getInfo()
	.then(
    (data) => {
            parkInfo = data;
            console.log(parkInfo);
            populateHeader(parkInfo);
            return types.getTypes();
	}).then(
        (data) => {
            typesInfo = data;
//            console.log(typesInfo);
            populateAreas(typesInfo);
            return areas.getAreas();
    }).then(
        (data) => {
            areasInfo = data;
//            console.log(areasInfo);
            return attractions.getAttractions();
    }).then(
        (data) => {
            attractionsInfo = data;
//            console.log(attractionsInfo);
//            console.log("anything happening");
    }).catch(function(error){
        console.log(error);
    });


function populateHeader (parkInfo) {
    console.log(parkInfo[0]);
    $("#headerID").append(headerTemplate(parkInfo[0]));
}

//tl this parses through types data and displays to their parent divs, will need to be converted to handlebars if group wants
function populateAreas (data) {
    for (let i =0; i < 5; i++) {
        let areaHTML = `<p class="area-type-name">${data[i].name}</p>`;

        $("#area" + `${i +1}`).append(areaHTML);
    }
}







