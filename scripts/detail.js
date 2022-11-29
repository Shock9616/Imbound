/*
detail.js
Imbound

Created by Kaleb Rosborough on 10 / 31 / 2022
Part of a group project by Max F, Max Z, Kaleb R, Norman A, Dylan A
*/

"use strict";

// Pair locally stored images with their respective imgur links
const imageLinks = {
    "images/IMG_0213.jpeg": "https://i.imgur.com/A6Fsocw.jpg", // Grocery cat
    "images/IMG_2612.jpeg": "https://i.imgur.com/9ULkMWZ.jpg", // Wall cat
    "images/IMG_0215.jpeg": "https://i.imgur.com/BUTidYg.jpg", // Cat
    "images/IMG_0253.jpeg": "https://i.imgur.com/ZPxjRo5.jpg", // Goofy face cat
    "images/IMG_0404.jpeg": "https://i.imgur.com/8ceqQGd.jpg", // Suspicious cat
    "images/IMG_0502.jpeg": "https://i.imgur.com/eotJRhC.jpg", // Computer cat
    "images/IMG_0720.jpeg": "https://i.imgur.com/Ck7AsnA.jpg", // Dignified cat
    "images/IMG_0799.jpeg": "https://i.imgur.com/QY3LLM3.jpg", // Curious cat
    "images/IMG_1027.jpeg": "https://i.imgur.com/zAjczBS.jpg", // Sleeping cat
    "images/IMG_1030.jpeg": "https://i.imgur.com/zu9J7gF.jpg", // Box cat
    "images/IMG_1772.jpeg": "https://i.imgur.com/T57U6lB.jpg", // Baby cat
    "images/IMG_1788.jpeg": "https://i.imgur.com/CsV0apQ.jpg", // Sleeping baby cat
    "images/IMG_1933.jpeg": "https://i.imgur.com/LrRqA60.jpg", // Laundry cat
    "images/IMG_2620.jpeg": "https://i.imgur.com/da5XIE7.jpg", // Shoe cat
    "images/IMG_2624.jpeg": "https://i.imgur.com/qwJMfyo.jpg" // Laundry basket cat
}

$(document).ready(() => {
    // Update the image to show the image that was clicked on
    $("#img_display").attr("src", sessionStorage.clickedImage);

    var sharers = $(".sharer").map(function() {
        return this;
    }).get();

    for (let sharer in sharers) {
        $(sharers[sharer]).attr("data-url", imageLinks[sessionStorage.clickedImage]);
    }

    $("#comment").focus();


    // NA Handle click on comment button
    $("#add_comment").click(() => {
        const comment = $("#comment");
        const comment_error = $("#comment_error");

        if (comment.val().trim() == "") {
            // If comment textarea is empty
            comment_error.text("Enter a comment.");
        } else if (comment.val().length > 125) {
            // If # of characters exceeds 125
            comment_error.text("Too many characters.")
        } else {
            // Clear when valid, append comment to #comments unordered list, call on commentToList function
            comment_error.text("");
            $("#comments").append("<li>" + comment.val() + "</li>")
            commentToList()
        }
    });

    // NA Handle key up and keydown on comment textarea for character counter
    $("#comment").on('keyup keydown', () => {
        const comment = $("#comment");
        const char_count = $("#char_count");
        const maxChars = 125;

        let numChars = comment.val().length;
        let countChars = maxChars - numChars;

        // Sets char_count span text to current char count / max char count
        char_count.text(countChars + "/" + maxChars);

        // Sets color of Char Count text depending on number of characters
        if (countChars < 0) {
            char_count.css("color", "#ad0000");
        } else if (countChars < 40) {
            char_count.css("color", "#ad2b00");
        } else if (countChars < 70) {
            char_count.css("color", "#a89200");
        } else {
            char_count.css("color", "black");
        }
    });

    // NA Handle click on clear comments button
    $("#clear_comment").click(() => {
        localStorage.setItem("comments", "");
        $("#comments").empty();
    });

    // NA localStorage to Comments unordered list
    const listToComment = () => {
        // Checks to see if localStorage comments key exists or not
        if (localStorage.getItem("comments") === null || localStorage.getItem("comments") === "") {
            // If it doesn't exist or is empty, create default empty one
            localStorage.setItem("comments", "");
        } else {
            // Clear comments ul then set it again from localStorage comments key
            var commentListLS = JSON.parse(localStorage.comments);
            $("#comments").empty();
            for (let i of commentListLS) {
                $("#comments").append("<li>" + i + "</li>");
            }
        }
    }

    // NA Comments unordered list to localStorage
    const commentToList = () => {
        var commentList = [];

        // Add each li item in comments unordered list to commentList array
        $("#comments li").each(function () {
            commentList.push($(this).text());
        });

        // Set "comments" key in localStorage to commentList array using stringify
        localStorage.setItem("comments", JSON.stringify(commentList));
        // listToComment function adds comments stored in localStorage list to #comments unordered list
        listToComment();
    };

    listToComment();

    // Get imgur url for image when share button clicked
    $(".sharer").click(function() {
        $(this).attr("data-url", imageLinks[sessionStorage.clickedImage]);
    });
});
