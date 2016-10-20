module.exports = {
  'Create Property on DE' : function (browser) {
	  //Start Session
	  browser.url('https://dedev.channelauction.com/homes/login?redirectUrl=%2Fhomes%2F')
      //browser.url('https://dedev.channelauction.com/homes/')
      //browser.waitForElementVisible('body',1000)
	  //browser.waitForElementPresent('a[ng-href="login?redirectUrl=/homes/"]',10000)
	  //browser.click('a[ng-href="login?redirectUrl=/homes/"]')
      
	  
	  browser.waitForElementVisible('body',1000)
	  browser.waitForElementPresent('input[data-elm-id="userEmail"]',10000)
	  browser.waitForElementPresent('input[data-elm-id="userPassword"]',10000)
	  browser.waitForElementPresent('button[data-elm-id="btnLogin"]',10000)
	  
	  browser.assert.elementPresent('input[data-elm-id="userEmail"]')
	  browser.assert.elementPresent('input[data-elm-id="userPassword"]')
	  browser.assert.elementPresent('button[data-elm-id="btnLogin"]')
	  browser.assert.containsText('h1',"Log In")
	  browser.setValue('input[data-elm-id="userEmail"]', 'jcasique+52@mahisoft.com')
      browser.setValue('input[data-elm-id="userPassword"]', 'jcasique')
      browser.click('button[data-elm-id="btnLogin"]')
      browser.waitForElementVisible('body',1000)
	  /*
	  Aca falta colocar mouse over en la opcion List a Home.
	  */
	  browser.url('https://dedev.channelauction.com/homes/list-a-home/search')
	  browser.waitForElementPresent('input[name="address"]',10000)
	  browser.waitForElementPresent('button[class="btn btn-primary locate-property-btn"]',10000)
	  browser.setValue('input[name="address"]','4801 Retriever Cir 1, Anchorage, AK 99502')
	  browser.click('button[class="btn btn-primary locate-property-btn"]')
	  browser.pause(25000)
	  browser.keys(['\uE006'])
	  browser.click('button[btn-whirl="btn-whirl"]')
	  browser.waitForElementPresent('input[name="line1"]',10000)
	  browser.waitForElementPresent('input[id="line2"]',10000)
	  browser.waitForElementPresent('input[id="zipCode"]',10000)
	  browser.waitForElementPresent('input[id="county"]',10000)
	  browser.waitForElementPresent('input[id="city"]',10000)
	  browser.waitForElementPresent('select[id="state"]',10000)
	  browser.waitForElementPresent('[class="btn btn-primary col-sm-6 col-sm-offset-3"]',10000)
	  browser.assert.elementPresent('input[name="line1"]')
	  browser.assert.elementPresent('input[id="line2"]')
	  browser.assert.elementPresent('input[id="zipCode"]')
	  browser.assert.elementPresent('input[id="county"]')
	  browser.assert.elementPresent('input[id="city"]')
	  browser.assert.elementPresent('select[id="state"]')
	  browser.assert.elementPresent('[class="btn btn-primary col-sm-6 col-sm-offset-3"]')
	  browser.click('[class="btn btn-primary col-sm-6 col-sm-offset-3"]')
	  //Finish step 0
	  
	  
	  
	  
	  
	  browser.pause(50000)
	  //
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  }
};