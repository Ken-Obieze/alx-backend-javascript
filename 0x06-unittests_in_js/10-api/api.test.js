const request = require('request');
const { expect } = require('chai');

const apiUrl = 'http://localhost:7865';

describe('Login endpoint', () => {
  it('should return the correct message when POST /login is called', async () => {
    const options = {
      url: `${apiUrl}/login`,
      method: 'POST',
      json: {
        userName: 'Betty'
      }
    };

    const response = await request(options);
    expect(response.body).to.equal('Welcome Betty');
  });
});

describe('Available payments endpoint', () => {
  it('should return the correct payment methods when GET /available_payments is called', async () => {
    const response = await request.get(`${apiUrl}/available_payments`);
    const expectedPaymentMethods = {
      payment_methods: {
        credit_cards: true,
        paypal: false
      }
    };
    const parsedBody = JSON.parse(response.body);
    expect(parsedBody).to.deep.equal(expectedPaymentMethods);
  });
});

describe('GET /', () => {
  it('returns "Welcome to the payment system"', async () => {
    const response = await request(apiUrl);
    expect(response.statusCode).to.equal(200);
    expect(response.body).to.equal('Welcome to the payment system');
  });
});

describe('GET /cart/:id', () => {
  it('returns "Payment methods for cart :id"', async () => {
    const response = await request(`${apiUrl}/cart/12`);
    expect(response.statusCode).to.equal(200);
    expect(response.body).to.equal('Payment methods for cart 12');
  });

  it('returns 404 Not Found for non-numeric id', async () => {
    const response = await request(`${apiUrl}/cart/hello`);
    expect(response.statusCode).to.equal(404);
  });
});
