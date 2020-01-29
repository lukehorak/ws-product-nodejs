module.exports = {
  tempstore: {
    read: (token, dataStore) => {
      return dataStore[token];
    },
    check: (token, dataStore) => {
      // TODO - actually build this part
      if (Date.now() === dataStore[token].last_request){
        return false;
      }
      return true;
    },

    increment: (token, dataStore) => {
      dataStore[token].request_count += 1;
    },
    init_token: (token, dataStore) => {
      dataStore[token] = {
        "last_request": Date.now(),
        "request_count": 1
      }
    }
  
  }
}