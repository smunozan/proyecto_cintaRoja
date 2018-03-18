// Instalar firebase: npm install firebase-admin --save
// Instalar Express: npm install express
// Instalar body-parser: npm install body-parser --save

const firebase = require('firebase-admin');
const express = require('express')
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

//archivo de clave unica que se descarga de firebase

var serviceAccount = require("./test-devf-firebase-adminsdk-py5r7-ac70808c72.json");

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: "https://test-devf.firebaseio.com"
});


// //base de datos de firebase / se les pone var db y var ref, afuera de la peticion cuando se quiera leer en tiempo real los cambios (siguiente punto)
	var db = firebase.database()
//apuntando a indice de "usuarios"
	var ref = db.ref('Pacientes')

// //modulo que lee en tiempo real todo los cambios en la base de datos e imprime en consola
	ref.on("value", function(snapshot){
		console.log(snapshot.val());
	}, function(errorObject){
		console.log("The read failed: "+ errorObject.code)
	});

// // ----------------
// subir ID (como hijo), username y password, enviando desde body
// la ruta a donde hay que enviar la peticion http://localhost:3000/save
app.post('/save',(req,res)=>{
	// lo que se debe enviar en el body para subir a firebase
	var {id, name, fbUser, noContactado, estatus, tipoDieta, altura, kg, abdomen, brazo, cintura, muslo} = req.body

	//crea un nuevo hijo de "users", con el ID que envias en el body
	var pacientes = ref.child(id)

	//se le setea los dos parametros dentro del ID
	pacientes.set({
		"id": id,
	    "name" : name,
	    "fbUser" : fbUser,
	    "noContactado" : noContactado,
	    "contacto-dias" : {
	      "contador" : estatus,
	      "contador" : estatus,
	      "contador" : estatus
	    },
	    "dieta" : tipoDieta,
	    "informacion" : {
	      "fecha" : {
	        "altura" : altura,
	        "kg" : kg,
	        "medidas" : {
	          "abdomen" : abdomen,
	          "brazo" : brazo,
	          "cintura" : cintura,
	          "muslo" : muslo
	        }
	      }
	    },
	})

	//lo que regresa firebase cuando se le inserta datos 
	res.send('listo')
})

//Se levanta el servidor http://localhost:3000/
app.listen(3000, () => {
	console.log('Port 3000')
})

{

}