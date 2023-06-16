const request = require('request');
const { expect } = require('chai');

describe('Login endpoint', () => {
  it('should return the correct message when POST /login is called', (done) => {
    const options = {
      url: 'http://localhost:7865/login',
      method: 'POST',
      json: {
        userName: 'Betty'
      }
    };

    request(options, (error, response, body) => {
      expect(body).to.equal('Welcome Betty');
      done();
    });
  });
});

describe('Available payments endpoint', () => {
  it('should return the correct payment methods when GET /available_payments is called', (done) => {
    request.get('http://localhost:7865/available_payments', (error, response, body) => {
      const expectedPaymentMethods = {
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      };
      const parsedBody = JSON.parse(body);
      expect(parsedBody).to.deep.equal(expectedPaymentMethods);
      done();
    });
  });;
});
