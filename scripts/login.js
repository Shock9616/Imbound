/*
login.js
Imbound

Created by Kaleb Rosborough on 10 / 17 / 2022
Part of a group project by Max F, Max Z, Kaleb R, Norman A, Dylan A
*/

"use strict";

$(document).ready(() => {
    $("#user").focus();

    // TODO: Don't store user data in a plaintext json file
    $.getJSON("data/userdata.json", function (data) {

        // Handle click on log in button
        $("#login").click(evt => {
            const user_field = $("#user");
            const password_field = $("#password");

            // Get username and password values
            const username_txt = user_field.val().trim();
            const password_txt = password_field.val().trim();

            // get the appropriate user object based on given username or email
            let user_obj = data.find(item => item.username === username_txt);
            // If username_txt is an email, user_obj will be undefined. If so, find it with the email instead
            user_obj ??= data.find(item => item.email === username_txt);

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
                password_field.next().text("");
            }

            // If any entry is invalid, don't submit the form
            if (!isValid) {
                evt.preventDefault();
            }
        });
    });
});
