function logRequest(req, res, next) {

    const currHour = new Date().toISOString();

    console.log(`[${currHour}] ${req.method} - ${req.url} - ${req.ip}`);
    next()

}

module.exports = logRequest;