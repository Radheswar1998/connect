function validateSignup(){
	var errors = "";
	var success = "";
	
	var fname = document.getElementById('fname').value;
	if(fname == "" || fname == undefined){
		errors = errors + "Enter First Name<br>";
	}
	
	var lname = document.getElementById('lname').value;
	if(lname == "" || lname == undefined){
		errors = errors + "Enter Last Name<br>";
	}
	
	var email = document.getElementById('email').value;
	var mailformat = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	if(email == "" || fname == undefined){
		errors = errors + "Enter Email Address<br>";
	}
	if(!email.match(mailformat)){
		errors=errors+"Enter Valid Email<br>";
	}
	
	var m_no = document.getElementById('m_no').value;
	var phoneno = /^\d{10}$/;
	if(m_no == "" || fname == undefined){
		errors = errors + "Enter Mobile number<br>";
	}
	if(!m_no.match(phoneno)){
		errors=errors+"Enter Valid Mobile Number<br>";
	}
	
	var gender1 = document.getElementById('gender1').checked;
	var gender2 = document.getElementById('gender2').checked;
	if(!gender1 & !gender2){
		errors = errors + "Choose Gender<br>";
	}
	
	var psw = document.getElementById('psw').value;
	var psw_repeat = document.getElementById('psw-repeat').value;
	if(psw == "" || psw == undefined || psw_repeat == "" || psw_repeat == undefined){
		errors = errors + "Enter Password in both spaces<br>";
	}
	
	
	document.getElementById("errors").innerHTML = errors;
	if(errors==""){
		success="Signup successfull";
	}
	document.getElementById("success").innerHTML = success;


}
