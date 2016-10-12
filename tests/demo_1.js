module.exports = {
  'step one' : function (browser) {
    browser
      .url('https://cedev.channelauction.com')
      .waitForElementVisible('body', 1000)
      .setValue('input[ng-model="loginCtrl.logonName"]', 'jose')
      .setValue('input[ng-model="loginCtrl.password"]', 'jose')
      .click('button[data-elm-id="btnLogin"]')
      .waitForElementVisible('body', 1000)
  }
};
