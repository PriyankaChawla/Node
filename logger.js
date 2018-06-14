var logger = require('nodejslogger')

logger.init({"file:":__dirname+"/logs/debug.log","mode":"DIE"})

module.exports=logger;