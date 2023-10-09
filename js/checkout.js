//FIX password
//FIX lastname
//edit messages
//Fix form
//fix default
// Exercise 6
const btnEl = document.querySelector("#btn");
function validate() {
	//let otherThanLetters = new RegExp(/1-9/,.;!-_?¿+*=/g)

	var error = 0;
	// Get the input fields
	var fName = document.getElementById("fName");
	var fEmail = document.getElementById("fEmail");
	var fAddress = document.getElementById("fAddress");
	var fLastN = document.getElementById("fLastN");
	var fPassword = document.getElementById("fPassword");
	var fPhone = document.getElementById("fPhone");
	// Get the error elements
	var errorName = document.getElementById("errorName");
	var errorEmail = document.getElementById("errorEmail"); 
	var errorAddress = document.getElementById("errorAddress");
	var errorLastN = document.getElementById("errorLastN");
	var errorPassword = document.getElementById("errorPassword");
	var errorPhone = document.getElementById("errorPhone");

	var checkNotLetters = /^[a-zA-z]+$/g;
	//var checkNotLetters = /\W+\d+/g;

	var checkNotDigits = /^[0-9]+$/gi;
	var checkDigitsLetters = /^[a-zA-Z0-9]+$/g;
	var checkEmail = /^[0-9a-zA-z]+@[a-zA-z]+.[a-z]{2,3}$/;
 console.log("checkout")
	
	// Validate fields entered by the user: name, phone, password, and email
	if(fName.value.length < 3 || !checkNotLetters.test(fName.value)){
		fName.classList.add("is-invalid");

		
	} else {
		fName.classList.remove("is-invalid");
		fName.classList.add("is-valid");
	}
	if(fEmail.value.length < 3 || !checkEmail.test(fEmail.value)){
		fEmail.classList.add("is-invalid");

		
	} else {
		fEmail.classList.remove("is-invalid");
		fEmail.classList.add("is-valid");

	}
	if(fAddress.value.length < 3 ){
		fAddress.classList.add("is-invalid");

		
	} else {
		fAddress.classList.remove("is-invalid");
		fAddress.classList.add("is-valid");

	}
	//FIX last name fails validation
	if(fLastN.value.length < 3 || !checkNotLetters.test(fLastN.value)){
		fLastN.classList.add("is-invalid");
		
	} else {
		fLastN.classList.remove("is-invalid");
		fLastN.classList.add("is-valid");

	}
	if(fPassword.value.length < 3 || !checkDigitsLetters.test(fPassword.value)){
		fPassword.classList.add("is-invalid");

		
	} else {
		fPassword.classList.remove("is-invalid");
		fPassword.classList.add("is-valid");

	}
	if(fPhone.value.length < 3 || !checkNotDigits.test(fPhone.value)){
		fPhone.classList.add("is-invalid");

		
	} else {
		fPhone.classList.remove("is-invalid");
		fPhone.classList.add("is-valid");

	}
	
	}


	/*if(fName.value == ""){
		error++;
	}

	if(fEmail.value == ""){
		error++;
	}
	 
	if(error>0){
		alert("Error");
	}else{
		alert("OK");
	}
 */


