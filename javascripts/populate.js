"use strict";

console.log("populate.js");

let headerTemplate = require("../templates/header.hbs");
let footerTemplate = require("../templates/footer.hbs");
let attractionTemplate = require("../templates/attractions.hbs");
let areasTemplate = require("../templates/areas.hbs");
let typesTemplate = require("../templates/types.hbs");

function header (parkInfo) {
    console.log(parkInfo[0]);
    $("#headerID").append(headerTemplate(parkInfo[0]));
}

function footer (parkInfo) {
    $("#footerID").append(footerTemplate(parkInfo[0]));
}

function areas (parkInfo) {
    $("#mapScreen").append(headerTemplate(parkInfo[0]));
}

function types (parkInfo) {
    $("#typeScreen").append(headerTemplate(parkInfo[0]));
}

function attractions (parkInfo) {
    $("#attractionScreen").append(headerTemplate(parkInfo[0]));
}

module.exports = {header, footer, areas, types, attractions};
