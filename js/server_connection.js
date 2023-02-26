



//här ska åtminstånde fetch funktionen finnas
//prefix?action=check_credentials&user_name=X&password=Y

//{
// action: “register”,
// user_name: string, username to register
// password: string, password to register
// }

async function fetch_handler(request) {
    let response = await fetch(request);
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
        close_button.addEventListener("click", (button_clicked))
        function button_clicked() {
            remove_message();
        }
    }
    else {
        message.classList.add("message")
    }
}
function remove_message() {
    message.style.display = "none";
    message.classList.remove("message_with_button");
    message.classList.remove("message");
    message_background.style.display = "none";
    message_background.classList.remove("background");

    //message.innerHTML = "";
    //message_background.innerHTML = "";
}