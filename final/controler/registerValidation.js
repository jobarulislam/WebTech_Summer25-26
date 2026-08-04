function validate() {
    let valid = true;
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();        
    let gender = document.querySelector('input[name="gender"]:checked');
    let namePattern = /^[A-Za-z\s'-]{2,50}$/;
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let nameError = document.getElementById("nameerror");
    let emailError = document.getElementById("emailerror");
    let genderError = document.getElementById("gendererror");
    let Error = document.getElementById("error");
    function nameValidate(){
        if(name === ""){
            nameError.innerHTML = "*";
            valid = false;
        }
        else if(!namePattern.test(name))
        {
            nameError.innerHTML = "*";
            valid = false;
        }
        else{
            nameError.innerHTML = "";
        }
    }

    function emailValidate(){
        if(email === ""){
            emailError.innerHTML = "*";
            valid = false;
        }
        else if(!emailPattern.test(email))
        {
            emailError.innerHTML = "*";
            valid = false;
        }
        else{
            emailError.innerHTML = "";
        }
    }

    function genderValidate(){
        if(!gender){
            genderError.innerHTML = "*";
            valid = false;
        }
        else{
            genderError.innerHTML = "";
        }
    }
    nameValidate();
    emailValidate();
    genderValidate();

    if(!valid){
        Error.innerHTML = "required field"
        alert("inputfield must be filed properly!");
        return false;
    }
    else{
        alert("Submit successfull");
        return true;
    }
}