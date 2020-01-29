const requestIp = require('request-ip');

/*
STEPS:
1. get token [CHECK]
2. check datastore for token [CHECK]
b. WHY NOT ON FIRST REQUEST?
3. approve/deny based on criteria
*/

const RateLimiter = (interface, dataStore) => {

  return (function (req, res, next) {
    
    const token = requestIp.getClientIp(req).split("f:")[1];

    if(interface.read(token, dataStore)){
      if (!interface.check(token, dataStore)){
        return res.status(403).json({"error": "Exceeded rate limit"})
      }
      // TODO - Do the increment thing
      interface.increment(token, dataStore);
      console.log(JSON.stringify(interface.read(token, dataStore)))
      return next();
    }
    interface.init_token(token, dataStore);
    console.log(JSON.stringify(interface.read(token, dataStore)))
    return next();
  })

}



module.exports = RateLimiter;