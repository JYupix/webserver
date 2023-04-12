/*const http = require("http");

//REQUEST
//Es lo que se solicita de un cliente
//RESPONSE
//Es lo que yo le voy a responder cuando pasemos esa request
http
  .createServer((req, res) => {
    //-------------------------------------------------//
    //CREANDO PRIMER SERVIDOR Y ARCHIVO .CSV
    //SE DESCARGA EL ARCHIVO .CSV Y SE ABRE UN EXCEL CON LA INFO QUE LE ENVIAMOS

    // console.log(req);
    //Regresando un archivo de texto
    res.writeHead(200, { "Content-type": "text/plain" });
    //Regresando un archivo JSON
    res.writeHead(200, { "Content-type": "application/json" });
    //
    const persona = {
      id: 1,
      nombre: "Fernando",
    };
    //Si intentamos imprimir el objeto, saldrá error puesto que el res.write solicita un string, por eso lo serializamos con JSON.stringify
    // res.write(persona);
    res.write(JSON.stringify(persona));

    //Haremos que un archivo se descargue y ponemos el nombre de dicho archivo
    res.setHeader("Content-Disposition", "attachment; filename=lista.csv");

    //REGRESANDO UN CSV (Se decarga el archivo)
    res.writeHead(200, { "Content-type": "application/csv" });

    res.write("id", "nombre\n");
    res.write("1", "Fernando\n");
    res.write("2", "Maria\n");
    res.write("3", "Juan\n");
    res.write("4", "Pedro\n");

    //
    //
    //
    //
    // res.write("Hola Mundo");
    res.end();
  })
  .listen(8080);

console.log("Escuchando el puerto", 8080);*/

//-------------------------------------------------//
//-------------------------------------------------//

const http = require("http");

//EJEMPLO NORMAL DE UN HTTP SERVER
// http
//   .createServer((req, res) => {
//     console.log(req);
//     res.write("Hola Mundo");
//     res.end();
//   })
//   .listen(8080);

//EJEMPLO PARA CAMBIAR EL TIPO DE MENSAJE O TIPO DE STATUS
// http
//   .createServer((req, res) => {
//     console.log(req);
//     res.writeHead(404);
//     res.write("404 │ Page not found");
//     res.end();
//   })
//   .listen(8080);

//EJEMPLO RETORNANDO ARCHIVOS DE TEXTO Y JSON
// http
//   .createServer((req, res) => {
//PARA RETORNAR UN ARCHIVO DE TEXTO
// res.writeHead(200, { "Content-Type": "text/plain" });

//PARA RETORNAR UN JSON
//     res.writeHead(200, { "Content-Type": "application/json" });

//     const persona = {
//       id: 1,
//       nombre: "Fernando",
//     };

//Al imprimir el objeto, saldrá error por lo que debe ser un string, por lo que tenemos que serializarlo con JSON
//     res.write(JSON.stringify(persona));
//     res.end();
//   })
//   .listen(8080);

//EJEMPLO RETORNANDO UN ARCHIVO CSV EL CUAL SE DESCARGA SOLO, SE MUESTRA EN UN ARCHIVO DE EXCEL LA LISTA DE ID Y NOMBRE
// http
//   .createServer((req, res) => {
//     res.setHeader("Content-Disposition", "attachment; filename=lista.csv");

//     res.writeHead(200, { "Content-Type": "application/csv" });

//     res.write("id, nombre\n");
//     res.write("1, Fernando\n");
//     res.write("2, Maria\n");
//     res.write("3, Juan\n");
//     res.write("4, Pedro\n");
//     res.end();
//   })
//   .listen(8080);

http
  .createServer((req, res) => {
    res.write("Hola Mundo");
    res.end();
  })
  .listen(8080);

console.log("Escuchando el puerto", 8080);
