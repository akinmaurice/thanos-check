const path = require('path');
const util = require('util');

const test = require('./env/test');
const production = require('./env/production');
const development = require('./env/development');

const extend = (util)._extend;
const defaults = {
  root: path.normalize(`${__dirname}/..`),
  webserver: {
    port: process.env.PORT || '5000',
  },
  application_logging: {
    file: process.env.LOG_PATH,
    level: process.env.LOG_LEVEL || 'info',
    console: process.env.LOG_ENABLE_CONSOLE || true,
  },
  appName: 'Thanos-Check-Web-Client',
};

const environment = {
  development: extend(development, defaults),
  test: extend(test, defaults),
  production: extend(production, defaults),
}[process.env.NODE_ENV || 'development'];

module.exports = environment;
