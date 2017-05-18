"use strict";

let backType = function() {
	$('.Typesback').click(function(event) {
		console.log("back event is firing", event);
		$("#typeScreen").addClass('hidden');
		$("#mapScreen").removeClass('hidden');
	});
};

let backAttract = function() {
	$(".Attractback").click(function(event) {
		console.log("back event is firing", event);
		$("#attractionScreen").addClass('hidden');
		$("#typeScreen").removeClass('hidden');
	});
};

module.exports = {backType, backAttract};