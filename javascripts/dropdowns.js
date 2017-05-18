"use strict";

function createDropDownElement(type) {
    let liString = "";
    for(let i = 0; i < type.att.length; i++){
    	liString += `<li id="att${type.att[i].id}">${type.att[i].name}</li>`;
    }
 	let ulString = `<div class="dropdown"><button class="btn btn-primary dropdown-toggle" type="button" id="drop${type.id}" data-toggle="dropdown">${type.name}
    <span class="caret"></span></button>
    <ul class="dropdown-menu">` + liString + `</ul></div>`;
    var content = document.createElement("div");
    content.innerHTML = ulString;
    $("#headerID").append(content);
}

function createDropDowns(object) {
	return new Promise ((resolve, reject) => {
		for(let t in object.types) {
			let type = object.types[t];
			object.types.att = [];
			for(let i = 0; i < object.attractions.length; i++) {
				let obj = object.attractions[i];
				if(obj.type_ID == t.id) {
					object.types.att.push(obj);
				}
			}
		}
		for(let type in object.types) {
			createDropDownElement(object.types[type]);
		}
		resolve(object);
	});
}

module.exports = createDropDowns;
