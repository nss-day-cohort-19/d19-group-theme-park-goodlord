"use strict";

let attractory = require("./attractory.js");

function createDropDownElement(type) {
 	let ulString = `<div class="dropdown">
    <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">${type.name}
    <span class="caret"></span></button><ul class="dropdown-menu" id="drop${type.id}"></ul></div>`;
	var content = document.createElement("div");
	content.innerHTML = ulString;
 	$("#headerID").append(content);
}

function createDropDowns() {
	return new Promise ((resolve, reject) => {
		attractory.getAttractionTypes(0).then((typeData) => {
			let types = typeData[0];
			console.log(types, "attTypes");
			for(let type in types) {
					createDropDownElement(types[type]);
			}
		});
		resolve();
	});
}

module.exports = createDropDowns;

	// let liString = "";
	// if(type.attList.length === 0) { return;}
	// for(let att in type.attList) {
	// 	liString += `<li id="id${type.attList[att].id}">${type.attList[att].name}</li>`;
	// }
	// liString = `<div class="dropdown">
 //    <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">${type.name}
 //    <span class="caret"></span></button>
 //    <ul class="dropdown-menu">` + liString + `</ul></div>`;