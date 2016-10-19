module.exports = {
  'generate random address' : function (browser) {
    browser
      .url('https://www.randomlists.com/random-addresses')
      .waitForElementVisible('ol[id="result"]', 10000)
      .getText('ol[id='result']/li[1]/div]', function(randomAdress)){
      	var adresss = randomAdress
      }
  },