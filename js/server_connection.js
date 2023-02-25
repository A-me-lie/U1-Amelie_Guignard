



//här ska åtminstånde fetch funktionen finnas
//prefix?action=check_credentials&user_name=X&password=Y

//{
// action: “register”,
// user_name: string, username to register
// password: string, password to register
// }

let login_ok = false;
let register_ok = false;

async function fetch_handler(request) {
    let response = await fetch(request);

    if (response.status === 200) {
        if (login_page === true) {
            login_ok = true
        }
        else if (register_page === true) {
            register_ok = true

        }
    }

    else if (response.status === 418) {
        // teapot

    }

    else if (response.status === 400 || response.status === 404) {
        //wrong password/user
        let text = document.querySelector("#text");
        text.style.backgroundColor = "#e9e9ed";
        text.textContent = "Wrong user name or password"

    }

    console.log(response);
    return response;

}

function message_popup(message_content, show_close_button) {

    let message = document.querySelector("#message");
    message.textContent = message_content;
    message.classList.add("message")

    if (show_close_button === true) {
        console.log("created button");
        let close_button = document.createElement("button");
        close_button.textContent = "CLOSE";
        message.appendChild(close_button);
        close_button.addEventListener("click", button_clicked)
    }

    function button_clicked(e) {

        console.log("hej");
        if (quiz_time === true) {

            remove_message();

            let last_login = JSON.parse(localStorage.getItem("connected_user"))
            display_quiz(last_login.user_name);

        }
        else {
            remove_message();
        }
    }
}
function remove_message() {
    message.classList.remove("message");
    message.innerHTML = "";

}
// tar emot message text, close_message_text
// function show_message(message_text, close_message_text) {
//     let message = document.getElementById("#message");
//     message.textContent = message_text;

//     if (message_text === "Contacting Server..." || message_text === "Getting a random image") {
//         return;
//     }

//     let close_message_button = document.createElement("button");
//     close_message_button.textContent = close_message_text;
//     close_message_button.classList.add("close_button");
//     message.appendChild(close_message_button);

//     close_message_button.addEventListener("click", button_clicked)

//     if (message_text === "Correct") {
//         message.style.backgroundColor = "lime";
//     }
//     else {
//         message.style.backgroundColor = "red";
//     }




// }

// function remove_message() {

// }