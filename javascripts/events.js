"use strict";

console.log("events.js loaded");
let attractory = require("./attractory.js");
let populate = require("./populate.js");
let attractionModal = require("./create_modal.js");
var moment = require('moment');
let attractionTemplate = require("../templates/attractions.hbs");
let backbtn = require('./back.js');

// let areaclick = function(event, object, resolve) {
// 	object.areaID = event.currentTarget.id.replace("area","");
// 	console.log("event fired on area ", object.areaID);
// 	$("#mapScreen").addClass("hidden");
// 	$("#typeScreen").removeClass("hidden");
// 	resolve(object);
// };

// let typeclick = function(event, object, resolve) {
// 	object.typeID = event.currentTarget.id.replace("type", "");
// 	console.log("event fired on type ", object.typeID);
// 	$("#typeScreen").addClass("hidden");
// 	$("#attractionScreen").removeClass("hidden");
// 	resolve(object);

let type =function (object) {
	return new Promise ( (resolve, reject) => {
		$("#typeScreen").click( function(event) {
			if (event.target.parentElement.classList[0] == "typeSelector") {
				object.typeID = event.target.parentElement.id.replace("type", "");
				console.log("event fired on Type ", object.typeID);
				$("#typeScreen").addClass("hidden");
				$("#attractionScreen").removeClass("hidden");
				$("#timesScreen").addClass("hidden");
				populate.attractions(object);
			}
		});
	});
};

let map =function (object) {
	return new Promise ( (resolve, reject) => {
		$("#master-wrapper").click( function(event) {
			if (event.target.classList[0] == "parkArea") {
				object.areaID = event.target.id.replace("area", "");
				console.log("event fired on area ", object.areaID);
				$("#mapScreen").addClass("hidden");
				$("#typeScreen").removeClass("hidden");
				$("#timesScreen").addClass("hidden");
				populate.types(object);
			}
			if (event.target.classList[0] == "attraction") {
				let attractions = event.target.id.replace("attractions", "");
				attractionModal(attractions);
			}

			if (event.target.parentElement.id == "timedrop") {
				let times = event.target.innerHTML;
				console.log("testTime", times);
				if (times == "Now") {
					times = moment().format("HH:mm");
				}
				$("#typeScreen").addClass("hidden");
				$("#attractionScreen").addClass("hidden");
				$("#mapScreen").addClass("hidden");
				$("#timesScreen").removeClass("hidden");
				$("#timesScreen").html("");
				$("#timesScreen").append(`<button class="TimesbackBtn" type="button" class="btn">BACK</button>`);
				backbtn.timeAttract();
				let timeArray = attractory.getTime(times);
				$("#timesScreen").append(`<h1 class="col-xs-12 timeText">${times}</h3>`);
				for (var i = 0; i < timeArray.length; i++) {
					console.log("timeArray[i]", timeArray[i]);
					$("#timesScreen").append(attractionTemplate(timeArray[i]));
				}
				//get the 8:55 thing happening
				backbtn.timeAttract();
			}
		});
	});
};


// let map = function (object) {
// 	return new Promise( (resolve, reject) => {
// 		for(let n=0; n<object.areas.length; n+=1) {
// 			$("#area${n+1}").click(areaclick(event, object, resolve));
// 		}
// 	});
// };

// let type = function (object) {
// 	return new  Promise( (resolve, reject) => {
// 		for(let n=0; n<object.types.length; n+=1) {
// 			$("#type${n+1}").click(typeclick(event, object, resolve));
// 		}
// 	});
// };

module.exports = {map, type};
