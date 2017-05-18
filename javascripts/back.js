"use strict";

let events = require("./events.js");

$('#Typesback').click(function(event) {
	$("typeScreen").addClass('hidden');
	$("mapScreen").removeClass('hidden');

});

$("#Attractback").click(function(event) {
	$("attractionScreen").addClass('hidden');
	$("typeScreen").removeClass('hidden');
});