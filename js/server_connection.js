



//här ska åtminstånde fetch funktionen finnas
//prefix?action=check_credentials&user_name=X&password=Y

//{
// action: “register”,
// user_name: string, username to register
// password: string, password to register
// }

async function fetch_handler(request) {
    message_popup("Contacting server...", false);
    let response = await fetch(request);
    remove_message();

    if (response.status === 418) {
        // teapot
        message_popup("The server thinks its not a teapot!", true)
    }

    console.log(response);
    return response;
}

function message_popup(message_content, show_close_button) {
    let message = document.querySelector("#message");
    message.style.display = "block";
    let message_background = document.querySelector("#message_background");
    message_background.style.display = "block"
    message.textContent = message_content;
    message_background.classList.add("background")

    if (show_close_button === true) {
        message.classList.add("message_with_button")
        console.log("created button");
        let close_button = document.createElement("button");
        close_button.textContent = "CLOSE";
        message.appendChild(close_button);
        close_button.addEventListener("click", button_clicked)

    }
    else {
        message.classList.add("message")
    }
    function button_clicked(e) {

        console.log("hej");
        if (quiz_time === true) {

            remove_message();

            let last_login = JSON.parse(localStorage.getItem("connected_user"))
            display_quiz(last_login.user_name);

        }
        else {
            console.log("remove button")
            remove_message();
        }
    }
}
function remove_message() {
    message.style.display = "none";
    message.classList.remove("message");

    message_background.style.display = "none";
    message_background.classList.remove("background")
    //message.innerHTML = "";
    //message_background.innerHTML = "";
}