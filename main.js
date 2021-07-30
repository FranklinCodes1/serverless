Moralis.initialize("bcZVeDlf5lmYBQkSGgq65tC2VnQIJ8B4aP0IAyN4"); // Application id from moralis.io
Moralis.serverURL = "https://1c7eokx1um61.usemoralis.com:2053/server"; //Server url from moralis.io

async function login() {
    try {
        user = await Moralis.Web3.authenticate();
        console.log(user);
        alert("You have successfully signed in!")
    } catch (error) {
        console.log(error);
    }
}

document.getElementById("login_button").onclick = login;