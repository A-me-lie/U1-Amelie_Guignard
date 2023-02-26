"use strict";


let account_handler_prefix = `https://teaching.maumt.se/apis/access/`

function get_random_breed_image(breed_url) {
    let dog_prefix = `https://dog.ceo/api/breed/${breed_url}/images/random`;
    return dog_prefix;
}

if (localStorage.getItem("connected_user")) {
    display_quiz(localStorage.getItem("connected_user"))
}
else {
    create_login_or_register("LOGIN", "Let the magic start!", "New to this?Register for free");
}