const rateLimiter = (req, res, next) => {

  //const token = req.user.token;


  return next();
}

module.exports = { rateLimiter };