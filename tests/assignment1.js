
// Developer: Angel Ortega - Mahisoft
// Assignment 1: Create a new property from CS

module.exports = {
  'Create a new property from CE': function (browser) {
  	var line1 = ''
  	var zipCode = ''
  	var city = ''
  	var state = ''
  	var sellerName = '0000'
  	var productType = 'Traditional Listing'

  	browser

  	// Get a random address from California
	.url('http://www.fakeaddressgenerator.com/Random_Address/US_California')
	.useXpath()
	.waitForElementVisible('html/body/div[1]/div[3]/div[1]/div[1]/div/div[2]/div[7]/div[2]/strong/input', 5000)	
	.getValue('html/body/div[1]/div[3]/div[1]/div/div[3]/div[2]/div[6]/div[2]/strong/input', function(result){ line1 = result.value })
	.getValue('html/body/div[1]/div[3]/div[1]/div/div[3]/div[2]/div[9]/div[2]/strong/input', function(result){ zipCode = result.value })
	
	// CREATION OF A NEW PROPERTY GETS STARTED:
	.perform(
		function() {		  
			browser.useCss()
			browser.url('https://cedev.channelauction.com')
			browser.waitForElementVisible('body', 80000)
			browser.setValue('input[ng-model="loginCtrl.logonName"]', 'jose')
			browser.setValue('input[ng-model="loginCtrl.password"]', 'jose')
			browser.click('button[data-elm-id="btnLogin"]')
			browser.waitForElementVisible('body', 80000)
			browser.waitForElementVisible('a[data-elm-id="lnkCasAdministration"]', 80000)
			browser.click('a[data-elm-id="lnkCasAdministration"]')
			browser.click('a[data-elm-id="lnkCasNewPropertyFile"]')				
			browser.waitForElementVisible('select[data-elm-id="client"] option[label="'+sellerName+'"]', 80000)
			browser.click('select[data-elm-id="client"] option[label="'+sellerName+'"]')
			browser.waitForElementVisible('select[data-elm-id="productType"]', 80000)							
			browser.click('select[data-elm-id="productType"] option[label="'+productType+'"]')
			browser.click('select[data-elm-id="isTestProperty"] option[label="Yes"]')
			browser.setValue('input[data-elm-id="line1"]', line1)
			browser.setValue('input[data-elm-id="zipCode"]', zipCode)
			browser.pause(2000)
			browser.submitForm('form[name="form"]')
			browser.waitForElementVisible('div[id="fileHeader"]', 80000)
			browser.click('a[data-elm-id="lnkCasFiles"]')
			browser.waitForElementVisible('tbody', 80000)
			browser.setValue('input[data-elm-id="searchAddress"]', line1)
			browser.pause(3000)
			browser.assert.containsText('tbody', line1)
			}
		)
	}	  
};
