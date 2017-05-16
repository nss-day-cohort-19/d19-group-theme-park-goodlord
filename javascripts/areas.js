"use strict";

console.log("area.js loaded");

let getAreas = function () {
	return new Promise ((resolve, reject) => {
		$.getJSON("https://good-lord.firebaseio.com/areas.json", function (data) {
			resolve(data);
		}).fail (function () {
			console.log("areas did not load!");
		});

	});
};

module.exports = {getAreas};
