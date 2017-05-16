"use strict";

console.log("events.js loaded");

let areaID;
let typeID;


let map = function () {
	return new Promise( (resolve, reject) => {
		$("#area1").click(function(event) {
			areaID=event.target.replace("area","");
			console.log("event fired on area ", areaID);
			$("#mapScreeen").addClass("hidden");
			$("#typeScreeen").removeClass("hidden");
			resolve(areaID);
		});
		$("#area2").click(function(event) {
			areaID=event.target.replace("area","");
			console.log("event fired on area ", areaID);
			$("#mapScreeen").addClass("hidden");
			$("#typeScreeen").removeClass("hidden");
			resolve(areaID);

		});
		$("#area3").click(function(event) {
			areaID=event.target.replace("area","");
			console.log("event fired on area ", areaID);
			$("#mapScreeen").addClass("hidden");
			$("#typeScreeen").removeClass("hidden");
			resolve(areaID);

		});
		$("#area4").click(function(event) {
			areaID=event.target.replace("area","");
			console.log("event fired on area ", areaID);
			$("#mapScreeen").addClass("hidden");
			$("#typeScreeen").removeClass("hidden");
			resolve(areaID);

		});
		$("#area5").click(function(event) {
			areaID=event.target.replace("area","");
			console.log("event fired on area ", areaID);
			$("#mapScreeen").addClass("hidden");
			$("#typeScreeen").removeClass("hidden");
			resolve(areaID);

		});
	});
};

let type = function (areaID) {
	return new  Promise((resolve, reject) => {
		$("#type1").click(function (event) {
			typeID = event.target.replace("type", "");
			console.log("event fired on type ", typeID)
			$("#typeScreen").addClass("hidden");
			$("#attractionScreen").removeClass("hidden");
			resolve(areaID, typeID);
		});
		$("#type2").click(function (event) {
			typeID = event.target.replace("type", "");
			console.log("event fired on type ", typeID)
			$("#typeScreen").addClass("hidden");
			$("#attractionScreen").removeClass("hidden");
			resolve(areaID, typeID);
		});
		$("#type3").click(function (event) {
			typeID = event.target.replace("type", "");
			console.log("event fired on type ", typeID)
			$("#typeScreen").addClass("hidden");
			$("#attractionScreen").removeClass("hidden");
			resolve(areaID, typeID);
		});
		$("#type4").click(function (event) {
			typeID = event.target.replace("type", "");
			console.log("event fired on type ", typeID)
			$("#typeScreen").addClass("hidden");
			$("#attractionScreen").removeClass("hidden");
			resolve(areaID, typeID);
		});
	});
};


module.exports = {map, type};