/*
detail.js
Imbound

Created by Kaleb Rosborough on 10 / 31 / 2022
Part of a group project by Max F, Max Z, Kaleb R, Norman A, Dylan A
*/

"use strict";

$(document).ready(() => {
    console.log("hi" + localStorage.getItem("clickedImage"));
    $("#img_display").attr("src", localStorage.getItem("clickedImage").toString());
})
