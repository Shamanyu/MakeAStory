const environment =  process.env.NODE_ENV;

let configSettings = null;

console.log("Environment is: %s", environment);

if (environment === 'development' || environment === 'test'){
  configSettings = require('./development');
}
else{
  configSettings = require('./production');
}

const settings = configSettings;

export default settings;
