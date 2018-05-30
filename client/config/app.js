const fs = require('fs');
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const morgan = require('morgan');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const FileStreamRotator = require('file-stream-rotator');


// Import Logger
const loggerInit = require('../config/logger');

// Import config
const config = require('../config');

const logDirectory = './log';
const checkLogDir = fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);
let accessLogStream,
  logger;

const index = require('../app/routes/');

const app = express();

// initialize logger
if (app.get('env') === 'development') {
  logger = loggerInit('development');
} else if (app.get('env') === 'production') {
  logger = loggerInit('production');
} else if (app.get('env') === 'test') {
  logger = loggerInit('test');
} else {
  logger = loggerInit();
}

global.logger = logger;
logger.info('Application starting...');
logger.debug("Overriding 'Express' logger");

if (checkLogDir) {
  accessLogStream = FileStreamRotator.getStream({
    date_format: 'YYYYMMDD',
    filename: `${logDirectory}/${config.appName}-%DATE%.log`,
    frequency: 'weekly',
    verbose: false,
  });
}


// view engine setup
app.set('views', path.join(__dirname, '../app/views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(morgan('combined', { stream: accessLogStream }));
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../app/public')));

// SECURITY HELMET SET UP
app.use(helmet.noCache());
app.use(helmet.referrerPolicy({ policy: 'same-origin' }));
// app.use(helmet.contentSecurityPolicy({
// directives: {
// defaultSrc: ["'self'"],
// styleSrc: ["'self'", 'fonts.googleapis.com']
// }
// }));
const ninetyDaysInSeconds = 7776000;
app.use(helmet.hpkp({
  maxAge: ninetyDaysInSeconds,
  sha256s: [ 'AbCdEf123=', 'ZyXwVu456=' ],
  includeSubdomains: true,
}));

app.use('/', index);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
