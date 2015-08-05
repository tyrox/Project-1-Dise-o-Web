var FUNCION = FUNCION || {

	function validateUser(username,password) {
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

	function solonumeros(e){
	key=e.keycode || e.which;
	teclado=String.fromCharCode(key);
	numeros="0123456789";
	especiales="8-37-38-46";//en esta parte pusiste espeeciales, osea lo pusiste con doble e y más abajo utilizas solo con una e.
	teclado_especial=false;
	for(var i in especiales){
		if(key==especiales[i]){
			teclado_especial=true;
		}
	}

	if(numeros.indexOf(teclado)==-1 && !teclado_especial){// en esta parte pusiste indexof todo con minusculas y debe ser el Of con mayuscula
		return false;
	}

	function listado(){
		if (!window.localStorage) {
		  Object.defineProperty(window, "localStorage", new (function () {
		    var aKeys = [], oStorage = {};
		    Object.defineProperty(oStorage, "getItem", {
		      value: function (sKey) { return sKey ? this[sKey] : null; },
		      writable: false,
		      configurable: false,
		      enumerable: false
		    });
		    Object.defineProperty(oStorage, "key", {
		      value: function (nKeyId) { return aKeys[nKeyId]; },
		      writable: false,
		      configurable: false,
		      enumerable: false
		    });
		    Object.defineProperty(oStorage, "setItem", {
		      value: function (sKey, sValue) {
		        if(!sKey) { return; }
		        document.cookie = escape(sKey) + "=" + escape(sValue) + "; expires=Tue, 19 Jan 2038 03:14:07 GMT; path=/";
		      },
		      writable: false,
		      configurable: false,
		      enumerable: false
		    });
		    Object.defineProperty(oStorage, "length", {
		      get: function () { return aKeys.length; },
		      configurable: false,
		      enumerable: false
		    });
		    Object.defineProperty(oStorage, "removeItem", {
		      value: function (sKey) {
		        if(!sKey) { return; }
		        document.cookie = escape(sKey) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
		      },
		      writable: false,
		      configurable: false,
		      enumerable: false
		    });
		    this.get = function () {
		      var iThisIndx;
		      for (var sKey in oStorage) {
		        iThisIndx = aKeys.indexOf(sKey);
		        if (iThisIndx === -1) { oStorage.setItem(sKey, oStorage[sKey]); }
		        else { aKeys.splice(iThisIndx, 1); }
		        delete oStorage[sKey];
		      }
		      for (aKeys; aKeys.length > 0; aKeys.splice(0, 1)) { oStorage.removeItem(aKeys[0]); }
		      for (var aCouple, iKey, nIdx = 0, aCouples = document.cookie.split(/\s*;\s*/); nIdx < aCouples.length; nIdx++) {
		        aCouple = aCouples[nIdx].split(/\s*=\s*/);
		        if (aCouple.length > 1) {
		          oStorage[iKey = unescape(aCouple[0])] = unescape(aCouple[1]);
		          aKeys.push(iKey);
		        }
		      }
		      return oStorage;
		    };
		    this.configurable = false;
		    this.enumerable = true;
		  })());
		}
	}

	function newClient(pId,pFirstName,pLastName,pPhone){
		
		this.Id=pId;
		this.firstName = pFirstName;
	  	this.LastName = pLastName;
	  	this.Phone = pPhone;

		var text = {"ID:"this.Id,
					"FirstName:"FirstName,
					"LastName:"LastName,
					"Phone:"this.Phone};
		var obj = JSON.parse(text);
	}

	function newChamba(pClient,pDescrption,pDate,pNote){
		this.client = pClient;
		this.descrption= pDescrption;
		this.date=pDate;
		this.note=pNote;

		var text = {
			"client: "this.client;
			"descrption: "this.descrption;
			"date: "this.date;
			"note: "this.note;
		} 
		var obj = JSON.parse(text);
	}

		function newInvoice(pClient,pDescrption,pDate,pNote){
		this.client = pClient;
		this.descrption= pDescrption;
		this.date=pDate;
		this.note=pNote;

		var text = {
			"client: "this.client;
			"descrption: "this.descrption;
			"date: "this.date;
			"note: "this.note;
		} 
		var obj = JSON.parse(text);
	}	
}		
