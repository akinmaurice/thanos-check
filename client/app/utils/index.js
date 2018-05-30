const axios = require('axios');
const Q = require('q');
// Import config to get the API uri
const config = require('../../config');

const callApi = (ipAddress) => {
  const defer = Q.defer();
  // Call Api and get Response
  const apiCall = `${config.api.uri}/status/${ipAddress}`;
  logger.debug(apiCall);
  axios.get(apiCall)
    .then((response) => {
      defer.resolve(response.data);
    })
    .catch((error) => {
      defer.reject(error);
    });
  return defer.promise;
};
module.exports = callApi;

