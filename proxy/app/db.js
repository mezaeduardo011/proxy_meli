const mongoose = require('mongoose');
const url = process.env.DB_URL;

var options = {
    user: process.env.DB_USER,
    pass: process.env.DB_PASS
  };

mongoose.connect(url,options)
.then(() => console.log('Conexión a DB Mongo exitosa'))
.catch((error) => console.log('Error al establecer conexion con DB Mongo',error));

const db = mongoose.connection; 

module.exports = db;