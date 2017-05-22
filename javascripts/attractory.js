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
	let hr = moment(times, ["HH-mm"]).get('hour');
	let min = moment(times, ["HH-mm"]).get('minute');
	let span = moment.duration({'minutes': 15});
	let time1 = moment().set({'minute': min, 'hour': hr}).add(15, 'm');
	let time2 = moment().set({'minute': min, 'hour': hr}).subtract(15, 'm');
	console.log(time1, time2, "times");
	let timeArray = [];
	// var timeA = moment('9:00', 'H:mm');
	// var timeB = moment('10:00', 'H:mm');
	// console.log("timeA to TimeB", timeA.from(timeB));
	// var timeC = moment().set('hour', 9, 'minute', 15);
	// console.log("timeC",  timeC);
	for (var i = 0; i < timedEvents.length; i++) {
		for (var j = 0; j < timedEvents[i].times.length; j++) {
			let hrs = moment(timedEvents[i].times[j], ["HH-mm"]).get('hour');
			let mins = moment(timedEvents[i].times[j], ["HH-mm"]).get('minute');
			let time3 = moment().set({'minute': mins, 'hour': hrs});
			if (time3.isBetween(time2, time1)) {
				timeArray.push(timedEvents[i]);
			}
			// if (times == timedEvents[i].times[j]) {
			// 	timeArray.push(timedEvents[i]);
			// 	console.log("timeArray", timeArray);
			// }
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
