"use strict";

console.log("type.js loaded");

let getTypes = function () {
	return new Promise ((resolve, reject) => {
		$.getJSON("https://good-lord.firebaseio.com/attraction_types.json", function (data) {
			resolve(data);
		}).fail (function () {
			console.log("types did not load!");
		});

	});
};

module.exports = {getTypes};
