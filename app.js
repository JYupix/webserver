//----------------------------------------------------//
//EJEMPLO SENCILLO DE EXPRESS
// const express = require("express");
// const app = express();

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// app.listen(8080);

//----------------------------------------------------//
//EJEMPLO CON MAS RUTAS
// const express = require("express");
// const app = express();
// const port = 8080;

// app.get("/", (req, res) => {
//   res.send("Home Page!");
// });

// app.get("/hola-mundo", (req, res) => {
//   res.send("Hola Mundo desde su respectiva ruta");
// });

// app.get("*", (req, res) => {
//   res.send("404 | Page not found");
// });

// app.listen(8080);

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// });

//----------------------------------------------------//
//CONTENIDO STÁTICO
// const express = require("express");
// const app = express();
// const port = 8080;

//EJECUTAR EL SIGUIENTE MIDDLEWARE
// app.use(express.static("public"));

//Esta línea no se ejecutará debido al middleware
// app.get("/", (req, res) => {
//   res.send("Home Page!");
// });

// app.get("/hola-mundo", (req, res) => {
//   res.send("Hola Mundo desde su respectiva ruta");
// });

//Sirve para cualquier página
// app.get("*", (req, res) => {
//   res.send("404 | Page not found");
// });
//Le mandaré algo que esté en la carpeta public
// app.get("*", (req, res) => {
//El send solo manda el texto
//El sendFile me manda un archivo
//Usamos el path absoluto con: __dirname
//Sería todo el path donde está instalada la aplicación que está corriendo
//   res.sendFile(__dirname + "/public/404.html");
// });

//----------------------------------------------------//
//PÁGINA GENÉRICA
// const express = require("express");
// const app = express();
// const port = 8080;

// Servir contenido estático
// app.use(express.static("public"));

// app.get("/generic", (req, res) => {
//   res.sendFile(__dirname + "/public/generic.html");
// });

// app.get("/elements", (req, res) => {
//   res.sendFile(__dirname + "/public/elements.html");
// });

// app.get("*", (req, res) => {
//   res.sendFile(__dirname + "/public/404.html");
// });

//----------------------------------------------------//
//PÁGINA CON HANDLEBARS
//Si vamos a usar Handlebars debemos crear una carpeta con views
// const express = require("express");
// const app = express();
// const port = 8080;

//Handlebar
// app.set("view engine", "hbs");

//Servir contenido estático
// app.use(express.static("public"));

// app.get("/", (req, res) => {
//El segundo argumento, son las opciones, la cuales enviaré como argumentos
//Son enviados a la hora de renderizar la vista
//Hago el ejemplo en el home.hbs poniendo doble llave y el nombre del argumento.
//   res.render("home", {
//     nombre: "Fernando Herrera",
//     titulo: "Curso de Node",
//   });
// });

// app.get("/generic", (req, res) => {
//   res.sendFile(__dirname + "/public/generic.html");
// });

// app.get("/elements", (req, res) => {
//   res.sendFile(__dirname + "/public/elements.html");
// });

// app.get("*", (req, res) => {
//   res.sendFile(__dirname + "/public/404.html");
// });

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// });

//----------------------------------------------------//
//PÁGINA CON HANDLEBARS Y PARTIALS
//Creo una nueva carpeta denro de views, llamada partials
require("dotenv").config();
const express = require("express");
const hbs = require("hbs");

const app = express();
// const port = 8080;
const port = process.env.PORT;

//Handlebars
app.set("view engine", "hbs");
//Normal
hbs.registerPartials(__dirname + "/views/partials");
//Con una función para que me muestre el error
// hbs.registerPartials(__dirname + "/views/partials", function (err) {});

//Servir contenido estático
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home", {
    nombre: "Fernando Herrera",
    titulo: "Curso de Node",
  });
});

app.get("/generic", (req, res) => {
  res.render("generic", {
    nombre: "Fernando Herrera",
    titulo: "Curso de Node",
  });
});

app.get("/elements", (req, res) => {
  res.render("elements", {
    nombre: "Fernando Herrera",
    titulo: "Curso de Node",
  });
});

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/public/404.html");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
