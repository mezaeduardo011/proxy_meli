const Redis = require('ioredis');
const redis = new Redis({
    port: 6379, // Redis port
    host: "127.0.0.1", // Redis host
  });

module.exports = redis;