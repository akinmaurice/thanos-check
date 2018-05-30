import path from 'path';
import util from 'util';

import development from './env/development';
import test from './env/test';
import production from './env/production';

const extend = (util)._extend;
const defaults = {
  root: path.normalize(`${__dirname}/..`),
  webserver: {
    port: process.env.PORT || '3000',
  },
  application_logging: {
    file: process.env.LOG_PATH,
    level: process.env.LOG_LEVEL || 'info',
    console: process.env.LOG_ENABLE_CONSOLE || true,
  },
  appTitle: process.env.APP_TITLE,
};

const environment = {
  development: extend(development, defaults),
  test: extend(test, defaults),
  production: extend(production, defaults),
}[process.env.NODE_ENV || 'development'];

export default environment;
