"use strict";

console.log("attractory.js loaded");

var attractionsList, typeList, areaList, timedEvents;

var moment = require('moment');

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


let eventsWithTimes = function(object) {
	return new Promise ((resolve, reject) => {
		let timedAttractions = [];
		for(let n=0; n<object.attractions.length; n+=1) {
			if("times" in object.attractions[n]) {
				timedAttractions.push(object.attractions[n]);
			}
		}
		timedEvents = timedAttractions;
		console.log("array of timed attractions", timedAttractions);
		resolve(object);
	});
};

function getTime(times) {
	let time1 = moment(times).clone();
	let time2 = moment(times).clone();
	time1.add(15, 'm');
	console.log("time1 time2", time1);
	let timeArray = [];
	for (var i = 0; i < timedEvents.length; i++) {
		for (var j = 0; j < timedEvents[i].times.length; j++) {
			if (moment(timedEvents[i].times[j]).isBetween(time2, time1)) {
				timeArray.push(timedEvents[i]);
			}
		}
	}
	return timeArray;
}


module.exports = {getAreas, getAttractionTypes, getAttractions, getParkInfo, eventsWithTimes, getAttData, getTime};



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
