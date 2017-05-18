"use strict";

console.log("attractory.js loaded");

let getAreas = function (object) {
	return new Promise ((resolve, reject) => {
		$.getJSON("https://good-lord.firebaseio.com/areas.json", function (data) {
			object.areas = data;
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
			resolve(object);
		}).fail (function () {
			console.log("attractions did not load!");
		});
	});
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

let eventsWithTimes = function(object) {
	return new Promise ((resolve, reject) => {
		let timedAttractions = [];
		for(let n=0; n<object.attractions.length; n+=1) {
			if("times" in object.attractions[n]) {
				timedAttractions.push(object.attractions[n]);
			}
		}
		console.log("array of timed attractions", timedAttractions);
		resolve(object);
	});
};


module.exports = {getAreas, getAttractionTypes, getAttractions, getParkInfo, eventsWithTimes};


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
