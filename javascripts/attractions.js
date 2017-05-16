"use strict";

console.log("attractions.js loaded");

let getAttractions = function () {
	return new Promise ((resolve, reject) => {
		$.getJSON("https://good-lord.firebaseio.com/attractions.json", function (data) {
			resolve(data);
		}).fail (function () {
			console.log("attractions did not load!");
		});

	});
};

module.exports = {getAttractions};
