 	var line1 
    var zipCode

module.exports = {
  'Create a property via CE' : function (browser) {
    browser
    .url('http://www.fakeaddressgenerator.com/World_Address/get_us_address/city/Phoenix')
	.useXpath()
    .waitForElementVisible('html/body/div[1]/div[3]/div[1]/div/div[3]/div[2]/div[6]/div[2]/strong/input', 50000)
    .getValue('html/body/div[1]/div[3]/div[1]/div/div[3]/div[2]/div[6]/div[2]/strong/input', function(result) {
            // Assign the value of the result inside your callback function
            // For this test, we're assuming the text of @element is 'bar'
            line1 = result.value;
            console.log(line1);
        })
    .getValue('html/body/div[1]/div[3]/div[1]/div/div[3]/div[2]/div[9]/div[2]/strong/input', function(result) {
            // Assign the value of the result inside your callback function
            // For this test, we're assuming the text of @element is 'bar'
            zipCode = result.value;
            console.log(zipCode);
       })
       .perform(function(){
       		console.log(line1)
			console.log(zipCode)
			browser.useCss()
	  		browser.url('https://cedev.channelauction.com')
	  		browser.waitForElementVisible('body', 500000)
      		browser.setValue('input[ng-model="loginCtrl.logonName"]', 'jose')
      		browser.setValue('input[ng-model="loginCtrl.password"]', 'jose')
      		browser.click('button[data-elm-id="btnLogin"]')
      		browser.waitForElementVisible('li[class="btn-group dropdown"]', 30000)
      		browser.click('a[data-elm-id="lnkCasAdministration"]')
      		browser.click('a[data-elm-id="lnkCasNewPropertyFile"]')
      		browser.waitForElementVisible('#client option', 30000)
      		browser.click('select[name="client"]') 
	  		browser.pause(30000)
	  		browser.click('option[value="string:7fadd157-3455-4c2f-af14-2705f7dafcef"]') //selects the option but doesn't click
	  		browser.setValue('select[ng-model="model.transactionCharacteristics.productType"]', 'Traditional Listing')
	  		browser.setValue('input[ng-model="model.propertyAddress.line1"]', line1)
	  		browser.setValue('input[ng-model="model.propertyAddress.zipCode" ]', zipCode)
	  		browser.waitForElementVisible('div[class="col-xs-12"]', 30000)
	  		browser.click('button[data-elm-id="btnCreate"]') 
	  		browser.waitForElementVisible('div[class="panel-heading clearfix pb0"]', 50000).assert.containsText('div[class="panel-heading clearfix pb0"]', line1 + ', Phoenix, AZ ' + zipCode)
       })
	}
};