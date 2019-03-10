const awsSDk = require("aws-sdk");
const awsPlugin = require("../aws");

const ncAwsPlugin = (options) => {
  return awsPlugin(options, awsSDk);
}

module.exports = ncAwsPlugin;