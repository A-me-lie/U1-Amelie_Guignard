"use strict";

let quiz_activator = false

//när du får status 200 då ska quiz_activator vara lika med true
//display_quiz tömmer register_login och 

function display_quiz() {
    content.innerHTML = ``;

    let img = document.createElement("img");
    content.appendChild(img);
    img.setAttribute("src", "media/logo.png");
    img.classList.add("dog_img");



    content.innerHTML += `
    <button></button>
    <button></button>
    <button></button>
    <button></button>

</div> 
    
    `;
}


