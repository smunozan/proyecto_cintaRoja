var firebase = {
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

// firebase = firebase.toArray()

firebase = $.map(firebase, function(value, index) {
    return [value];
});

	function tarjetasNombres(){

		for (var i = 0; i < firebase.length; i++) {
			// console.log(firebase[i].name)
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

		$("#name"+i).html(firebase[i].name)

		}
	}

	tarjetasNombres()


//

function perfilDR(){
	alert("hola")
}