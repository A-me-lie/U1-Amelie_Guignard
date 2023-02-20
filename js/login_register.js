"use strict";

function login_handler() {

    let user_name_input = document.querySelector("input[name='un']").value;
    let user_password_input = document.querySelector("input[name='pw']").value;


}





let login_page;
let register_page;

let content = document.querySelector("section");

function create_login_or_register(type, text, change_type_text) {
    content.innerHTML = ``;
    content.innerHTML = `     
    <h1>${type}</h1>
    <div id="input_field">
        <label for="username">User Name:</label>
        <input type="text" name="un" >

        <label for="password">Password:</label>
        <input type="password"  name="pw">

    </div>
    <div id="text">${text}</div>

    <button>${type}</button>

    <p id="change_type">${change_type_text}</p>
`;

    if (type === "LOGIN") {
        login_page = true
        register_page = false
    }
    else {
        register_page = true
        login_page = false
    }
}

create_login_or_register("LOGIN", "Let the magic start!", "New to this?Register for free");


