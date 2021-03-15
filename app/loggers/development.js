const developmentLogger =  (type, actor, className, message ) => {

    const error = {
        status: type,
        user: actor,
        path: className,
        message: message
    }
    console.log("incoming error => ", error)
}

module.exports = developmentLogger