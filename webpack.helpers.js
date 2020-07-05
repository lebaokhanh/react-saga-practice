const path = require('path');
const dotenv = require('dotenv');
const fs = require('fs');

module.exports = {
  getEnvKeys: (env) => {
    // Get the root path (assuming your webpack config is in the root of your project!)
    const rootPath = path.join(__dirname);

    // Create the fallback path (the production .env)
    const baseEnvPath = `${rootPath}/.env`;

    // We're concatenating the environment name to our filename to specify the correct env file!
    const envPath = `${baseEnvPath}.${env.ENVIRONMENT}`;

    // Check if the file exists, otherwise fall back to the production .env
    const finalPath = fs.existsSync(envPath) ? envPath : baseEnvPath;

    // cal dotenv and it will return an Object with a parsed key
    const envFile = dotenv.config({ path: finalPath }).parsed;

    // create a nice object from the env variable
    const envKeys = Object.keys(envFile).reduce((envHash, key) => {
      envHash[`process.env.${key}`] = JSON.stringify(envFile[key]);
      return envHash;
    }, {});

    return envKeys;
  }
}
