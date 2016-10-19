module.exports = {
  'Login on CE' : function (browser) {
   // browser
      browser.url('https://cedev.channelauction.com')
      browser.waitForElementVisible('body',1000)
      //Start Session
      browser.setValue('input[name="logonName"]', 'jose')
      browser.setValue('input[name="password"]', 'jose')
      browser.click('button[data-elm-id="btnLogin"]')
      browser.waitForElementVisible('body',1000)
	  
      //Navigate from home to New Property File
      browser.waitForElementVisible('a[data-elm-id="lnkCasAdministration"]',100000)
      browser.click('a[data-elm-id="lnkCasAdministration"]')
      browser.click('a[data-elm-id="lnkCasNewPropertyFile"]')
      browser.waitForElementVisible('body',1000)
      
	  //Load and create new properties
      browser.waitForElementVisible('select[id="client"]',100000)
      
	  //Product type dropdown
	  browser.click('select[id="productType"]')
      browser.click('option[value="string:traditionalListing"]')
      
	  //Test Property dropdown
	  browser.click('select[id="isTestProperty"]')
	  browser.click('option[label="No"]')
	  
	  //Address section
	  //Line 1 textbox
	  browser.setValue('input[id="line1"]','448 S 23rd St 1')	  
	  browser.setValue('input[id="zipCode"]','94804')
	  
	  //Seller name dropdown
	  browserclass="form-control ng-touched ng-dirty ng-valid-parse ng-invalid ng-invalid-required"
	  browser.click('select[id="client"]')
	  browser.pause(5000)
	  //.waitForElementVisible()
      //.click('option[value="string:583902a6-86dd-4847-a423-e1c492d3105d"]')
	  //.pause(5000)
	  browser.assert.containsText('select[id="client"]',"--")
	  browser.pause(120000)
	  browser.click('select[id="client"]')
	  browser.keys(browser.Keys.DOWN_ARROW)
	  browser.keys(['\uE006']) //hits the enter key.
	  
	  //.expect.element('select[id="client"]').to.have.attribute('value').wich.contains("string:583902a6-86dd-4847-a423-e1c492d3105d")
	  .click('button[data-elm-id="btnCreate"]')
      //.end();
  }
};