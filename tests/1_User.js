'use strict';
const WaniKani = require('../dist/WaniKani.js');
const config = require('./config.json');

const argv = require('optimist').argv;
const chai = require('chai'); 
const expect = chai.expect;

const wanikani = new WaniKani.WaniKaniApi();

describe ('User Tests', () => {
  setAuthToken();

  it ('Should Be Able to Get Data from the User', async () => {
    const user = await wanikani.getUser();

    const userData = await user.asUserData();
    const userName = userData.data.username;

    expect(userName).to.equal(config.USER);
  });

  it ('Should Not Be Able to Get User With Invalid AuthToken', (done) => {
    wanikani.withAuthToken().getUser()
      .then(() => {
        done('Did not throw an error');
      })
      .catch((error) => {
        const expectedErrorMessage = 'Error: Authtoken must be provided to use "getUser"';

        const isCorrectError = error.message === expectedErrorMessage;
        if(isCorrectError){
          done();
        } else {
          done(`Wrong error was thrown. Expected: "${expectedErrorMessage}", but got "${error.message}"`);
        }
      });
  });
});

function setAuthToken() {
  const authTokenInParameter = argv.authToken;
  const authTokenInConfig = config.AUTH_TOKEN;

  const authTokenIsSetInParameter = authTokenInParameter !== undefined;
  const authTokenIsSetInConfig = authTokenInConfig !== '';

  if (authTokenIsSetInParameter) {
    wanikani.authToken = authTokenInParameter;
  } else if (authTokenIsSetInConfig) {
    wanikani.authToken = authTokenInConfig;
  }
}
