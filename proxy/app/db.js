const mongoose = require('mongoose');
const url = 'mongodb://localhost/proxy_meli?authSource=admin';

var options = {
    user: "admin",
    pass: "admin"
  };

mongoose.connect(url,options)
.then(() => console.log('Conexión a DB Mongo exitosa'))
.catch((error) => console.log('Error al establecer conexion con DB Mongo',error));

const db = mongoose.connection; 

module.exports = db;