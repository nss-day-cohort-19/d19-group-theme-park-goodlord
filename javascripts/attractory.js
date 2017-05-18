"use strict";

console.log("attractory.js loaded");

var attractionsList, typeList, areaList;

let getAreas = function (object) {
	return new Promise ((resolve, reject) => {
		$.getJSON("https://good-lord.firebaseio.com/areas.json", function (data) {
			object.areas = data;
			areaList = data;
			console.log(areaList, "areaList");
			resolve(object);
		}).fail (function () {
			console.log("areas did not load!");
		});
	});
};

let getAttractionTypes = function (object) {
	return new Promise ((resolve, reject) => {
		$.getJSON("https://good-lord.firebaseio.com/attraction_types.json", function (data) {
			console.log(object, "this is our object");
			object.types = data;
			typeList = data;
			resolve(object);
		}).fail (function () {
			console.log("attraction types did not load!");
		});
	});
};


let getAttractions = function (object) {
	return new Promise ((resolve, reject) => {
		$.getJSON("https://good-lord.firebaseio.com/attractions.json", function (data) {
			object.attractions = data;
			attractionsList = data;
			resolve(object);
		}).fail (function () {
			console.log("attractions did not load!");
		});
	});
};


let getAttData = function (id) {
	let obj = attractionsList[id - 1];
	obj.type = typeList[obj.type_id - 1].name;
	// obj.area = areaList[obj.area_id - 1].name;
	return obj;
};

let getParkInfo = function (object) {
	return new Promise ((resolve, reject) => {
		$.getJSON("https://good-lord.firebaseio.com/park-info.json", function (data) {
			object.parkInfo = data;
			resolve(object);
		}).fail (function () {
			console.log("park info did not load!");
		});
	});
};

module.exports = {getAreas, getAttractionTypes, getAttractions, getParkInfo, getAttData};


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
