const requestIp = require('request-ip');

/*
STEPS:
1. get token [CHECK]
2. check datastore for token [CHECK]
3. approve/deny based on criteria
*/

const RateLimiter = (interface, dataStore) => {

  return (function (req, res, next) {
    
    const token = requestIp.getClientIp(req).split("f:")[1];
    
    // Check for existence of token
    if(interface.read(token, dataStore)){
      // If token fails check (meaning it excees the rate limit)
      if (!interface.check(token, dataStore)){
        return res.status(403).json({"error": "Exceeded rate limit"})
      }
      // Otherwise, count up, take request
      interface.increment(token, dataStore);
      console.log(interface.read(token, dataStore))
      return next();
    }
    // If you got here, the token didn't exist, so make it so
    interface.init_token(token, dataStore);
    console.log(interface.read(token, dataStore))

    return next();
  })

}



module.exports = RateLimiter;