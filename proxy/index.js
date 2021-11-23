
//Libs
const express = require('express'); 
const { createProxyMiddleware } = require('http-proxy-middleware');
const path = require('path'); 

//Middlewares
const rateLimit = require('./middlewares/rateLimit');
const registroEstadisticas = require('./middlewares/registroEstadisticas');
const db = require('./app/db');
const app = express();
const API_SERVICE_URL = process.env.API_SERVICE_URL;

app.use(express.json());

app.get('/admin' , (req,res) => {
    res.sendFile(path.join(__dirname,'views/admin','index.html'));
});

// Proxy endpoints
app.use('/',  rateLimit() , registroEstadisticas() , createProxyMiddleware({
    target: API_SERVICE_URL,
    changeOrigin: true,
 }));



app.listen(8080);