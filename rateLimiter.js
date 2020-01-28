const requestIp = require('request-ip');

/*
STEPS:
1. get token [CHECK]
2. check datastore for token [IN PROGRESS]
3. approve/deny based on criteria
*/

const RateLimiter = (checkToken) => {

  return (function (req, res, next) {
    
    const token = requestIp.getClientIp(req).split("f:")[1];
  
    if (!checkToken(token)){
      return res.status(403).json({"error": "Exceeded rate limit"})
    }
  
    return next();
  })

}



module.exports = RateLimiter;