const express = require('express');
const app = express();

// ERROR DE SEGURIDAD: Password quemada en el código (Snyk lo detectará)
const ADMIN_PASSWORD = "12345_super_secreta"; 

app.get('/', (req, res) => {
  // ERROR DE CALIDAD: Variable no usada y consola (SonarCloud lo detectará)
  var nombre = "Usuario"; 
  res.send('Hola Mundo');
});

// ERROR DE SEGURIDAD: Evaluación de código peligroso
app.get('/run', (req, res) => {
  eval(req.query.cmd); 
});

app.listen(3000, () => console.log('Server corriendo en puerto 3000'));
