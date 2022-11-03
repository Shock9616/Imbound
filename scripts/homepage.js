/*
homepage.js
Imbound

Created by Kaleb Rosborough on 10 / 17 / 2022
Part of a group project by Max F, Max Z, Kaleb R, Norman A, Dylan A
*/

"use strict";

$(document).ready(() => {
    $('#img_gallery').masonry({
        // options
        itemSelector: ".grid_item",
        columnWidth: 200,
        fitWidth: true
    });

    $(".grid_item").click(function () {
        localStorage.clickedImage = $(this).find("img").attr("src");
        window.location.href = "detail.html";
    });
});
