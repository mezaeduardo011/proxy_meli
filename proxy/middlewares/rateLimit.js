const redis = require('../app/clientRedis');


 function  rateLimit(){

    return async function(req,res,next){

        const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
        //const obj = { ip : ip, otro : 3};
        const request = await  redis.incr(ip);
        
        let tiempoRestante;
        if(request === 1)
        {
            await redis.expire(ip,10);
            tiempoRestante = 10;
        }else 
        {
            tiempoRestante = await redis.ttl(ip);
        }
    
        if(request > 20)
        {
            return res.status(503).json({
                type_msg : 'interno',
                response : 'error',
                requests : request,
                tiempoRestante : tiempoRestante
            });
        }else 
        {
            next();
        }
    }

}

module.exports = rateLimit;