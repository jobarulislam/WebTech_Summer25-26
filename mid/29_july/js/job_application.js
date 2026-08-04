const job_application = document.getElementById("applicationForm");

job_application.addEventListener("submit" , function (event){
    event.preventDefault();

    const name = document.getElementById("name");
    
    const email = document.getElementById("email");
    
    const phone = document.getElementById("phone");
    
    const dob = document.getElementById("DOB");
    const experience = document.getElementById("exp");
    const skills = document.getElementById("skills");
    const message = document.getElementById("message");
    
    const namePattern = /^[A-Za-z]+(?:\s[A-Za-z]+)*$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^(?:\+880|880|01)[3-9]\d{8}$/;
    const upload = document.getElementById("upload");
    const file = 2*1024*1024 ;

    const message1 = document.getElementById("message1");

    

   let isvalid = true;
   nameValidated();
   emailValidated();
   phoneValidated();
   dOBValidated();
   skillsExperinceValidated();
   fileUploadValidated();

    function nameValidated(){
        const namevalue = name.value.trim();
        if(namevalue === ""){
       // massage.innerHTML = "<p>You must fill you name.<p/>";
       name.value = ""; 
       name.placeholder = "Please enter your full name!";
        name.classList.add("error");
        isvalid = false;
    }

    else if(!namePattern.test(namevalue) || namevalue.length < 3){
        name.value = "";
        name.placeholder = "Enter at least 3 letter!"
        name.classList.add("error");
        isvalid = false;
    }

    else {
    name.classList.remove("error");
    }
}
    
function emailValidated(){
    const emailvalue = email.value.trim();
if(emailvalue === ""){
        email.value = "";
        email.placeholder = "Email Required!";
        email.classList.add("error");
        isvalid = false;
    }

   else if(!emailPattern.test(emailvalue)){
        email.value = "";
        email.placeholder = "Invalid email formet";
        email.classList.add("error");
        isvalid = false;
    }

    else {
    email.classList.remove("error");
}
}

function phoneValidated(){
    const phonevalue = phone.value.trim();
if(phonevalue ===""){
        phone.value = "";
        phone.placeholder = "Contact number required!";
        phone.classList.add("error");
        isvalid = false;
    }

    else if(!phonePattern.test(phonevalue)){
        phone.value = "";
        phone.placeholder = "invalid Contact number!";
        phone.classList.add("error");
        isvalid = false;
    }
    else {
    phone.classList.remove("error");
}
}

function dOBValidated(){
    if(dob.value === ""){
    message.innerHTML = "<p class='error'>Date of birth required.</p>";
    isvalid = false;
}
else{
    const db = new Date(dob.value);
    const today = new Date();
    let age = today.getFullYear() - db.getFullYear();
    const monthDifference = today.getMonth() - db.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < db.getDate())){
        age--;
    }

    if(age < 18){
        message.innerHTML = "<p class='error'>You must be at least 18 years old for apply! </p>"
        isvalid = false;
    }
}
}

function skillsExperinceValidated(){
if(skills.value.trim() === ""){
    skills.value ="";
    skills.placeholder = "you must add at least one skill!";
    skills.classList.add("error");
    isvalid = false;
}
else{
    skills.classList.remove("error");
}

if(experience.value.trim() === ""){
    experience.value ="";
    experience.placeholder = "you must add at least one Exprience!";
    experience.classList.add("error");
    isvalid = false;
}
else{
    experience.classList.remove("error");
}
}


function fileUploadValidated(){
    if(upload.files.length === 0){
    message.innerHTML = "<p class='error'>Please upload your resume!</p>";
    isvalid = false;
}
else if (upload.files[0].size > file){
    message.innerHTML= "<p class='error'>File size must less then 2 mb!</p>";
    isvalid = false;
}

else{
    const types = ["pdf"] ;
    const fileE = upload.files[0];
    const fileEx = fileE.name.split(".").pop().toLowerCase();
    if(!types.includes(fileEx)){
        message.innerHTML = "<p class='error'>File not sapported, upload pdf only</p> ";
        isvalid = false;
    }
}

const letter = document.getElementById("letter");
if(letter.files.length === 0){
    message.innerHTML = "<p class='error'>Please upload your cover letter!</p>";
    isvalid = false;
}

else if(letter.files[0].size > file){
    message.innerHTML= "<p class='error'>File size must less then 2 mb!</p>";
    isvalid = false;
}
else{
    const types =["pdf"] ;
    const fileE = letter.files[0];
    const fileEx = fileE.name.split(".").pop().toLowerCase();
    if(!types.includes(fileEx)){
        message.innerHTML = "<p class='error'>File not sapported, upload pdf only</p> ";
        isvalid = false;
    }
}
}

function clearForm() {
    job_application.reset();

    document.querySelectorAll(".error").forEach(element => {
        element.classList.remove("error");
    });

    message.innerHTML = "";
}


 
   if(!isvalid){
    message1.innerHTML = "<p class='error'>Fill all the informetion as required!</p>";
   return;
   }
   else{
    clearForm();
     message1.innerHTML =  "<p class='success'>Application submitted successfully!</p>";
    
   }



});