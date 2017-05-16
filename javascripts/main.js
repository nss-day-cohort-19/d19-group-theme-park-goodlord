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
            return areas.getAreas();
    }).then(
        (data) => {
            areasInfo = data;
            return attractions.getAttractions();
    }).then(
        (data) => {
            attractionsInfo = data;
            populateAreas();
    }).catch(function(error){
        console.log(error);
    });


function populateHeader (parkInfo) {
    console.log(parkInfo[0]);
    $("#headerID").append(headerTemplate(parkInfo[0]));
}

//tl this parses through areas data and displays to their parent divs, will need to be converted to handlebars if group wants
function populateAreas () {
    for (let i =0; i < 5; i++) {
        let areaHTML = `<p class="area-type-name">${areasInfo[i].name}</p>`;

        $("#area" + `${i +1}`).append(areaHTML).click((event) =>{

            let areaID = areasInfo[i].id;
            let typeID = typesInfo[i].id;
            populateTypes(areaID, typeID);
        });
    }
}

//parses through attractions.type_of_id and types.id
function populateTypes(areaID, typeID) {

    for (let i = 0; i < attractionsInfo.length; i++) {
        if (typeID === attractionsInfo[i].type_id) {
        $("#mapScree").addClass("tl-remove-area-test");
        }
    }
    for (let a = 1; a <= 4; a++) {
        let typesHTML = `<p>${typesInfo[a].name}</p>`;
        $("#type" + `${a}`).append(typesHTML);
        console.log("and what is the current id?",$("#type" + `${a}`));
        }
}


