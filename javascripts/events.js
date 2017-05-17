"use strict";

console.log("events.js loaded");

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
// };


let type =function (object) {
	return new Promise ( (resolve, reject) => {
		$("#typeScreen").click( function(event) {
			if (event.target.parentElement.classList[0] == "typeSelector") {
				object.typeID = event.target.parentElement.id.replace("type", "");
				console.log("event fired on area ", object.typeID);
				$("#typeScreen").addClass("hidden");
				$("#attractionScreen").removeClass("hidden");
				resolve(object);
			}
		});
	});
};


let map =function (object) {
	return new Promise ( (resolve, reject) => {
		$("#mapScreen").click( function(event) {
			console.log(event);
			if (event.target.parentElement.classList[0] == "parkArea") {
				object.areaID = event.target.parentElement.id.replace("area", "");
				console.log("event fired on area ", object.areaID);
				$("#mapScreen").addClass("hidden");
				$("#typeScreen").removeClass("hidden");
				resolve(object);
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