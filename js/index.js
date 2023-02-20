"use strict";


let account_handler = `https://teaching.maumt.se/apis/access/`

function get_dog_picture(breed_url) {
    let dog_prefix = `https://dog.ceo/api/breed/${breed_url}/images/random`;
    return dog_prefix;
}