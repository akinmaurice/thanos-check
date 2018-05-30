import Q from 'q';


const User = require('../models/User');


/**
   * This function returns
   * a single user
   * @param ipAddress {String} A String of
   * the ipAddress of the user to fetch
   * @returns {promise}
*/
export const getUserByIp = async(ipAddress) => {
  const defer = Q.defer();
  User.findOne({ ipAddress })
    .then((user) => {
      defer.resolve(user);
    })
    .catch((error) => {
      defer.reject(error);
    });
  return defer.promise;
};

/**
   * This function at
   * Saves an Ip and the Status of the User.
   * @param ipAddress {String}
   * Ip Address of the User
   * @returns {promise}
*/
export const saveUser = (userObject) => {
  const defer = Q.defer();
  const newUser = new User({
    ipAddress: userObject.ipAddress,
    status: userObject.status,
  });
  newUser.save()
    .then((user) => {
      defer.resolve(user);
    })
    .catch((error) => {
      defer.reject(error);
    });
  return defer.promise;
};

/**
   * This function at
   * random if the user has been
   * killed by thanos or not.
   * @param ipAddress {String}
   * Ip Address of the User
   * @returns {promise}
*/
export const getStatus = () => {
  const defer = Q.defer();
  const statusArray = [
    'Alive',
    'Dead',
  ];
  const status = statusArray[Math.floor(Math.random() * statusArray.length)];
  defer.resolve(status);
  return defer.promise;
};

