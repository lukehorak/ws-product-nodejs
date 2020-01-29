const configs = require('./rl_configs.json')

const interfaces = {
  tempstore: {
    read: (token, dataStore) => {
      return dataStore[token];
    },
    check: (token, dataStore) => {
      // TODO - actually build this part
      const diff = Date.now() - dataStore[token].last_request;
      if (diff < configs.interval){
        if (dataStore[token].request_count >= configs.limit){
          return false;
        }
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

module.exports = interfaces[configs["interface"]];