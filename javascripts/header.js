"use strict";

console.log("header.js loaded");

let getInfo = function () {
	return new Promise ((resolve, reject) => {
		$.getJSON("https://good-lord.firebaseio.com/park-info.json", function (data) {
			resolve(data);
		}).fail (function () {
			console.log("header did not load!");
		});

	});
};

module.exports = {getInfo};