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

describe('GET /', () => {
  it('returns "Welcome to the payment system"', (done) => {
    request('http://localhost:7865', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});

describe('GET /cart/:id', () => {
  it('returns "Payment methods for cart :id"', (done) => {
    request('http://localhost:7865/cart/12', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });

  it('returns 404 Not Found for non-numeric id', (done) => {
    request('http://localhost:7865/cart/hello', (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
});
