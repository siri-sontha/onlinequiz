window.addEventListener("DOMContentLoaded", (event) =>
	{

// Sri Krishna

var signupSec = document.querySelector("#signupSec");
var loginSec = document.querySelector("#loginSec");
var dontHaveAccBtn = document.querySelector("#dontHaveAccBtn");
var haveAccBtn = document.querySelector("#haveAccBtn");

dontHaveAccBtn.addEventListener("click",showSignupSec);

function showSignupSec(){
    signupSec.style.display = "flex";
    loginSec.style.display = "none";
}

haveAccBtn.addEventListener("click",showLoginSec);

function showLoginSec(){
    signupSec.style.display = "none";
    loginSec.style.display = "flex";
}


// Sri Krishna

});