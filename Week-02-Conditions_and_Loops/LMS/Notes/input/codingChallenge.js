    var loggedIn = false;
    let count = 1;
    while (!loggedIn && count <= 5 ) {
        var username = prompt("Username:");

        var password = prompt("Password:");

        if (username == "samy123" && password == "12345") {
            alert("Welcome back, " + username);

            loggedIn = true;
        } else {
            if (count < 5) {
                alert("Inaccurate credentials!\n" + `Attempt: ${count}`);
                count++;
            } else {
                alert("Inaccurate credentials!\nYou have been locked out after 5 attempts.\nPlease contact Administrator.");
                count++;
            }
        }
    }