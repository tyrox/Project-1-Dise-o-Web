var FUNCION = FUNCION || {

	function validateUser() {
		var username = document.getElementById('username').value;
		var password = document.getElementById('password').value;
		var errorElement = document.getElementById('error_msg')

		if (username == 'admin' && password == 'password') {
			console.log('logged in')
			errorElement.setAttribute("style","display:none;");
		} else {
			errorElement.innerHTML = 'Username or Password invalid';
			errorElement.setAttribute("style","display:block;");
		}	
	}

	function createjson()
	{

	}

	function listado(){

	}
	
}		