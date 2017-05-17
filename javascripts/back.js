"use strict";

$('#back').click(function(event) {
	let current = $('div.container-fluid').not('.hidden');

	if(current[0] == $('#typeScreen')[0]){
		$('#back').addClass('hidden');
	}
	current.addClass('hidden');
	current.prev().removeClass('hidden');
});