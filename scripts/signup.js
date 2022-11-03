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
        const email_txt = $("#email");
        const username_txt = $("#username");
        const password_txt = $("#password");
        const password_ver = $("#password_ver");

        // Variable to check if all entries are valid
        let isValid = true;

        // Check if entered username or email are already associated with an account
        $.getJSON("data/userdata.json", function (data) {
            if (data.find(item => item.email === email_txt) != undefined) {
                // If there is already an account with the entered email
                email_txt.next().text("Email already in use")
                isValid = false;
            }
            if (data.find(item => item.username === username_txt) != undefined) {
                // If there is already an account with the entered username
                username_txt.next().text("Username already in use")
                isValid = false;
            }
        });

        // Check form entries for validity

        // Validate email field
        if (email_txt.val().trim() == "") {
            // Check if email is empty
            email_txt.next().text("This field is required");
            isValid = false;
        } else {
            // Check if email is valid
            const email_regex = /([-!#-'*+/-9=?A-Z^-~]+(\.[-!#-'*+/-9=?A-Z^-~]+)*|"([]!#-[^-~ \t]|(\\[\t -~]))+")@([0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?(\.[0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?)*|\[((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|IPv6:((((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){6}|::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){5}|[0-9A-Fa-f]{0,4}::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){4}|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):)?(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){3}|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,2}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){2}|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,3}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,4}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::)((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3})|(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3})|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,5}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3})|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,6}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::)|(?!IPv6:)[0-9A-Za-z-]*[0-9A-Za-z]:[!-Z^-~]+)])/;
            let email_ver = email_regex.test(email_txt.val().trim());
            if (!email_ver) {
                email_txt.next().text("Enter a valid email");
                isValid = false;
            } else {
                email_txt.next().text("");
            }
        }

        // Validate username field
        if (username_txt.val().trim() == "") {
            // Check if username is empty
            username_txt.next().text("This field is required");
            isValid = false;
        } else {
            username_txt.next().text("");
        }

        // Validate password field
        if (password_txt.val().trim() == "") {
            // Check if password is empty
            password_txt.next().text("This field is required");
            isValid = false;
        } else {
            password_txt.next().text("");
        }

        // Validate password verification field
        if (password_ver.val().trim() == "") {
            // Check if password verification is empty
            password_ver.next().text("This field is required");
            isValid = false;
        } else {
            // Check if passwords match
            if (password_ver.val().trim() != password_txt.val().trim()) {
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
        // } else {
        //     // If all entered info is valid, create a new user account
        //     $.getJSON("data/userdata.json", function (data) {

        //     });
        //     $.
        // }
    });
});
