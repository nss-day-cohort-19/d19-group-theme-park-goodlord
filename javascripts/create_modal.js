"use strict";

let attractory = require("./attractory.js");
let attraction_modal = require("./attraction_modal.hbs");

let displayAttraction = (att_id) => {
	let att_info = attractory.getAttData(att_id);
	let att_info.type = attractory.getAttType(att_info.type_id);
	let att_info.area = attractory.getAttArea(att_info.area_id);


};

module.exports = displayAttraction;