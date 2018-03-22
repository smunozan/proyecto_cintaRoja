//Request de Firebase de Datos del DR
// var doctorFB = {
//     "1" : {
//     	"img": "https://publicimpact.blob.core.windows.net/production/2016/07/mark-samuals-csap-2.jpg",
//     	"name" : "Juan",
//     	"last": "Perez",
//     	"phone": "442 204 5766",
//     	"email": "nutriologo@gmail.com",
//     	"password": "1234567890",
//     	"address": "Alvaro Obregon 99, Roma Norte, CDMX"
//     }
//   }

// doctorFB = $.map(doctorFB, function(value, index) {
//     return [value];
// });

// Request de firebase de nombres de pacientes
var pacientesFB = {
    "1" : {
      "firstName" : "juanasito",
      "lastName" : "Perez",
      "FbUser" : "prueba",
      "phone": "442 204 5766",
      "email": "nutriologo@gmail.com",
      "altura": "180",
      "peso": "70",
      "abdomen": "90",
      "brazo": "40",
      "cintura": "90",
      "id": "1239asda42",
      "cumplimiento":{
      	"1":"si",
      	"2":"si",
      	"3":"no",
      	"4":"no",
      	"5":"no",
      	"6":"si",
      	"7":"",
      	"8":"si"}
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
      "id": "123vc42",
      "cumplimiento":{
      	"1":"no",
      	"2":"",
      	"3":"",
      	"4":"no",
      	"5":"no",
      	"6":"si",
      	"7":"no",
      	"8":"si"}  
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
      "id": "123we342",
      "cumplimiento":{
      	"1":"si",
      	"2":"no",
      	"3":"si",
      	"4":"si",
      	"5":"no",
      	"6":"si",
      	"7":"no",
      	"8":"si"}    
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
      "id": "123weaaw",
      "cumplimiento":{
      	"1":"no",
      	"2":"no",
      	"3":"no",
      	"4":"si",
      	"5":"si",
      	"6":"si",
      	"7":"si",
      	"8":"si"}
  	}
  }

pacientesFB = $.map(pacientesFB, function(value, index) {
    return [value];
});

var doctorFB

//funciones de menu principal

	//perfil DOCTOR
var contadorPerfil = 0

function perfilDR(){

 	$.ajax({
        url: "https://c4caa6fe.ngrok.io/getUser/2/",
        type: 'GET',
        dataType: 'json', // added data type
        success: function(res) {
            // console.log(res);
            doctorFB = res
            console.log(doctorFB);

			if (contadorPerfil == 0) {
				tarjetaPerfilDR()
				contadorPerfil = contadorPerfil+1
			}

        }

    });

	
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

	document.getElementById("imagenDr").src = doctorFB.photo
	document.getElementById("imagenDrURL").value = doctorFB.photo
	document.getElementById("nameDr").value = doctorFB.firstName
	document.getElementById("lastDr").value = doctorFB.lastName
	document.getElementById("phoneDr").value = doctorFB.phone
	document.getElementById("emailDr").value = doctorFB.email
	document.getElementById("passwordDr").value = doctorFB.password
	document.getElementById("direccionDr").value = doctorFB.address

	}



	//pintar boton seleccionado
	document.getElementById("selectPerfil").style.backgroundColor = '#e6e6f9';
	document.getElementById("selectDietas").style.backgroundColor = 'white';	
	document.getElementById("selectPacientes").style.backgroundColor = 'white';

	//ocultar otras pestanas
	document.getElementById("miPerfil").style.display = "block";
	document.getElementById("pacientes").style.display = "none";
	document.getElementById("sinSeleccionPaciente").style.display = "none";
	// document.getElementById("dietas").style.display = "none";


}

function modificarPerfilDr(){
    var photo = document.getElementById("imagenDrURL").value;
    var firstName = document.getElementById("nameDr").value;
    var lastName = document.getElementById("lastDr").value;
    var email = document.getElementById("emailDr").value;
    var password = document.getElementById("passwordDr").value;
    var address = document.getElementById("direccionDr").value;
    var phone = document.getElementById("phoneDr").value;
    
    let body = {
    	"firstName":firstName,
    	"lastName":lastName,
    	"photo":photo,
    	"email":email,
    	"password":password,
    	"address":address,
    	"phone":phone
    }

    $.ajax({
        url: "https://c4caa6fe.ngrok.io/editUser/2/",
        type: 'POST',
        dataType: 'json', // added data type
        data: body,
        success: function(res) {
            console.log(res);

        }

    });

}

//-----------------------------------
	//Pacientes

// var pacientesFB
var contadorPacientes = 0

function opcionPacientes(){

	// $.ajax({
 //        url: "https://c4caa6fe.ngrok.io/getPatients/2/",
 //        type: 'GET',
 //        dataType: 'json', // added data type
 //        success: function(res) {
 //            pacientesFB = res
 //            var keysPacientes = Object.keys(pacientesFB)

 //        	if (contadorPacientes == 0) {
	// 		tarjetasNombres()
	// 		contadorPacientes = contadorPacientes+1
	// 		}

 //        }

 //    });

	function tarjetasNombres(){

	// 	for (var i = 0; i < keysPacientes.length; i++) {

	// 		var pintarNombres =
	// 		'<div class="row indiceNombres" id="seleccionado'+pacientesFB[i].id+'">'+
	//             '<div class="cuadroNombre">'+
	//               '<h3 id="firstName'+i+'" class="espacioNombre"></h3>'+
	//               '<h3 id="lastName'+i+'"></h3>'+
	//             '</div>'+
	//             '<div class="opciones">'+
	//               '<div class="botonOpcion">'+
	//                 '<button type="button" class="btn btn-primary" value="'+pacientesFB[i].id+'" onclick="perfilPaciente(this)">Perfil</button>'+
	//               '</div>'+
	//               '<div class="botonOpcion">'+
	//                 '<button type="button" class="btn btn-secondary" value="'+pacientesFB[i].id+'" onclick="resultadosPaciente()">Resultados</button>'+
	//               '</div>'+
	//             '</div>'+
	//           '</div>'+
	//         '</div>'

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
	                '<button type="button" class="btn btn-secondary" value="'+pacientesFB[i].id+'" onclick="resultadosPaciente(this)">Resultados</button>'+
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
	// document.getElementById("selectDietas").style.backgroundColor = 'white';	
	document.getElementById("selectPacientes").style.backgroundColor = '#e6e6f9';

	//ocultar otras pestanas
	document.getElementById("pacientes").style.display = "block";
	document.getElementById("miPerfil").style.display = "none";
	document.getElementById("sinSeleccionPaciente").style.display = "flex";
	// document.getElementById("dietas").style.display = "none";

}

	// perfil pacientes

var contadorInfoPacientes = 0

function perfilPaciente(event){

	let idPaciente = event.value

	var pintarPerfilPaciente = 
		'<div id="infoPacienteSelecc">'+
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
		    '<h5 class="campoPaciente">Nombre: <input type="text" id="namePT" value="'+idPaciente+'"></input></h5>'+
		    '<h5 class="campoPaciente">Apellido: <input type="text" id="lastPT" value=""></input></h5>'+
		    '<h5 class="campoPaciente">FB User: <input type="text" id="fbUserPT" value=""></input></h5>'+
		    '<h5 class="campoPaciente">Teléfono: <input type="text" id="phonePT" value=""></input></h5>'+
		    '<h5 class="campoPaciente">Correo electronico: <input type="text" id="emailPT" value=""></input></h5>'+
		  '</div>'+
		  '<div class="col-6 centrarPerfil">'+
		    '<h5 class="campoPaciente">Altura cm: <input type="password" id="alturaPT" value=""></input></h5>'+
		    '<h5 class="campoPaciente">Peso kg: <input type="text" id="pesoPT" value=""></input></h5>'+
		    '<h5 class="campoPaciente">Abdomen cm: <input type="text" id="abdomenPT" value=""></input></h5>'+
		    '<h5 class="campoPaciente">Brazo cm: <input type="text" id="brazoPT" value=""></input></h5>'+
		    '<h5 class="campoPaciente">Cintura cm: <input type="text" id="cinturaPT" value=""></input></h5>'+
		  '</div>'+
		'</div>'+
		'<div class="row container">'+
		  '<div class="col-12 centrarPerfil">'+
		    '<button type="button" class="btn btn-secondary" onclick=" modificarPerfil()">Modificar</button>'+
		  '</div>'+
		'</div>'+
		'</div>'


		
	
	//pintar solo informacion de usuario seleccionado
	if (contadorInfoPacientes == 0) {
		$("#perfilPaciente").append(pintarPerfilPaciente)
		contadorInfoPacientes = contadorInfoPacientes+1
	}else{
		$("#infoPacienteSelecc").remove()
		$("#perfilPaciente").append(pintarPerfilPaciente)
	}




	//pintar boton seleccionado
	for (var i = 0; i < pacientesFB.length; i++) {
	 	if (pacientesFB[i].id == idPaciente) {
	 		document.getElementById("seleccionado"+idPaciente).style.backgroundColor = '#e6e6f9';
	 	} else{
	 		document.getElementById("seleccionado"+pacientesFB[i].id).style.backgroundColor = 'white';
	 	}
	 } 

	//ocultar otras pestanas
	document.getElementById("sinSeleccionPaciente").style.display = "none";

	document.getElementById("resultadosPaciente").style.display = "none";

	document.getElementById("perfilPaciente").style.display = "block";
}

	// Resultados pacientes

contadorResulPacientes = 0

function resultadosPaciente(event){

	var diasCumplidos = []
	let idPaciente = event.value

	for (var i = 0; i < pacientesFB.length; i++) {
		if (pacientesFB[i].id == idPaciente) {
			let cumplimiento = Object.keys(pacientesFB[i].cumplimiento)
			for (var a = 0; a < cumplimiento.length+1; a++) {

				if(pacientesFB[i].cumplimiento[a] == "si"){
					pacientesFB[i].cumplimiento[a] = 2
				} else if(pacientesFB[i].cumplimiento[a] == "no"){
					pacientesFB[i].cumplimiento[a] = 1
				} else{
					pacientesFB[i].cumplimiento[a] = 0
				}

				diasCumplidos.push(pacientesFB[i].cumplimiento[a])
			}
		}
	}

	// for (var i = 0; i < Things.length; i++) {
	// 	Things[i]
	// }
	

		Highcharts.chart('graficoCumplimiento', {

		    title: {
		        text: 'Cumplimiento de dieta'
		    },

		    subtitle: {
		        text: 'Contacto de bot con cliente'
		    },

		    yAxis: {
		        title: {
		            text: 'Cumplimiento (1-No cumplio / 2-cumplio)'
		        }
		    },
		    xAxis: {
		        title: {
		            text: 'Días'
		        }
		    },
		    legend: {
		        layout: 'vertical',
		        align: 'right',
		        verticalAlign: 'middle'
		    },

		    plotOptions: {
		        series: {
		            label: {
		                connectorAllowed: false
		            },
		            pointStart: 0
		        }
		    },

		    series: [{
		        name: 'Dieta',
		        data: diasCumplidos
		    }],

		    responsive: {
		        rules: [{
		            condition: {
		                maxWidth: 500
		            },
		            chartOptions: {
		                legend: {
		                    layout: 'horizontal',
		                    align: 'center',
		                    verticalAlign: 'bottom'
		                }
		            }
		        }]
		    }

		});

	//pintar boton seleccionado
	for (var i = 0; i < pacientesFB.length; i++) {
	 	if (pacientesFB[i].id == idPaciente) {
	 		document.getElementById("seleccionado"+idPaciente).style.backgroundColor = '#e6e6f9';
	 	} else{
	 		document.getElementById("seleccionado"+pacientesFB[i].id).style.backgroundColor = 'white';
	 	}
	 } 


	//ocultar otras pestanas
	document.getElementById("sinSeleccionPaciente").style.display = "none";

	document.getElementById("perfilPaciente").style.display = "none";

	document.getElementById("resultadosPaciente").style.display = "block";

	
}

// //-----------------------------------
// 	//Dietas

// var contadorDietas = 0

// function opcionDietas(){

// 	if (contadorDietas == 0) {
		
// 		contadorDietas = contadorDietas+1
// 	}

// 	//pintar boton seleccionado
// 	document.getElementById("selectPerfil").style.backgroundColor = 'white';
// 	document.getElementById("selectDietas").style.backgroundColor = '#e6e6f9';	
// 	document.getElementById("selectPacientes").style.backgroundColor = 'white';

// 	//ocultar otras pestanas
// 	document.getElementById("dietas").style.display = "block";
// 	document.getElementById("miPerfil").style.display = "none";
// 	document.getElementById("pacientes").style.display = "none";
// 	document.getElementById("sinSeleccionPaciente").style.display = "none";
// }