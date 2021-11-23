const Proxy = require('../models/Proxy');


 function  rateLimit(){

    return async function(req,res,next){

        const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
        const proxy = new Proxy({ ip: ip });

        proxy.save().then(() => console.log('Consumo de proxy registrado'));
        next();          
    }

}

module.exports = rateLimit;