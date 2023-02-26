"use strict";

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
    dog_image.classList.add("dog_img");

    let container = document.createElement("div");
    container.classList.add("container")
    section.appendChild(container);

    let option_1 = document.createElement("button")
    option_1.classList.add("option", "option_1")
    container.appendChild(option_1);

    let option_2 = document.createElement("button")
    option_2.classList.add("option", "option_2")
    container.appendChild(option_2);

    let option_3 = document.createElement("button")
    option_3.classList.add("option", "option_3")
    container.appendChild(option_3);

    let option_4 = document.createElement("button")
    option_4.classList.add("option", "option_4")
    container.appendChild(option_4);

    document.querySelector("#display_user > button").addEventListener("click", logout_button);
    show_next_question();
}

async function show_next_question() {
    const correct_breed = get_random_breed()
    console.log("correct breed=" + correct_breed.name)

    let url = get_random_breed_image(correct_breed.url);
    message_popup("Getting random picture...")
    let response = await fetch_handler(url);
    let resource = await response.json();
    remove_message();
    let img = document.getElementById("dog_img").src = resource.message;

    const number_of_options = 4;
    let options = [];
    let random_position_for_correct = Math.floor(Math.random() * number_of_options)
    console.log("random_position_for_correct=" + random_position_for_correct)

    for (let i = 0; i < number_of_options; i++) {
        let breed;
        if (i == random_position_for_correct) {
            breed = correct_breed;
        } else {
            breed = get_random_breed();
        }
        options.splice(i, 0, breed)
        let option = document.getElementsByClassName("option_" + (i + 1))[0];
        option.textContent = breed.name;
        option.addEventListener("click", () => {
            console.log("Clicked on=" + options[i].name);
            quiz_popup(correct_breed === options[i]);
        });
    }

    console.log(options)
}

function get_random_breed() {
    return ALL_BREEDS[Math.floor(Math.random() * ALL_BREEDS.length)]
}

function quiz_popup(correct, button_clicked) {
    let message_background = document.querySelector("#message_background");
    message_background.style.display = "block"
    message_background.classList.add("background")

    let message = document.querySelector("#message");
    message.style.display = "block";
    message.classList.add("quiz_message")

    let close_button = document.createElement("button");
    close_button.textContent = "ONE MORE";

    if (correct) {
        message.style.backgroundColor = "#90c857";
        message.textContent = "CORRECT!";
    } else {
        message.style.backgroundColor = "#fb795b"
        message.textContent = "I'm afraid not...:-("
    }

    message.appendChild(close_button);
    close_button.addEventListener("click", button_clicked)

    function button_clicked() {
        remove_quiz_popup();
        show_next_question();
    }
}

function remove_quiz_popup() {
    message.style.display = "none";
    message.classList.remove("quiz_message");
    message_background.style.display = "none";
    message_background.classList.remove("background")
}