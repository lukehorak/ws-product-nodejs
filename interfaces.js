module.exports = {
  "tempstore": (token) => {
    console.log(token);
    return (Math.random() > 0.5);
  }
}