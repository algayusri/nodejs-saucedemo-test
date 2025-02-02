const { execSync } = require('child_process');
require('datejs');

const dateTime = Date.today().setTimeToNow().toString('yyyyMMdd_HHmmss');
const pattern = process.env.npm_config_pattern;
const featurepath = process.env.npm_config_featurepath;

const mochaCommand = `cross-env NODE_ENV=staging mocha --grep "${pattern}" --timeout 0 ./tests_explorer/features/${featurepath} --reporter mocha-multi-reporters --reporterOptions configFile=./config/configQC.json,cmrOutput=mocha-junit-reporter+testsuitesTitle+NamaScrum:mocha-junit-reporter+mochaFile+${dateTime}:mochawesome+reportFilename+${dateTime}`;

console.log('Pattern : ', pattern);
console.log('featurepath : ', featurepath);
console.log('Running command : ', mochaCommand);

try {
  execSync(mochaCommand, { stdio: 'inherit' });
} catch (error) {
  console.error('Error executing mocha command:', error);
}

const xmlCommand = 'cross-env NODE_ENV=staging node ./tests_explorer/utils/xml_data_time.js';

console.log('Running command:', xmlCommand);

try {
  execSync(xmlCommand, { stdio: 'inherit' });
} catch (error) {
  console.error('Error executing XML data time command:', error);
}