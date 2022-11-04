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
        const user_field = $("#user");
        const password_field = $("#password");

        // Get username and password values
        const username_txt = user_field.val().trim();
        const password_txt = password_field.val().trim();

        let user_obj = JSON.parse(localStorage.getItem("user_obj"));

        if (user_obj == null) {
            user_obj = {
                "username": "nothing",
                "email": "nothing",
                "password": "nothing"
            };
        }

        console.log(user_obj);

        let isValid = true;

        // Check form entries for validity

        // Validate user field

        if (username_txt == "") {
            // If username field is empty
            user_field.next().text("Enter your username or email");
            isValid = false;
        } else if (user_obj.username != username_txt && user_obj.email != username_txt) {
            // If the username/email is not associated with an account
            user_field.next().text("No account with that username or email");
            isValid = false;
        } else {
            // Clear error message if username field is valid
            user_field.next().text("");
        }

        // Validate password field
        if (password_txt == "") {
            // If the password field is empty
            password_field.next().text("Enter your password");
            isValid = false;
        } else if (user_obj.password != password_txt) {
            // If the password does not match the username
            password_field.next().text("Incorrect password");
            isValid = false;
        } else {
            // Clear error message if password field is valid
            password_field.next().text("");
        }

        // If any entry is invalid, don't submit the form
        if (!isValid) {
            evt.preventDefault();
        }
    });
});
