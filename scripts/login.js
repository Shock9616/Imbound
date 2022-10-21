/*
login.js
Imbound

Created by Kaleb Rosborough on 10 / 17 / 2022
Part of a group project by Max F, Max Z, Kaleb R, Norman A, Dylan A
*/

"use strict";

$(document).ready(() => {
    $("#user").focus();

    // Handle click on log in button
    $("#login").click(evt => {
        const user = $("#user");
        const password = $("#password");

        let isValid = true;

        // Check form entries for validity

        // Validate user field
        if (user.val().trim() == "") {
            user.next().text("Enter your username or email");
            isValid = false;
        } else {
            user.next().text("");
        }

        // Validate password field
        if (password.val().trim() == "") {
            password.next().text("Enter your password");
            isValid = false;
        } else {
            password.next().text("");
        }

        // If any entry is invalid, don't submit the form
        if (!isValid) {
            evt.preventDefault();
        }
    });
});
