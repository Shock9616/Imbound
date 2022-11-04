/*
homepage.js
Imbound

Created by Kaleb Rosborough on 10 / 17 / 2022
Part of a group project by Max F, Max Z, Kaleb R, Norman A, Dylan A
*/

"use strict";

$(document).ready(() => {
    // Arrange the images in a gallery that fills
    // empty space between differently sized images
    $('#img_gallery').masonry({
        itemSelector: ".grid_item",
        columnWidth: 200,
        fitWidth: true
    });

    // When an image is clicked, remember that
    // image and redirect the user to detail.html
    $(".grid_item").click(function () {
        sessionStorage.clickedImage = $(this).find("img").attr("src");
        window.location.href = "detail.html";
    });
});
