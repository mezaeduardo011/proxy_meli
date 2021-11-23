const mongoose   = require("mongoose");

const Schema = mongoose.Schema;

const Proxy = new Schema({    
    ip : String
}, { versionKey : false } );

module.exports = mongoose.model('Model', Proxy , 'proxy');