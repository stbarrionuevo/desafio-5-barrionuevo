/*
Utilizando la misma API de productos del proyecto entregable de la clase anterior, construir un web server (no REST) que incorpore:
Un formulario de carga de productos en la ruta raíz (configurar la ruta '/productos' para recibir el POST, y redirigir al mismo formulario).
Una vista de los productos cargados (utilizando plantillas de handlebars) en la ruta GET '/productos'.
Ambas páginas contarán con un botón que redirija a la otra.

> Consigna:  
Manteniendo la misma funcionalidad reemplazar el motor de plantillas handlebars por pug.
Manteniendo la misma funcionalidad reemplazar el motor de plantillas handlebars por ejs.
Por escrito, indicar cuál de los tres motores de plantillas prefieres para tu proyecto y por qué.

>> Aspectos a incluir en el entregable:
Realizar las plantillas correspondientes que permitan recorrer el array de productos y representarlo en forma de tabla dinámica, siendo sus cabeceras el nombre de producto, el precio y su foto (la foto se mostrará como un imágen en la tabla)
En el caso de no encontrarse datos, mostrar el mensaje: 'No hay productos'.

>> Sugerencias:
Utilizar iconfinder (https://www.iconfinder.com/free_icons) para obtener la url de las imágenes de los productos (click derecho sobre la imagen -> copiar dirección de la imagen)

- https://cdn3.iconfinder.com/data/icons/street-food-and-food-trucker-1/64/hamburger-fast-food-patty-bread-256.png

- https://cdn3.iconfinder.com/data/icons/street-food-and-food-trucker-1/64/fried-chicken-thigh-fast-food-512.png

-https://cdn3.iconfinder.com/data/icons/street-food-and-food-trucker-1/64/sausage-burger-bread-breakfast-food-512.png

>> Opcional:

Utilizar bootstrap para maquetar la vista creada por dicho motor de plantillas y el formulario de ingreso de productos.




Ejemplos a continuación


*/
const express = require('express');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('views', './views');
app.set('view engine', 'ejs');

const products = [];

app.get('/', (req, res) => {
  res.render('form.ejs', { products: products.sort((a, b) => b.price - a.price) });
});

app.post('/products', async (req, res) => {
  const { name, price, URL } = req.body;
  products.push({ name, price, URL });
  res.redirect('/');
});

const PORT = 8080

app.listen(PORT, (req, res) => console.log(`LISTENING ON ${PORT}`));


