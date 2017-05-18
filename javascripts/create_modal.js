"use strict";

let attractory = require("./attractory.js");
let attraction_modal = require("../templates/attraction_modal.hbs");

let displayAttraction = (att_id) => {
	let att_info = attractory.getAttData(att_id);

	let newModal = attraction_modal(att_info);
	console.log(newModal, "my modal");
	$("#ourModal").html(newModal);
	$("#myModal").modal('show');
};

module.exports = displayAttraction;