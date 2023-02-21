"use strict";

let quiz_activator = false

//när du får status 200 då ska quiz_activator vara lika med true
//display_quiz tömmer register_login och 

function display_quiz(user) {

    content.innerHTML = ``;

    content.innerHTML = `
    <div id="display_user">
    <p class="user">${user}</p><button class="logout">logout</button>
</div>`

    let img = document.createElement("img");
    content.appendChild(img);
    img.setAttribute("src", "media/logo.png");
    img.classList.add("dog_img");

    content.innerHTML += `

    <div id="container">
    <button class="answer"></button>
    <button class="answer"></button>
    <button class="answer"></button>
    <button class="answer"></button>
</div> 
    
    `;
}


