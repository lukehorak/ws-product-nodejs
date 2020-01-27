const requestIp = require('request-ip');

const rateLimiter = (req, res, next) => {

  // Use request IP as token
  const token = requestIp.getClientIp (req);


  return next();
}

module.exports = { rateLimiter };