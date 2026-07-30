
export function nameValidated(){
        const name = document.getElementById("name");
        const nameValue = name.value.trim();
        const namePattern = /^[A-Za-z]+(?:\s[A-Za-z]+)*$/;
        const message = document.getElementById("m1");
        message.innerHTML = "";
        if (nameValue === "" ){
            message.innerHTML = "Fill Name!";
            return false;
        }
        else if (!namePattern.test(nameValue)){
            message.innerHTML = "Enter a valid name!"
            return false;
        }
        else if(nameValue.length < 3){
            message.innerHTML = "Atlest 3 letter in the name please!";
            return false;
        }
        
        return true;
    }