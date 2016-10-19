module.exports = {
  'Create New Property File on CE' : function (browser) {
	  //Start Session
      browser.url('https://cedev.channelauction.com')
      browser.waitForElementVisible('body',1000)
      browser.setValue('input[name="logonName"]', 'jose')
      browser.setValue('input[name="password"]', 'jose')
      browser.click('button[data-elm-id="btnLogin"]')
      browser.waitForElementVisible('body',1000)
	  console.log("Log in successful")
	  
      //Navigate from home to New Property File
      browser.waitForElementVisible('a[data-elm-id="lnkCasAdministration"]',100000)
      browser.click('a[data-elm-id="lnkCasAdministration"]')
      browser.click('a[data-elm-id="lnkCasNewPropertyFile"]')
      browser.waitForElementVisible('body',1000)
      browser.waitForElementVisible('select[id="client"]',100000)
	  console.log("Navigate to New Property file and wait until some elements are loaded.")
	  
	  //Start ---- Fill required fields for new properties
	  //Transaction Characteristics section
	  browser.click('select[id="productType"]')
      browser.click('option[value="string:traditionalListing"]')//Product Type
	  browser.click('select[id="isTestProperty"]')
	  browser.click('option[label="No"]')//Test Property
	  console.log("Complete Transaction Characteristics section (Product type and Test property).")
	  
	  //Address section
	  browser.setValue('input[id="line1"]','448 S 23rd St 1')//Line 1	  
	  browser.setValue('input[id="zipCode"]','94804')//Zip Code
	  browser.click('a[data-elm-id="btnMapAddress"]')
	  	  
	  //Seller name dropdown
	  //browserclass="form-control ng-touched ng-dirty ng-valid-parse ng-invalid ng-invalid-required"
	  browser.click('select[id="client"]')//Seller name
	  browser.pause(5000)
	  browser.assert.containsText('select[id="client"]',"--")
	  browser.pause(120000)
	  browser.click('select[id="client"]')
	  browser.keys(browser.Keys.DOWN_ARROW)
	  browser.keys(['\uE006'])//Hits the enter key
	  //Finish ---- Fill required fields for new properties
	  
	  //Button
	  browser.assert.elementPresent('button[data-elm-id="btnCreate"]')
	  browser.click('button[data-elm-id="btnCreate"]')
      //.end();
  }
};