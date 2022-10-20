/*
signup.js
Imbound

Created by Kaleb Rosborough on 10 / 17 / 2022
Part of a group project by Max F, Max Z, Kaleb R, Norman A, Dylan A
*/

"use strict";

$(document).ready(() => {
    $("#email").focus();

    // Handle click on sign up button
    $("#signup").click(evt => {
        // Get form controls
        const email = $("#email");
        const username = $("#username");
        const password = $("#password");
        const password_ver = $("#password_ver");

        // Variable to check if all entries are valid
        let isValid = true;

        // Check form entries for validity

        // Validate email field
        if (email.val().trim() == "") {
            // Check if email is empty
            email.next().text("This field is required");
            isValid = false;
        } else {
            // Check if email is valid
            const email_regex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
            let email_ver = email_regex.test(email.val().trim());
            if (!email_ver) {
                email.next().text("Enter a valid email");
                isValid = false;
            } else {
                email.next().text("");
            }
        }

        // Validate username field
        if (username.val().trim() == "") {
            // Check if username is empty
            username.next().text("This field is required");
            isValid = false;
        } else {
            username.next().text("");
        }

        // Validate password field
        if (password.val().trim() == "") {
            // Check if password is empty
            password.next().text("This field is required");
            isValid = false;
        } else {
            password.next().text("");
        }

        // Validate password verification field
        if (password_ver.val().trim() == "") {
            // Check if password verification is empty
            password_ver.next().text("This field is required");
            isValid = false;
        } else {
            // Check if passwords match
            if (password_ver.val().trim() != password.val().trim()) {
                password_ver.next().text("Passwords must match");
                isValid = false;
            } else {
                password_ver.next().text("");
            }
        }

        // If any entry is invalid, don't submit the form
        if (!isValid) {
            evt.preventDefault();
        }
    });
});
