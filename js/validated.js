import {nameValidated} from "./nameValidated.js";
document.addEventListener("DOMContentLoaded",function(){
    const form = document.getElementById("regiForm");
if(!form) return;
form.addEventListener("submit", function (event){
    event.preventDefault();

    let isValid = nameValidated();
    if(!isValid){
        alert("invalid input!");
        return;
    }
    alert("submitted succcessfully");
});
});
