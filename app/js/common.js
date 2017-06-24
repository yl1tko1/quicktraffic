var form = document.querySelector(".main-contacts-form");
var	formSubmit = form.querySelector("button[type=submit]");
var	inputName =  form.querySelector("[name=name]");
var	inputEmail =  form.querySelector("[name=email]");
var	inputPhone =  form.querySelector("[name=phone]");
var storageName = localStorage.getItem("inputName");
var storageEmail = localStorage.getItem("inputEmail");
var storagePhone = localStorage.getItem("inputPhone");

window.onload = function(){
	if (storageName || storagePhone || storageEmail) {
		inputName.value = storageName;
		inputEmail.value = storageEmail;
		inputPhone.value = storagePhone;
	} else {
		inputName.focus();
	}
}

form.addEventListener("submit", function(e){
	if (!inputName.value || !inputEmail.value || !inputPhone.value) {
		e.preventDefault();
		console.log('vvedite dannie');
	} else {
		e.preventDefault();
		localStorage.setItem('inputName', inputName.value);
		localStorage.setItem('inputEmail', inputEmail.value);
		localStorage.setItem('inputPhone', inputPhone.value);
		console.log('vse ok');
	}
});

$(document).ready(function(){

$(".btn_mnu").click(function() {
$(this).toggleClass("active");
});


});
