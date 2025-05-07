const username = document.querySelector('#username');
const password = document.querySelector('#password');
const msg = document.querySelector('.msg');
const showpass = document.querySelector('.showpass');

let showHide = false;

let data = {
    username: "fma",
    password: "Fma#2025"
}

function checkCred(){
    console.log(username.value);
    console.log(password.value);

    if
    (   username.value == data.username && 
        password.value == data.password
    )

    {
        console.log("SUCCESS");
        msg.textContent = "SUCCESS";
        msg.classList.remove('error');
        msg.classList.add('success');
        // window.location.href = "https://futureminds.io";    
    }
    else {
        console.log("Wrong Credentials");
        msg.textContent = "Wrong Credentials";
        msg.classList.add('error');
    }
}

showpass.addEventListener('click', ()=> {
    if(!showHide){
        showHide = true;
        password.setAttribute("type", "text");
        showpass.textContent = "Hide Pass";
    }
    else {
        showHide = false;
        password.setAttribute("type", "password");
        showpass.textContent = "Show Pass";
    }
    
})