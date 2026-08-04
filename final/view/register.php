<?php
include "../controler/registerValidation.php";
?>
<!DOCTYPE html>
<head>
    <script src="../controler/registerValidation.js" defer></script>
    <title>Homework php form validation</title>
</head>
<body>
    <form action="" method="post" onsubmit="return validate()" >
        <p id="error" style="color: red;"></p>
        <table>
            <tr>
                <td><label for="name">Name :</label></td>
                <td>
                    <input type="text" id="name" name="name">
                </td>
                <td><p id="nameerror" style="color: red;"></p></td>
            </tr>
            <tr>
                <td><label for="email">Email :</label></td>
                <td>
                    <input type="text" id="email" name="name">
                </td>
                <td><p id="emailerror" style="color: red;"></p></td>
            </tr>
            <tr>
                <td><label for="website">Website :</label></td>
                <td><input type="url" id="website"></td>
            </tr>
            <tr>
                <td><label for="comment">Comment :</label></td>
                <td><textarea id="comment" rows="5"></textarea></td>
            </tr>
            <tr>
                <td><label for="gender">Gender :</label></td>
                <td >
                    <input type="radio" id="female" name="gender"  >
                    <label for="female" name="gender" >Female</label>
                    <input type="radio" id="male" name="gender">
                    <label for="male" name="gender">Male</label>
                    <input type="radio" id="other" name="gender">
                    <label for="other" name="gender">Other</label>
                   
                </td>
                <td><p id="gendererror" style="color: red;"></p></td>
            </tr>
            <tr>
                <td>
                    <input type="submit" id="submit" value="Submit">
                </td>
            </tr>
        </table>
    </form>
</body>
</html>
