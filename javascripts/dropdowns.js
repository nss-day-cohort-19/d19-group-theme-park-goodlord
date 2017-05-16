"use strict";

let attractory = require("./attractory.js");

function createDropDownElement(type) {
	let liString = "";
	console.log(type);
	if(type.attList.length === 0) { return;}
	for(let att in type.attList) {
		console.log(type.attList[att]);
		liString += `<li id="id${type.attList[att].id}">${type.attList[att].name}</li>`;
	}
	liString = `<div class="dropdown">
    <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">${type.name}
    <span class="caret"></span></button>
    <ul class="dropdown-menu">` + liString + `</ul></div>`;
    var content = document.createElement("div");
    content.innerHTML = liString;
    $("#headerID").append(content);
}

function createDropDowns() {
	attractory.getAttractionTypes().then((typeData) => {
		let types = typeData;
		for(let type in types) {
			types[type].attList = [];
		}
		attractory.getAttractions().then((attData) => {
			let attractions = attData;
			for(let a = 0; a < attractions.length; a++) {
				let type = attractions[a].type_id - 1;
				let holderObj = {"id": attractions[a].id, "name": attractions[a].name};
				types[type].attList.push(holderObj);
			}
			for(let type in types) {
				createDropDownElement(types[type]);
			}
		});
	});
}

module.exports = createDropDowns;