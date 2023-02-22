"use strict";

async function login_handler() {

    let user_name_input = document.querySelector("input[name='un']").value;
    let user_password_input = document.querySelector("input[name='pw']").value;

    let get_request = new Request(`${account_handler_prefix}?action=check_credentials&user_name=${user_name_input}&password=${user_password_input}`);

    await fetch_handler(get_request);

    if (login_ok === true) {
        localStorage.setItem("connected_user", user_name_input);
        await display_quiz(user_name_input);
    }
}

function register_handler() {
    let user_name_input = document.querySelector("input[name='un']").value;
    let user_password_input = document.querySelector("input[name='pw']").value;

    let body = {

        action: "register",
        user_name: user_name_input,
        password: user_password_input,

    }

    let options = {
        method: "POST",
        body: JSON.stringify(body),
        headers: { "Content-type": "application/json; charset=UTF=8" },
    }

    let post_request = new Request(account_handler_prefix, options);
    fetch_handler(post_request)

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
        <input type="password"  name="pw" id="bottom">

    </div>
    <div id="text">${text}</div>

    <button id="action">${type}</button>

    <p id="change_type">${change_type_text}</p>
`;

    let change_type = document.querySelector("#change_type");
    change_type.addEventListener("click", change_type_handler)

    function change_type_handler() {
        if (login_page === true) {
            create_login_or_register("REGISTER", "Ready when you are...", "Already have an account?Go to login");
        }
        else if (register_page === true) {
            create_login_or_register("LOGIN", "Let the magic start!", "New to this?Register for free");

        }
    }

    let button = document.querySelector("#action");

    function change_backgroundColor(color) {
        document.body.style.background = color;
    }

    if (type === "LOGIN") {
        login_page = true;
        register_page = false;

        button.addEventListener("click", login_handler);

        change_backgroundColor("rgb(209, 229, 220)");
    }
    else if (type === "REGISTER") {
        register_page = true;
        login_page = false;


        button.addEventListener("click", register_handler);
        change_backgroundColor("rgb(214, 222, 222)");
    }
}



