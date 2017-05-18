"use strict";

var moment = require('moment');

function createDropDownElement(type) {
    let liString = "";
    for(let i = 0; i < type.attList.length; i++){
    	liString += `<li class="attraction" id="attractions${type.attList[i].id}">${type.attList[i].name}</li>`;
    }
 	let ulString = `<div class="dropdown"><button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">${type.name}
    <span class="caret"></span></button>
    <ul class="dropdown-menu">` + liString + `</ul></div>`;
    var content = document.createElement("div");
    content.innerHTML = ulString;
    $("#headerID").append(content);
}
function createTimeDropdown() {
	let content = `<div class="dropdown"><button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Time Events
    <span class="caret"></span></button><ul class="dropdown-menu" id="timedrop">`;
    let nowTime = moment().format("HH:mm");
    let times = ["09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00"];
    times.push(nowTime);
    times.sort();
    for(let t in times) {
    	if(times[t] == nowTime) {
    		content += `<li>Now</li>`;
    	} else {
    		content += `<li>${times[t]}</li>`;
    	}
    }
    content += `</ul>`;
	$("#dropdownStyle").append(content);
}

function createDropDowns(object) {
	return new Promise ((resolve, reject) => {
		for(let t in object.types) {
			let type = object.types[t];
			object.types[t].attList = [];
			for(let i = 0; i < object.attractions.length; i++) {
				let obj = object.attractions[i];
				if(obj.type_id == type.id) {
					object.types[t].attList.push(obj);
				}
			}
		}
		for(let type in object.types) {
			createDropDownElement(object.types[type]);
		}
		createTimeDropdown();
		resolve(object);
	});
}

module.exports = createDropDowns;
