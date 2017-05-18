"use strict";

console.log("populate.js");

let headerTemplate = require("../templates/header.hbs");
let footerTemplate = require("../templates/footer.hbs");
let attractionTemplate = require("../templates/attractions.hbs");
let areasTemplate = require("../templates/areas.hbs");
let typesTemplate = require("../templates/types.hbs");
let backbtn = require("./back.js");

function header (object) {
    return new Promise ((resolve, reject) => {
		console.log(object.parkInfo, "dis one");
	    $("#headerID").append(headerTemplate(object.parkInfo[0]));
	    resolve(object);
    });
}

function footer (object) {
	return new Promise ((resolve, reject) => {
	console.log("footer info", object.parkInfo);
    $("#footerID").append(footerTemplate(object.parkInfo[0]));
	resolve(object);
	});
}

function areas (object) {
	return new Promise ((resolve, reject) => {
		for(let n=0; n<object.areas.length; n+=1){
    		$("#mapScreen").append(areasTemplate(object.areas[n]));
		}
    resolve(object);
	});
}

function types (object) {
	return new Promise ((resolve, reject) => {
		$("#typeScreen").html(`<button class="Typesback" type="button" class="btn">BACK</button>`);
		for(let n=0; n<object.types.length; n+=1){
			$("#typeScreen").append(typesTemplate(object.types[n]));
		}
		backbtn.backType();
    resolve(object);
	});
}

function attractions (object) {
	return new Promise ((resolve, reject) => {
		let attractions = object.attractions.filter(function (a) { if(a.type_id  == object.typeID) {return a;}});
		if(object.areaID) {attractions = attractions.filter(function (a) { if(a.area_id  == object.areaID) {return a;}});}
		$("#attractionScreen").html(`<button class="Attractback" type="button" class="btn">BACK</button>`);
		for(let n=0; n < attractions.length;n+=1){
			$("#attractionScreen").append(attractionTemplate(attractions[n]));
            console.log("attractions", attractions);
		}
		backbtn.backAttract();
	resolve(object);
    });
}


module.exports = {header, footer, areas, types, attractions};
