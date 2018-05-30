const Q = require('q');

// Import the APi Call
const getStatus = require('../utils');

/**
 * @summary App Controller to
 * get Status of client
 * @author Akintayo Akinyemi
*/
const appController = class appController {
  /**
   * This function returns
   * an array of the Events
   * @param ipAddress {String} ipAddress
   * of the Client to get
   * @returns {promise}
   */
  static getStatus(ipAddress) {
    const defer = Q.defer();
    getStatus(ipAddress)
      .then((response) => {
        defer.resolve(response);
      })
      .catch((error) => {
        defer.reject(error);
      });
    return defer.promise;
  }
};

module.exports = appController;

