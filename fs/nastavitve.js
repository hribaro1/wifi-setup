			var nocniNacin = document.getElementById("nocniNacin");
			var kategorija = document.getElementById("kategorija");
			var nocniNacinValue = document.getElementById("nocniNacinValue");
			var kategorijaValue = document.getElementById("kategorijaValue");
                        var argget;		
		
	// rpc funckija, ki omogoča klice 
	
		//se zažene da se izpolni začetne vrednosti	

		function inicializacija() {
                 
//			argget=JSON.parse(rpc_call_get("Status"));
			var Http = new XMLHttpRequest();
        	        var url="/rpc/Status";
                	Http.open("GET", url);
        	        Http.send();
	 		Http.onreadystatechange = (e) => {
		  		argget=JSON.parse(Http.responseText);
				if(argget.night==false){
					nocniNacin.checked = false;
				}else{
					nocniNacin.checked = true;
				}
				if(argget.gra==false){
					kategorija.checked = false;
				}else{
					kategorija.checked = true;
				}        
			}
		   }
			
			nocniNacin.onclick = function nocniNacinSet(){
				nocniNacinValue.innerHTML = nocniNacin.checked ? "ON":"OFF";
			}
			kategorija.onclick = function kategorijaSet(){
				kategorijaValue.innerHTML = kategorija.checked ? "A":"B";
			}
			
			
			window.onload = inicializacija();
	
	
	function rpc_call_post(method, arg) {
		var Http = new XMLHttpRequest();
                var url="/rpc/"+method;
                Http.open("POST", url);
		Http.setRequestHeader("Content-Type", "application/json");
                Http.send(JSON.stringify(arg));
	}		
		
	
	
	function save(){
		var arg = {app: {pwm: {night: nocniNacin.checked, gra: kategorija.checked}}};
		rpc_call_post("ControlParam", arg);
		window.location.href = "index.html";

	}

