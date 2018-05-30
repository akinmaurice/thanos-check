const config = require('./config');

// require our App
const app = require('./config/app');

const { port } = config.webserver;


app.set('port', port);
const server = app.listen(app.get('port'), () => {
  logger.debug('##########################################################');
  logger.debug('#####          STARTING APPLICATION SERVER           #####');
  logger.debug('##########################################################\n');
  logger.info(`Application running → PORT ${server.address().port}`);
});
