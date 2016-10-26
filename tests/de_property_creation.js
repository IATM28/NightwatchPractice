 	  var line1 
      var zipCode
      var assetId
module.exports = {
  'Create a property via DE' : function (browser) {
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
	  		  browser.url('https://dedev.channelauction.com/homes/list-a-home/search')
      		  browser.waitForElementVisible('input[ng-model="locatePropCtrl.model.address"]', 500000)
      		  browser.click('div[id="emailMarketingModalMainContainerCloseButton"]')
              browser.setValue('input[ng-model="locatePropCtrl.model.address"]', line1 + ", Phoenix, AZ " + zipCode + ", USA")   
              browser.pause(30000)	
              browser.keys(['\uE006'])
              browser.click('button[btn-whirl="btn-whirl"]')
			  browser.waitForElementPresent('button[ng-click="caCtrl.createAsset()"]', 30000) 
              browser.click('button[ng-click="caCtrl.createAsset()"]')
      		  browser.pause(40000)
              browser.click('a[class="btn2 primary-btn btn btn-primary m-15"]')
      		  browser.waitForElementVisible('input[id="userEmail"]', 30000)
	  		  browser.setValue('input[id="userEmail"]', 'astridagent@mahisoft.com')
	  		  browser.setValue('input[id="userPassword"]', '123456')
	  		  browser.click('button[data-elm-id="btnLogin"]')
	  		  browser.waitForElementPresent('button[data-elm-id="btnAgent"]', 30000)
			  browser.click('button[data-elm-id="btnAgent"]')
			  /*browser.waitForElementVisible('input[data-elm-id="license"]', 30000)
	  		  browser.setValue('input[data-elm-id="license"]', '123')
			  browser.setValue('select[data-elm-id="issuingState"]', 'AZ')
	  		  browser.setValue('input[data-elm-id="brokerageName"]', 'gonzalito')
			  browser.setValue('input[data-elm-id="brokerageLicense"]', '321')
			  browser.setValue('input[data-elm-id="businessAddress"]', 'callejon donde las lanzan con ligas')
			  browser.setValue('input[data-elm-id="city"]', 'caracas')
			  browser.setValue('select[data-elm-id="state"]', 'AZ')
	  		  browser.setValue('input[data-elm-id="zipCode"]', zipCode)*/
	  		  browser.waitForElementPresent('input[data-elm-id="ownerEmail"]', 50000)
	  		  browser.setValue('input[data-elm-id="ownerEmail"]', 'jramirez@mahisoft.com')
	  		  browser.click('button[data-elm-id="btnSave"]')
	  		  browser.waitForElementPresent('select[data-elm-id="propertyType"]', 50000)
	  		  browser.click('select[data-elm-id="propertyType"]')
	  		  browser.click('option[value="string:Single Family-Attached"]')
	  		  browser.setValue('select[data-elm-id="beds"]', '2')
	  		  browser.setValue('select[data-elm-id="completeBathrooms"]','2')
	  		  browser.waitForElementPresent('button[data-elm-id="btnSave"]', 60000)
	  		  browser.click('button[data-elm-id="btnSave"]')
	  		  browser.pause(30000)
			  browser.click('button[class="btn btn-primary btn-lg btn-block ng-binding"]')
			  browser.pause(30000)
			  browser.click('button[data-elm-id="btnSave"]')
			  browser.waitForElementPresent('input[ng-model="termsCtrl.model.listPriceInCents"]', 50000)
			  browser.setValue('input[ng-model="termsCtrl.model.listPriceInCents"]', '300000')
			  browser.click('button[data-elm-id="btnSave"]')
			  browser.pause(30000)
			  browser.setValue('input[type="file"]', require('path').resolve('./moneymagpie_house4.png'))
			  browser.click('button[data-elm-id="btnAssignPhotos"]')
			  browser.waitForElementPresent('div[class="img-content"]', 30000)
			  browser.click('div[class="img-content"]')
			  browser.click('button[data-elm-id="btnTakeAction"]')
			  browser.pause(30000)
			  browser.click('button[data-elm-id="btnSaveAndPreview"]')
			  browser.pause(30000)	
			  browser.waitForElementPresent('h1[class="line1 ng-binding"]', 50000).assert.containsText('h1[class="line1 ng-binding"]', line1)
			  browser.click('button[data-elm-id="btnActivateListingXs"]')
			  browser.pause(30000)
			  browser.click('button[data-elm-id="btnAgreeContinue"]')  
			  browser.pause(30000)
      	})
    }
};