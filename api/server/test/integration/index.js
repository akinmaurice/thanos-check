import chai from 'chai';

import chaiHttp from 'chai-http';

// Import Server
import server from '../../index';

const should = chai.should();

chai.use(chaiHttp);

describe('Integration Tests', () => {
  it('it should get the Index Route', (done) => {
    chai.request(server)
      .get('/')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.message.should.be.a('string');
        res.body.message.should.be.equal('Welcome to the Node API starter Service');
        done();
      });
  });

  it('it should get the Status Check Route', (done) => {
    chai.request(server)
      .get('/status')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.message.should.be.a('string');
        res.body.message.should.be.equal('Response fetched');
        res.body.should.have.property('response');
        done();
      });
  });
});
