// let name = window.prompt('What is your name?');
// window.alert(`Welcome, ${name}`);

let inputDivResult = document.getElementById("inputName")




let loggedIn = false;
while (!loggedIn) {
    let username = prompt('Username:');
    let password = prompt('Password:');
    
    if (username == "sammy123" && password == '12345') {
        alert(`Welcome back ${username}`);
        loggedIn = true;
    } else {
        alert(`Incorrect username or password.`);
    }

    inputDivResult.innerHTML = `${username} ${password}`;
}
