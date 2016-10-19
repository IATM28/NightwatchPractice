module.exports = {
  'generate random address' : function (browser) {
    browser
      .url('https://www.randomlists.com/random-addresses')
      .waitForElementVisible('input[ng-model="loginCtrl.logonName"]', 10000)
      .setValue('input[ng-model="loginCtrl.logonName"]', 'jose')
      .setValue('input[ng-model="loginCtrl.password"]', 'jose')
      .click('button[data-elm-id="btnLogin"]')
      .waitForElementVisible('body', 10000)
  },