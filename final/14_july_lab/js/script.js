let failattempts = 0;
let attempts = 0;
let lock = 0;

function login() {

    let username = document.getElementById("username_input").value.trim();
    let password = document.getElementById("password_input").value;
    let message = document.getElementById("message");
   
    if (Date.now() < lock) 
        {
            message.innerHTML = "You are locked for 5 minutes.";
            return;
        }

    if (username === "" || password === "") {
        alert(`Fill your username and password`);
       message.innerHTML = "Fill username and password.";
       return;
    } 
    else if (username === "AIUB" && password === "$_student") 
        {
            alert("Successfully loggedIn");
            failattempts = 0;
            return;
        }

        else {
            alert(`Incorrect username or password and you have ${attempts} attempts left`);
            failattempts++;
            message.innerHTML = `You have ${attempts} = 3 - ${failattempts} attempts left`

            if(failattempts === 3){
                message.innerHTML = "try agin after 5 minieuts"
                lock = Date.now() + (5 * 60 * 1000);

                setTimeout(function(){
                    failattempts = 0;
                },
            5 * 60 * 1000);
            }
        }
    }

     
