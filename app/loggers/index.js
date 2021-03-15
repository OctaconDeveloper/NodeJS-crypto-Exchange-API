const developmentLogger = require('./development');
const productionLogger = require('./production');

const appDebugger = (type, actor, className, message) => {

    if(process.env.APP_ENV === "PRODUCTION")
    {
       return productionLogger(type, actor, className, message)
    }
    else 
    {
        return developmentLogger(type, actor, className, message)
    }

}
module.exports = appDebugger

  
   