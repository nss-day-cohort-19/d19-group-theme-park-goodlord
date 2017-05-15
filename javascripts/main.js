"use strict";


console.log("is main loading?");

require("bootstrap");
let header = require("./header.js");
let types = require("./types.js");
let areas = require("./areas.js");
let attractions = require("./attractions.js");
let parkInfo;
let typesInfo;
let areasInfo;
let attractionsInfo;

header.getInfo()
	.then(
    (data) => {
            parkInfo = data;
            console.log(parkInfo);
            return types.getTypes();
	}).then(
        (data) => {
            typesInfo = data;
            console.log(typesInfo);
            return areas.getAreas();
    }).then(
        (data) => {
            areasInfo = data;
            console.log(areasInfo);
            return attractions.getAttractions();
    }).then(
        (data) => {
            attractionsInfo = data;
            console.log(attractionsInfo);
            console.log("anything happening");
    }).catch(function(error){
        console.log(error);
    });

