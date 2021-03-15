const Rollbar = require("rollbar");
const productionLogger =   ( type, actor, className,message) => {

        var rollbar = new Rollbar({
        accessToken: '27ae2163f3ab488cbd1d9768273b6cd6',
        captureUncaught: true,
        captureUnhandledRejections: true
        });
    const error = {
        status: type,
        user: actor,
        path: className,
        message: message
    }
    if(type === 'error')
    {
        rollbar.error(className+'-'+JSON.stringify(error));
    }
    else 
    {
        rollbar.debug(className+'-'+JSON.stringify(error));
    }
    
}

module.exports = productionLogger 