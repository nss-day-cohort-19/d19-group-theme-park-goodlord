"use strict";

let backType = function() {
	$('.Typesback').click(function(event) {
		console.log("back event is firing", event);
		$("#typeScreen").addClass('hidden');
		$("#mapScreen").removeClass('hidden');
		$("#timesScreen").addClass('hidden');
	});
};

let backAttract = function() {
	$(".Attractback").click(function(event) {
		console.log("back event is firing", event);
		$("#attractionScreen").addClass('hidden');
		$("#typeScreen").removeClass('hidden');
		$("#timesScreen").addClass('hidden');
	});
};

let timeAttract = function() {
	$(".Timesback").click(function(event) {
		console.log("back event is firing", event);
		$("#attractionScreen").addClass('hidden');
		$("#typeScreen").addClass('hidden');
		$("#mapScreen").removeClass('hidden');
		$("#timesScreen").addClass('hidden');
	});
};


module.exports = {backType, backAttract, timeAttract};
