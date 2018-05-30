import Q from 'q';

// Import te required Utils Methods
import {
  getUserByIp,
  getStatus,
  saveUser,
} from '../utils';

/**
 * @summary App controller
 *  This Method takes in an Ip Address
 * and check if the
 * user is killed by thanos or not
 * @author Akintayo Akinyemi
*/
export default class appController {
  /**
   * This function takes and Ip and
   * Checks if alive or dead
   * @param ipAddress {String} A string of
   * the Ip Address of the User
   * @returns {promise}
   */
  static getStatus(ipAddress) {
    const defer = Q.defer();
    getUserByIp(ipAddress)
      .then(async(user) => {
        if (!user) {
          try {
            let status = false;
            const statusCheck = await getStatus();
            if (statusCheck === 'Alive') {
              status = true;
            }
            const userObject = {
              ipAddress,
              status,
            };
            const newUser = await saveUser(userObject);
            logger.info('Created New User in the DB!');
            defer.resolve(newUser);
          } catch (error) {
            logger.error(`Error Occured in Creating User in Controller ${error}`);
            defer.reject(error);
          }
          return;
        }
        logger.info('Fetched Exsiting User from the DB');
        defer.resolve(user);
      })
      .catch((error) => {
        logger.error(`Error Getting User by IP from the DB in Controller: ${error}`);
        defer.reject(error);
      });
    return defer.promise;
  }
}
