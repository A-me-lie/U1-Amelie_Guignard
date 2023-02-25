



//här ska åtminstånde fetch funktionen finnas
//prefix?action=check_credentials&user_name=X&password=Y

//{
// action: “register”,
// user_name: string, username to register
// password: string, password to register
// }

let login_ok = false

async function fetch_handler(request) {
    let response = await fetch(request);

    if (response.status === 200 && login_page === true) {
        login_ok = true
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


// tar emot meassage text, close_message_text
function show_message(message_text, close_message_text) {
    let message = document.getElementById("#message");
    message.textContent = message_text;

    if (message_text === "Contacting Server..." || message_text === "Getting a random image") {
        return;
    }

    let close_message_button = document.createElement("button");
    close_message_button.textContent = close_message_text;
    close_message_button.classList.add("close_button");
    message.appendChild(close_message_button);

    close_message_button.addEventListener("click", button_clicked)

    if (message_text === "Correct") {
        message.style.backgroundColor = "lime";
    }
    else {
        message.style.backgroundColor = "red";
    }

    function button_clicked(e) {
        message.style.backgroundColor = "red";

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