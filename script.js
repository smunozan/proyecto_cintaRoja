//Request de Firebase de Datos del DR
var doctorFB = {
    "1" : {
    	"img": "https://publicimpact.blob.core.windows.net/production/2016/07/mark-samuals-csap-2.jpg",
    	"name" : "Juan",
    	"last": "Perez",
    	"phone": "442 204 5766",
    	"email": "nutriologo@gmail.com",
    	"password": "1234567890",
    	"address": "Alvaro Obregon 99, Roma Norte, CDMX"
    }
  }

doctorFB = $.map(doctorFB, function(value, index) {
    return [value];
});

// Request de firebase de nombres de pacientes
var pacientesFB = {
    "1" : {
      "name" : "juanito hola",
    },
    "2" : {
      "name" : "pepe prueba",
    },
    "3" : {
      "name" : "pepe prasda"
    },
    "4" : {
      "name" : "pepe prassda"
    },
    "5" : {
      "name" : "pepe pancho"
    },
    "120" : {
      "name" : "Enrique"
    },
    "123" : {
      "name" : "Enasdque"
    }

  }

pacientesFB = $.map(pacientesFB, function(value, index) {
    return [value];
});

//funciones de menu principal

	//perfil DOCTOR
var contadorPerfil = 0

function perfilDR(){

	function tarjetaPerfilDR(){
		var pintarInfoDR =
			'<div class="row centrarPerfil">'+
			  '<img src="" class="fotoPerfil" alt="" id="imagenDr">'+
			  '<h5>URL imagen: <input type="text" id="imagenDrURL" value=""></input></h5>'+
			'</div>'+
			'<div class="row">'+
			  '<div class="col-6 centrarPerfil">'+
			    '<h5>Nombre: <input type="text" id="nameDr" value=""></input></h5>'+
			    '<h5>Apellido: <input type="text" id="lastDr" value=""></input></h5>'+
			    '<h5>Teléfono: <input type="text" id="phoneDr" value=""></input></h5>'+
			  '</div>'+
			  '<div class="col-6 centrarPerfil">'+
			    '<h5>Correo: <input type="text" id="emailDr" value=""></input></h5>'+
			    '<h5>Password: <input type="password" id="passwordDr" value=""></input></h5>'+
			    '<h5>Dirección: <input type="text" id="direccionDr" value=""></input></h5>'+
			  '</div>'+
			'</div>'+
			'<div class="row">'+
			  '<div class="col-12 centrarPerfil">'+
			    '<button type="button" class="btn btn-secondary" onclick=" modificarPerfil()">Modificar</button>'+
			  '</div>'+
			'</div>'

	    $("#miPerfil").append(pintarInfoDR)

	}

	if (contadorPerfil == 0) {
		tarjetaPerfilDR()
		contadorPerfil = contadorPerfil+1
	}

	document.getElementById("imagenDr").src = doctorFB[0].img
	document.getElementById("imagenDrURL").value = doctorFB[0].img
	document.getElementById("nameDr").value = doctorFB[0].name
	document.getElementById("lastDr").value = doctorFB[0].last
	document.getElementById("phoneDr").value = doctorFB[0].phone
	document.getElementById("emailDr").value = doctorFB[0].email
	document.getElementById("passwordDr").value = doctorFB[0].password
	document.getElementById("direccionDr").value = doctorFB[0].address
	
	document.getElementById("selectPerfil").style.backgroundColor = '#e6e6f9';
	document.getElementById("selectDietas").style.backgroundColor = 'white';	
	document.getElementById("selectPacientes").style.backgroundColor = 'white';
	document.getElementById("miPerfil").style.display = "block";
	document.getElementById("pacientes").style.display = "none";
	document.getElementById("sinSeleccionPaciente").style.display = "none";
	document.getElementById("dietas").style.display = "none";


}

function modificarPerfil(){
    var imagenDr = document.getElementById("imagenDrURL").value;
    var nameDR = document.getElementById("nameDr").value;
    var lastDR = document.getElementById("lastDr").value;
    var emailDR = document.getElementById("emailDr").value;
    var passwordDR = document.getElementById("passwordDr").value;
    var direccionDR = document.getElementById("direccionDr").value;
    
}

//-----------------------------------
	//Pacientes

var contadorPacientes = 0

function opcionPacientes(){

	function tarjetasNombres(){

		for (var i = 0; i < pacientesFB.length; i++) {
			var pintarNombres =
			'<div class="row indiceNombres">'+
	            '<div class="cuadroNombre">'+
	              '<h3 id="name'+i+'"></h3>'+
	            '</div>'+
	            '<div class="opciones">'+
	              '<div class="botonOpcion">'+
	                '<button type="button" class="btn btn-primary">Perfil</button>'+
	              '</div>'+
	              '<div class="botonOpcion">'+
	                '<button type="button" class="btn btn-secondary">Resultados</button>'+
	              '</div>'+
	            '</div>'+
	          '</div>'+
	        '</div>'

	    $("#pacientes").append(pintarNombres)

		$("#name"+i).html(pacientesFB[i].name)

		}
	}

		if (contadorPacientes == 0) {
		tarjetasNombres()
		contadorPacientes = contadorPacientes+1
	}

	document.getElementById("selectPerfil").style.backgroundColor = 'white';
	document.getElementById("selectDietas").style.backgroundColor = 'white';	
	document.getElementById("selectPacientes").style.backgroundColor = '#e6e6f9';
	document.getElementById("pacientes").style.display = "block";
	document.getElementById("miPerfil").style.display = "none";
	document.getElementById("sinSeleccionPaciente").style.display = "flex";
	document.getElementById("dietas").style.display = "none";

}

var contadorDietas = 0

function opcionDietas(){

	if (contadorDietas == 0) {
		
		contadorDietas = contadorDietas+1
	}

	document.getElementById("selectPerfil").style.backgroundColor = 'white';
	document.getElementById("selectDietas").style.backgroundColor = '#e6e6f9';	
	document.getElementById("selectPacientes").style.backgroundColor = 'white';
	document.getElementById("dietas").style.display = "block";
	document.getElementById("miPerfil").style.display = "none";
	document.getElementById("pacientes").style.display = "none";
	document.getElementById("sinSeleccionPaciente").style.display = "none";
}