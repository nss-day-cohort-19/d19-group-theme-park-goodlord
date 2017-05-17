"use strict";

$('#back').click(function(event) {
	let current = $('div.container-fluid').not('.hidden');

	current.addClass('hidden');
	current.prev().removeClass('hidden');
});