



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

    console.log(response);
    return response;

}