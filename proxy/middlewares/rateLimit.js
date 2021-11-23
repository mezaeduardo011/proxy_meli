const redis = require('../app/clientRedis');
const expiration = process.env.REDIS_EXPIRATION_INTERVAL;
const limit_request = process.env.REDIS_LIMIT_REQUEST;

 function  rateLimit(){

    return async function(req,res,next){

        const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
        //const obj = { ip : ip, otro : 3};
        const request = await  redis.incr(ip);
        
        let tiempoRestante;
        if(request === 1)
        {
            await redis.expire(ip,expiration);
            tiempoRestante = expiration;
        }else 
        {
            tiempoRestante = await redis.ttl(ip);
        }
    
        if(request > limit_request)
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