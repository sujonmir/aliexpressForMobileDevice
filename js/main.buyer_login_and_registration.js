$(document).ready(function() {
    $(".nav-tabs a").click(function() {
        $(this).tab('show');
    });
    $('.nav-tabs a').on('shown.bs.tab', function(event) {
        var x = $(event.target).text(); // active tab
        var y = $(event.relatedTarget).text(); // previous tab
        $(".act span").text(x);
        $(".prev span").text(y);
    });
});


$("#mybtn").click(function() {
    var bal = document.getElementById('mybtn').value;
    var mybtn = document.getElementById('mybtn')
    if (bal == "Show") {
        $('#mybtn').val("Hide");
        $('#sco').show(2000);
    } else if(bal == "Hide"){
        $('#mybtn').val("Show");
        $('#sco').hide(2000);
    }
});


$("#mybtn2").click(function() {
    var bal2 = document.getElementById('mybtn2').value;
    var mybtn2 = document.getElementById('mybtn2')
    if (bal2 == "Show") {
        $('#mybtn2').val("Hide");
        $('#sco2').show(2000);
    } else if(bal2 == "Hide"){
        $('#mybtn2').val("Show");
        $('#sco2').hide(2000);
    }
});



function myformsubmit(){
    var emailEmail = document.getElementById('email');
    var emailForm = document.getElementById('email').value;
    var emailError = document.getElementById('email-Message');
    var regx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+![a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    var passPass = document.getElementById('password');
    var passValue = document.getElementById('password').value;
    var passwordError = document.getElementById('password_Message');

    if (emailEmail.value == "") {
        document.getElementById("email-Message").innerHTML = "Email filed is empty";
        emailEmail.focus();
        emailEmail.style.border = "1px solid red";
        emailError.style.color = "red";
        return false;
    } else if (emailForm.indexOf ('@') <= 2) {
        document.getElementById("email-Message").innerHTML = "Invalid 3 of letter @ position";
        emailEmail.focus();
        emailEmail.style.border = "1px solid red";
        emailError.style.color = "red";
        return false;
    }else if (emailForm.search (/[1-9]/) == -1) {
        document.getElementById("email-Message").innerHTML = "Email most be use (1-9) number";
        emailEmail.focus();
        emailEmail.style.border = "1px solid red";
        emailError.style.color = "red";
        return false;
    } else if ((emailForm.charAt(emailForm.length - 4) != '.') && (emailForm.charAt(emailForm.length - 3) != '.')) {
        document.getElementById("email-Message").innerHTML = "Invalid '.com/.bd' position";
        emailEmail.focus();
        emailEmail.style.border = "1px solid red";
        emailError.style.color = "red";
        return false;
    } else if (regx.test(emailForm)) {
        document.getElementById("email-Message").innerHTML = "The character cannot be used in Email ";
        emailEmail.focus();
        emailEmail.style.border = "1px solid red";
        emailError.style.color = "red";
        return false;
    } else if (passPass.value == ""){
        document.getElementById("password_Message").innerHTML = "Password filed is empty";
        passPass.focus();
        passPass.style.border = "1px solid red";
        passwordError.style.color = "red";

        emailEmail.style.border = "1px solid #ddd";
        emailError.style.display = "none";
        return false;
    } else if ((passPass.value.length <= 5) || (passPass.value.length >= 21) ) {
        document.getElementById("password_Message").innerHTML = "Password most be use 6 - 20 number";
        passPass.focus();
        passPass.style.border = "1px solid red";
        passwordError.style.color = "red";

        emailEmail.style.border = "1px solid #ddd";
        emailError.style.display = "none";
        return false;
    } else if (passValue.search (/[1-9]/) == -1) {
        document.getElementById("password_Message").innerHTML = "Password most be use (1-9) number";
        passPass.focus();
        passPass.style.border = "1px solid red";
        passwordError.style.color = "red";

        emailEmail.style.border = "1px solid #ddd";
        emailError.style.display = "none";
        return false;
    } else if (passValue.search (/[a-z]/) == -1) {
        document.getElementById("password_Message").innerHTML = "Password most be use (a-z) number";
        passPass.focus();
        passPass.style.border = "1px solid red";
        passwordError.style.color = "red";

        emailEmail.style.border = "1px solid #ddd";
        emailError.style.display = "none";
        return false;
    } else if (passValue.search (/[A-Z]/) == -1) {
        document.getElementById("password_Message").innerHTML = "Password most be use (A-Z) number";
        passPass.focus();
        passPass.style.border = "1px solid red";
        passwordError.style.color = "red";

        emailEmail.style.border = "1px solid #ddd";
        emailError.style.display = "none";
        return false;
    } else if (passValue.search (/[!\@\#\$\%\&\*\=]/) == -1) {
        document.getElementById("password_Message").innerHTML = "Password most be use (!, @, #, $, %, &, *, =) number";
        passPass.focus();
        passPass.style.border = "1px solid red";
        passwordError.style.color = "red";

        emailEmail.style.border = "1px solid #ddd";
        emailError.style.display = "none";
        return false;
    } else {
        document.getElementById("password_Message").innerHTML = "Register Successfull";
        passPass.focus();
        passPass.style.border = "1px solid #ddd";
        passwordError.style.color = "green";
        return true;
    }

}


function myformsubmit2(){
    var emailEmail2 = document.getElementById('email2');
    var emailForm2 = document.getElementById('email2').value;
    var emailError2 = document.getElementById('email-Message2');
    var regx2 = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+![a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    var passPass2 = document.getElementById('password2');
    var passValue2 = document.getElementById('password2').value;
    var passwordError2 = document.getElementById('password_Message2');

    if (emailEmail2.value == "") {
        document.getElementById("email-Message2").innerHTML = "Email filed is empty";
        emailEmail2.focus();
        emailEmail2.style.border = "1px solid red";
        emailError2.style.color = "red";
        return false;
    } else if (emailForm2.indexOf ('@') <= 2) {
        document.getElementById("email-Message2").innerHTML = "Invalid @ position";
        emailEmail2.focus();
        emailEmail2.style.border = "1px solid red";
        emailError2.style.color = "red";
        return false;
    }  else if (emailForm2.search (/[1-9]/) == -1) {
        document.getElementById("email-Message2").innerHTML = "Email most be use (1-9) number";
        emailEmail2.focus();
        emailEmail2.style.border = "1px solid red";
        emailError2.style.color = "red";
        return false;
    } else if ((emailForm2.charAt(emailForm2.length - 4) != '.') && (emailForm2.charAt(emailForm2.length - 3) != '.')) {
        document.getElementById("email-Message2").innerHTML = "Invalid '.com/.bd' position";
        emailEmail2.focus();
        emailEmail2.style.border = "1px solid red";
        emailError2.style.color = "red";
        return false;
    } else if (regx2.test(emailForm2)) {
        document.getElementById("email-Message2").innerHTML = "The character cannot be used in Email ";
        emailEmail2.focus();
        emailEmail2.style.border = "1px solid red";
        emailError2.style.color = "red";
        return false;
    } else if (passPass2.value == ""){
        document.getElementById("password_Message2").innerHTML = "Password filed is empty";
        passPass2.focus();
        passPass2.style.border = "1px solid red";
        passwordError2.style.color = "red";

        emailEmail2.style.border = "1px solid #ddd";
        emailError2.style.display = "none";
        return false;
    } else if ((passPass2.value.length <= 5) || (passPass2.value.length >= 21) ) {
        document.getElementById("password_Message2").innerHTML = "Password most be use 6 - 20 number";
        passPass2.focus();
        passPass2.style.border = "1px solid red";
        passwordError2.style.color = "red";

        emailEmail2.style.border = "1px solid #ddd";
        emailError2.style.display = "none";
        return false;
    } else if (passValue2.search (/[1-9]/) == -1) {
        document.getElementById("password_Message2").innerHTML = "Password most be use (1-9) number";
        passPass2.focus();
        passPass2.style.border = "1px solid red";
        passwordError2.style.color = "red";

        emailEmail2.style.border = "1px solid #ddd";
        emailError2.style.display = "none";
        return false;
    } else if (passValue2.search (/[a-z]/) == -1) {
        document.getElementById("password_Message2").innerHTML = "Password most be use (a-z) number";
        passPass2.focus();
        passPass2.style.border = "1px solid red";
        passwordError2.style.color = "red";

        emailEmail2.style.border = "1px solid #ddd";
        emailError2.style.display = "none";
        return false;
    } else if (passValue2.search (/[A-Z]/) == -1) {
        document.getElementById("password_Message2").innerHTML = "Password most be use (A-Z) number";
        passPass2.focus();
        passPass2.style.border = "1px solid red";
        passwordError2.style.color = "red";

        emailEmail2.style.border = "1px solid #ddd";
        emailError2.style.display = "none";
        return false;
    } else if (passValue2.search (/[!\@\#\$\%\&\*\=]/) == -1) {
        document.getElementById("password_Message2").innerHTML = "Password most be use (!, @, #, $, %, &, *, =) number";
        passPass2.focus();
        passPass2.style.border = "1px solid red";
        passwordError2.style.color = "red";

        emailEmail2.style.border = "1px solid #ddd";
        emailError2.style.display = "none";
        return false;
    } 
    else {
        document.getElementById("password_Message2").innerHTML = "Register Successfull";
        passPass2.focus();
        passPass2.style.border = "1px solid #ddd";
        passwordError2.style.color = "green";
        return true;
    }
}




var state = false;

function showhide1() {
    var eyeicn = document.getElementById('eyeicn1');
    var p1 = document.getElementById('password');

    if (state) {
        eyeicn.classList.remove('fa-eye-slash');
        eyeicn.classList.add('fa-eye');
        p1.setAttribute("type", "password");

        state = false;
    } else {
        eyeicn.classList.remove('fa-eye');
        eyeicn.classList.add('fa-eye-slash');
        p1.setAttribute("type", "text");

        state = true;
    };
};
function showhide2() {
    var eyeicn = document.getElementById('eyeicn2');
    var p1 = document.getElementById('password2');

    if (state) {
        eyeicn.classList.remove('fa-eye-slash');
        eyeicn.classList.add('fa-eye');
        p1.setAttribute("type", "password");

        state = false;
    } else {
        eyeicn.classList.remove('fa-eye');
        eyeicn.classList.add('fa-eye-slash');
        p1.setAttribute("type", "text");

        state = true;
    };
};
