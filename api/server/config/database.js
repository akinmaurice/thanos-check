import mongoose from 'mongoose';
import config from './';

// use ES6 promises for mongoose
mongoose.Promise = global.Promise;

// Connect to our Database and handle an bad connections
const mongooseConnection = mongoose.connect(config.mongoDb.uri, {
  useMongoClient: true,
})
  .then(() => {
    logger.info(`Database Connection on ${process.env.NODE_ENV} Environment Established`);
  })
  .catch((error) => {
    logger.error(`🙅 🚫 🙅 🚫 🙅 🚫 🙅 🚫 → ${error}`);
  });

export default mongooseConnection;

