



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

function show_message() {
    // tar emot meassage text, close_message_text
}