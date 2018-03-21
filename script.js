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
      "firstName" : "juanito",
      "lastName" : "Perez",
      "FbUser" : "prueba",
      "phone": "442 204 5766",
      "email": "nutriologo@gmail.com",
      "altura": "180",
      "peso": "70",
      "abdomen": "90",
      "brazo": "40",
      "cintura": "90",
      "id": "1239asda42"
    },
    "2" : {
      "firstName" : "pepe",
      "lastName" : "prueba",
      "FbUser" : "prueba",
      "phone": "442 204 5766",
      "email": "nutriologo@gmail.com",
      "altura": "180",
      "peso": "70",
      "abdomen": "90",
      "brazo": "40",
      "cintura": "90",
      "id": "123vc42"      
    },
    "3" : {
      "firstName" : "pepe",
      "lastName" : "prasda",
      "FbUser" : "prueba",
      "phone": "442 204 5766",
      "email": "nutriologo@gmail.com",
      "altura": "180",
      "peso": "70",
      "abdomen": "90",
      "brazo": "40",
      "cintura": "90",
      "id": "123we342"    
    },
    "4" : {
      "firstName" : "pepe",
      "lastName" : "praassda",
      "FbUser" : "prueba",
      "phone": "442 204 5766",
      "email": "nutriologo@gmail.com",
      "altura": "180",
      "peso": "70",
      "abdomen": "90",
      "brazo": "40",
      "cintura": "90",
      "id": "123weaaw"
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
			    '<button type="button" class="btn btn-secondary" onclick=" modificarPerfilDr()">Modificar</button>'+
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

	//pintar boton seleccionado
	document.getElementById("selectPerfil").style.backgroundColor = '#e6e6f9';
	document.getElementById("selectDietas").style.backgroundColor = 'white';	
	document.getElementById("selectPacientes").style.backgroundColor = 'white';

	//ocultar otras pestanas
	document.getElementById("miPerfil").style.display = "block";
	document.getElementById("pacientes").style.display = "none";
	document.getElementById("sinSeleccionPaciente").style.display = "none";
	document.getElementById("dietas").style.display = "none";


}

function modificarPerfilDr(){
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
			'<div class="row indiceNombres" id="seleccionado'+pacientesFB[i].id+'">'+
	            '<div class="cuadroNombre">'+
	              '<h3 id="firstName'+i+'" class="espacioNombre"></h3>'+
	              '<h3 id="lastName'+i+'"></h3>'+
	            '</div>'+
	            '<div class="opciones">'+
	              '<div class="botonOpcion">'+
	                '<button type="button" class="btn btn-primary" value="'+pacientesFB[i].id+'" onclick="perfilPaciente(this)">Perfil</button>'+
	              '</div>'+
	              '<div class="botonOpcion">'+
	                '<button type="button" class="btn btn-secondary" value="'+pacientesFB[i].id+'" onclick="resultadosPaciente()">Resultados</button>'+
	              '</div>'+
	            '</div>'+
	          '</div>'+
	        '</div>'

	    $("#pacientes").append(pintarNombres)
		$("#firstName"+i).html(pacientesFB[i].firstName)
		$("#lastName"+i).html(pacientesFB[i].lastName)



		}
	}

		if (contadorPacientes == 0) {
		tarjetasNombres()
		contadorPacientes = contadorPacientes+1
	}


	//pintar boton seleccionado
	document.getElementById("selectPerfil").style.backgroundColor = 'white';
	document.getElementById("selectDietas").style.backgroundColor = 'white';	
	document.getElementById("selectPacientes").style.backgroundColor = '#e6e6f9';

	//ocultar otras pestanas
	document.getElementById("pacientes").style.display = "block";
	document.getElementById("miPerfil").style.display = "none";
	document.getElementById("sinSeleccionPaciente").style.display = "flex";
	document.getElementById("dietas").style.display = "none";

}

	// perfil pacientes
function perfilPaciente(event){

	var idPaciente = event.value

	var infoPT  

	var pintarPerfilPaciente = 
		'<div class="row container">'+
		  '<div class="col-6 centrarPerfil">'+
		    '<h4 class="campoPaciente">Datos Personales:</h4>'+
		  '</div>'+
		  '<div class="col-6 centrarPerfil">'+
		    '<h4 class="campoPaciente">Medidas:</h4>'+
		  '</div>'+
		'</div>'+
		'<div class="row container">'+
		  '<div class="col-6 centrarPerfil">'+
		    '<h5 class="campoPaciente">Nombre: <input type="text" id="namePT" value=""></input></h5>'+
		    '<h5 class="campoPaciente">Apellido: <input type="text" id="lastPT" value=""></input></h5>'+
		    '<h5 class="campoPaciente">FB User: <input type="text" id="fbUserPT" value=""></input></h5>'+
		    '<h5 class="campoPaciente">Teléfono: <input type="text" id="phonePT" value=""></input></h5>'+
		    '<h5 class="campoPaciente">Correo electronico: <input type="text" id="emailPT" value=""></input></h5>'+
		  '</div>'+
		  '<div class="col-6 centrarPerfil">'+
		    '<h5 class="campoPaciente">Altura cm: <input type="password" id="alturaPT" value=""></input></h5>'+
		    '<h5 class="campoPaciente">Peso kg: <input type="text" id="pesoPT" value=""></input></h5>'+
		    '<h5 class="campoPaciente">Abdomen cm: <input type="text" id="abdomenPT" value=""></input></h5>'+
		    '<h5 class="campoPaciente">Crazo cm: <input type="text" id="brazoPT" value=""></input></h5>'+
		    '<h5 class="campoPaciente">Cintura cm: <input type="text" id="cinturaPT" value=""></input></h5>'+
		  '</div>'+
		'</div>'+
		'<div class="row container">'+
		  '<div class="col-12 centrarPerfil">'+
		    '<button type="button" class="btn btn-secondary" onclick=" modificarPerfil()">Modificar</button>'+
		  '</div>'+
		'</div>'

	$("#perfilPaciente").append(pintarPerfilPaciente)


	//ocultar otras pestanas
	document.getElementById("sinSeleccionPaciente").style.display = "none";
	document.getElementById("perfilPaciente").style.display = "block";

}

//-----------------------------------
	//Dietas

var contadorDietas = 0

function opcionDietas(){

	if (contadorDietas == 0) {
		
		contadorDietas = contadorDietas+1
	}

	//pintar boton seleccionado
	document.getElementById("selectPerfil").style.backgroundColor = 'white';
	document.getElementById("selectDietas").style.backgroundColor = '#e6e6f9';	
	document.getElementById("selectPacientes").style.backgroundColor = 'white';

	//ocultar otras pestanas
	document.getElementById("dietas").style.display = "block";
	document.getElementById("miPerfil").style.display = "none";
	document.getElementById("pacientes").style.display = "none";
	document.getElementById("sinSeleccionPaciente").style.display = "none";
}