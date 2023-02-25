"use strict";

let quiz_activator = false

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
        console.log("hello eorld");
        localStorage.removeItem("connected_user")
        location.reload();
    }

    let img = document.createElement("img");
    content.appendChild(img);
    img.setAttribute("src", "media/logo.png");
    img.classList.add("dog_img");
    let dog_img = document.createElement("img")
    content.innerHTML += `
    
    <div id="container">
    <button class="answer"></button>
    <button class="answer"></button>
    <button class="answer"></button>
    <button class="answer"></button>
    </div> 
    `;

    document.querySelector("#display_user > button").addEventListener("click", logout_button);

}


