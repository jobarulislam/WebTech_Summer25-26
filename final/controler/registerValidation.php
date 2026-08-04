<?php
$name = "";
$email = "";
$gender = "";
$nameError = "";
$emailError = "";
$genderError = "";
$error = "";

if($_SERVER["REQUEST_METHOD"] == "POST"){
    $valid = true;

    $name = trim($_POST["name"] ?? "");
    if($name === ""){
        $nameError = "*";
        $valid = false;
    }
    
    $email = trim($_POST["email"] ?? "");
    if($eamil === ""){
        $emailError = "*";
        $valid = false;
    }

    $gender = $_POST["gender"] ?? "";
    if($gender === ""){
        $genderError = "*";
        $valid = false;
    }
    if(!$valid){
        $error = "requierd field";
    }
    else{
        echo "Name :".$name;
        echo "Email :".$email;
        echo "Gender :".$gender;
    }
}
?>