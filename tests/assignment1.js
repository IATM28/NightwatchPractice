module.exports = {
  'Create a new property': function (browser) {
  	var sellerNameOption = '0000'
  	var productType = 'Traditional Listing'
  	var propertyAddress = '11716 Spotted Horse Dr' //'405 Centre St'
  	var zipCode = '78759' //'04530'
    browser
      .url('https://cedev.channelauction.com')
      .waitForElementVisible('body', 1000)
      .setValue('input[ng-model="loginCtrl.logonName"]', 'jose')
      .setValue('input[ng-model="loginCtrl.password"]', 'jose')
      .click('button[data-elm-id="btnLogin"]')
      .waitForElementVisible('body', 5000)
	  .waitForElementVisible('a[data-elm-id="lnkCasAdministration"]', 50000)
	  .click('a[data-elm-id="lnkCasAdministration"]')
	  .click('a[data-elm-id="lnkCasNewPropertyFile"]')

	  .waitForElementVisible('select[data-elm-id="client"] option[label="'+sellerNameOption+'"]', 80000,
	  		function() {
    		this.waitForElementVisible('select[data-elm-id="productType"]', 5000)
			this.click('select[data-elm-id="productType"] option[label="'+productType+'"]')
			this.click('select[data-elm-id="isTestProperty"] option[label="Yes"]')
  			})

	.click('select[data-elm-id="client"]')
	.click('option[label="'+sellerNameOption+'"]')
	.setValue('input[data-elm-id="line1"]', propertyAddress)
	.setValue('input[data-elm-id="zipCode"]', zipCode)

	// Create the property
	.click('button[data-elm-id="btnCreate"]')
	.waitForElementNotVisible('button[data-elm-id="btnCreate"]', 5000)
	.click('a[data-elm-id="lnkCasFiles"]')
	.waitForElementVisible('table[data-elm-id="tblAddressListing"]', 5000)
	.setValue('input[data-elm-id="searchAddress"]', propertyAddress)
  }
};
