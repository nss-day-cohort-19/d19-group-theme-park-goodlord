"use strict";

console.log("attractory.js loaded");

let getAreas = function () {
	return new Promise ((resolve, reject) => {
		$.getJSON("https://good-lord.firebaseio.com/areas.json", function (data) {
			resolve(data);
		}).fail (function () {
			console.log("areas did not load!");
		});
	});
},

getAttractionTypes = function (areaID) {
	return new Promise ((resolve, reject) => {
		$.getJSON("https://good-lord.firebaseio.com/attraction_types.json", function (data) {
			resolve(data, areaID);
		}).fail (function () {
			console.log("attraction types did not load!");
		});
	});
},

getAttractions = function () {
	return new Promise ((resolve, reject) => {
		$.getJSON("https://good-lord.firebaseio.com/attractions.json", function (data) {
			resolve(data);
		}).fail (function () {
			console.log("attractions did not load!");
		});
	});
},

getParkInfo = function () {
	return new Promise ((resolve, reject) => {
		$.getJSON("https://good-lord.firebaseio.com/park-info.json", function (data) {
			resolve(data);
		}).fail (function () {
			console.log("park info did not load!");
		});
	});
};

module.exports = {getAreas, getAttractionTypes, getAttractions, getParkInfo};


// let areas = []''
// 	attractionTypes = [],
// 	attractions = [],
// 	parkInfo = [];

// $.getJSON("https://good-lord.firebaseio.com/.json", function(data) {
// 	console.log("area stuff", data);

// 	$.each(data.areas, function(index, value) {
// 		areas.push(value);
// 	});

// 	$.each(data.attraction_types, function(index, value) {
// 		attractionTypes.push(value);
// 	});

// 	$.each(data.attractions, function(index, value) {
// 		attractions.push(value);
// 	});

// 	$.each(data["park-info"], function(index, value) {
// 		parkInfo.push(value);
// 	});

// 	console.log("PARK INFO", parkInfo);
// });
