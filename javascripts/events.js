"use strict";

console.log("events.js loaded");

let areaID;
let typeID;


let map = function (data) {
	return new Promise( (resolve, reject) => {
		$("#area1").click(function(event) {
			areaID = event.currentTarget.id.replace("area","");
			console.log("event fired on area ", areaID);
			$("#mapScreen").addClass("hidden");
			 $("#typeScreen").removeClass("hidden");
			 console.log("j4", areaID);
			resolve(areaID);
		});
		$("#area2").click(function(event) {
			areaID = event.currentTarget.id.replace("area","");
			console.log("event fired on area ", areaID);
			$("#mapScreen").addClass("hidden");
			$("#typeScreen").removeClass("hidden");
			resolve(areaID);

		});
		$("#area3").click(function(event) {
			areaID = event.currentTarget.id.replace("area","");
			console.log("event fired on area ", areaID);
			$("#mapScreen").addClass("hidden");
			$("#typeScreen").removeClass("hidden");
			resolve(areaID);

		});
		$("#area4").click(function(event) {
			areaID = event.currentTarget.id.replace("area","");
			console.log("event fired on area ", areaID);
			$("#mapScreen").addClass("hidden");
			$("#typeScreen").removeClass("hidden");
			resolve(areaID);

		});
		$("#area5").click(function(event) {
			areaID = event.currentTarget.id.replace("area","");
			console.log("event fired on area ", areaID);
			$("#mapScreen").addClass("hidden");
			$("#typeScreen").removeClass("hidden");
			resolve(areaID);

		});
	});
};

let type = function (data) {
	return new  Promise((resolve, reject) => {
		$("#type1").click(function (event) {
			console.log("areaId that jason asked for", data[1]);
			typeID = event.currentTarget.id.replace("type", "");
			data.push(typeID);
			data.shift();
			console.log("event fired on type ", typeID);
			$("#typeScreen").addClass("hidden");
			$("#attractionScreen").removeClass("hidden");
			resolve(data);
		});
		$("#type2").click(function (event) {
			console.log("areaId that jason asked for", data[1]);
			typeID = event.currentTarget.id.replace("type", "");
			data.push(typeID);
			data.shift();
			console.log("event fired on type ", typeID);
			$("#typeScreen").addClass("hidden");
			$("#attractionScreen").removeClass("hidden");
			resolve(data);
		});
		$("#type3").click(function (event) {
			console.log("areaId that jason asked for", data[1]);
			typeID = event.currentTarget.id.replace("type", "");
			data.push(typeID);
			data.shift();
			console.log("event fired on type ", typeID);
			$("#typeScreen").addClass("hidden");
			$("#attractionScreen").removeClass("hidden");
			resolve(data);
		});
		$("#type4").click(function (event) {
			console.log("areaId that jason asked for", data[1]);
			typeID = event.currentTarget.id.replace("type", "");
			data.push(typeID);
			data.shift();
			console.log("event fired on type ", typeID);
			$("#typeScreen").addClass("hidden");
			$("#attractionScreen").removeClass("hidden");
			resolve(data);
		});
	});
};


module.exports = {map, type};