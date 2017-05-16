"use strict";

let attractory = require("./attractory.js");
let attraction_modal = require("./attraction_modal.hbs");

let displayAttraction = (att_id) => {
	let att_info = attractory.getAttData(att_id);
	att_info.type = attractory.getAttType(att_info.type_id);
	att_info.area = attractory.getAttArea(att_info.area_id);

	let newModal = attraction_modal(att_info);
};

module.exports = displayAttraction;
