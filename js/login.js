function validateLogin(){
	var errors = "";
	var success = "";
	
	var fname = document.getElementById('email').value;
	if(fname == "" || fname == undefined){
		errors = errors + "Enter Email<br>";
	}
	
	var lname = document.getElementById('psw').value;
	if(lname == "" || lname == undefined){
		errors = errors + "Enter Password<br>";
	}
	document.getElementById("errors").innerHTML = errors;
	if(errors==""){
		success="Signup successfull";
	}
	document.getElementById("success").innerHTML = success;
}