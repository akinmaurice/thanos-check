import express from 'express';


import config from './config';

// Bootstrap express
import expressConfig from './config/express';

// Import mongoose connection
import './config/database';

const { port } = config.webserver;
const app = express();
const server = require('http').Server(app);

expressConfig(app);

server.listen(port);
logger.debug('##########################################################');
logger.debug('#####          STARTING APPLICATION SERVER           #####');
logger.debug('##########################################################\n');
logger.info(`Application running → PORT ${server.address().port}`);


export default app;
