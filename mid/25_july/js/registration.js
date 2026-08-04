document.addEventListener("DOMContentLoaded", () =>{
    const form = document.getElementById("registrationForm");

    form.addEventListener("submit", function(event){
        event.preventDefault();

        const fullName        = document.getElementById("fullname").value.trim() ;
        const studentId       = document.getElementById("student_id").value.trim() ;
        const email           = document.getElementById("email").value.trim();
        const password        = document.getElementById("password").value;
        const confirmPassword = document.getElementById("c_password").value;
        const male            = document.getElementById("male");
        const female          = document.getElementById("female");
        const acn             = document.getElementById("acn");
        const eee             = document.getElementById("eee");
        const cse             = document.getElementById("cse"); 
        const condition       = document.getElementById("condition");

        if(fullName === ""){
            alert("Full name cannot be empty.");
            return;
        }

        const numericRengex = /^[0-9]+$/;
        if(!numericRengex.test(studentId)){
            alert("Student Id must contain only numbers.");
            return;
        }

        if(!email.includes("@") || !email.includes(".")){
            alert("Email formet not match!");
            return;
        }

        if(password.length < 8 ){
            alert("Password must be at least 8 characters");
            return;
        }

        if(password !== confirmPassword){
            alert("Password not match!");
            return;
        }

        if (!male.checked && !female.checked){
            alert("Select gender");
            return;
        }

        if(!acn.checked && !eee.checked && !cse.checked){
            alert("select a Department.");
            return;
        }

        if(!condition.checked){
            alert("you mast agree to the terms");
            return;
        }

        alert("Successfully registraed!");
        form.reset();
    });
}); 