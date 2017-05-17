"use strict";

// use whatever id or class to reference button
$('#back').click(function(event) {
	let current = $('div').not('.hidden');

	current.addClass('hidden');
	current.prev().removeClass('hidden');
});