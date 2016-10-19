module.exports = {
  'generate random address' : function (browser) {
    browser
      .url('https://www.randomlists.com/random-addresses')
      .waitForElementVisible('ol[id="result"]', 10000)
      .click('button[data-elm-id="btnLogin"]')
      .waitForElementVisible('body', 10000)
  },