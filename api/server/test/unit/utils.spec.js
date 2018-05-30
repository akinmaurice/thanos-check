import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';


// Import the unit to test
import {
  saveUser,
  getStatus,
  getUserByIp,
} from '../../app/utils/';


/**
*Import the Database Model
*/
const User = require('../../app/models/User');

chai.use(chaiAsPromised);

const { expect } = chai;

describe('Unit Test for Util', () => {
  it('Should setup Data for Unit tests', () => {
    User.remove({})
      .then(async() => {
        const testUser = new User({
          name: '127.0.0.1',
          status: false,
        });
        try {
          await testUser.save();
        } catch (error) {
          logger.error(error);
        }
      })
      .catch(() => {
        logger.error('unable to Remove Mock Data to run tests for User Unit');
      });
  });

  it('Should Create a User', () => {
    const data = {
      ipAddress: '127.0.0.2',
      status: true,
    };
    const testResult = saveUser(data);
    expect(testResult).to.eventually.have.property('ipAddress');
  });

  it('Should Get a User By ipAddress', () => {
    const ipAddress = '127.0.0.2';
    const testResult = getUserByIp(ipAddress);
    expect(testResult).to.eventually.have.property('ipAddress');
  });

  it('Should Get a Status', () => {
    const testResult = getStatus();
    expect(testResult).to.eventually.be.a('string');
  });
});
