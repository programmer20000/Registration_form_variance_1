var mainForm = document.forms["Registration_form"]["emailField"]["passwordField"].value;

let  Button = document.getElementById("Buttonsubmit");
let emailInput = document.getElementById("emailInput");
let passwordInput = document.getElementById("passwordInput");
Button.addEventListener("click",onClickButton)
 
var emailextension = "mihai";
var number = 11

function onClickButton() {
    if(emailInput.value === emailextension ){
        alert("Hi".toLocaleUpperCase())
    }

}