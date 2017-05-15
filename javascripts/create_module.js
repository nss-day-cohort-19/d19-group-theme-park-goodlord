"use strict";

let attractory = require("./attractory.js");

let displayAttraction = (att_id) => {
	let att_info = attractory.getAttData(att_id);
	let att_info.type = attractory.getAttType(att_info.type_id);
	let att_info.area = attractory.getAttArea(att_info.area_id);


};

module.exports = displayAttraction;