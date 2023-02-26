"use strict";

let quiz_activator = false;
let quiz_time = false;

//när du får status 200 då ska quiz_activator vara lika med true
//display_quiz tömmer register_login och 

function display_quiz(user) {
    console.log(localStorage.getItem("connected_user"));
    content.innerHTML = ``;

    content.innerHTML = `
    <div id="display_user">
        <p class="user">${user}</p>
        <button id="logout">logout</button>
    </div>
    `;

    function logout_button() {
        console.log("hello world");
        localStorage.removeItem("connected_user")
        location.reload();
    }

    let dog_image = document.createElement("img");
    let section = document.querySelector("section")
    section.appendChild(dog_image);
    dog_image.setAttribute("id", "dog_img");
    dog_image.setAttribute("src", "media/logo.png");
    dog_image.classList.add("placeholder");

    content.innerHTML += `
    <div id="container">
    <button class="answer"></button>
    <button class="answer"></button>
    <button class="answer"></button>
    <button class="answer"></button>
    </div> 
    `;

    document.querySelector("#display_user > button").addEventListener("click", logout_button);

    show_next_question();
}

async function show_next_question() {
    var breed = ALL_BREEDS[Math.floor(Math.random() * ALL_BREEDS.length)]

    // let prefix = get_image_prefix(ALL_BREEDS[correct_breed].url);
    // let response = await fetch_handler(prefix);
    // let resource = await response.json();
    // await dog_image.setAttribute("src", resource.message);

    let url = get_random_breed_image(breed.url);
    let response = await fetch_handler(url);
    let resource = await response.json();

    let img = document.getElementById("dog_img").src = resource.message;
}


