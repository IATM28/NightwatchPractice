
var line1;
var zipCode;
var city;

module.exports = {
 
	'Input Address' : function (browser){	    
	browser	
	    //Get Address from internet
    	.url('https://names.igopaygo.com/street/north-american-address')
		.click('select[name="how_many"]')
		.waitForElementVisible('option[value="1"]', 120000)
		.click('option[value="1"]')
		.click('select[name="country"]')
		.waitForElementVisible('option[value="unitedstates"]', 120000)
		.click('option[value="AZ"]')
		.click('input[id="create"]')
		.waitForElementVisible('div[class="mysql"]', 120000)
		//Get Address asyn
		.getText('div[class="mysql"]', function(result) {
			fullAddress = result.value;
			console.log(fullAddress);
			address = fullAddress.split(", ");
			line1 = address [0];
			console.log (line1);
			fullZipCode = address[3].split("-");
			zipCode = fullZipCode[0];
			console.log (zipCode);
			})

		//Convert Address in sync
		.perform(function(){
			console.log('Line 1: ', line1);
			console.log('zipCode ', zipCode);
			browser.url('https://cedev.channelauction.com/login')
			browser.waitForElementVisible('body', 10000)
    		browser.setValue('input[ng-model="loginCtrl.logonName"]', 'jose')
	        browser.setValue('input[ng-model="loginCtrl.password"]', 'jose')
	        browser.click('button[data-elm-id="btnLogin"]')
	        browser.waitForElementVisible('body', 10000)
		    browser.waitForElementVisible('a[data-elm-id="lnkCasAdministration"]', 120000)
		    browser.click('a[data-elm-id="lnkCasAdministration"]')
    		browser.waitForElementVisible('a[data-elm-id="lnkCasAdministration"]', 1000)
    		browser.click('a[data-elm-id="lnkCasNewPropertyFile"]')
			browser.waitForElementVisible('select[id="client"]', 240000)
    		browser.click('select[id="client"]')
    		browser.waitForElementVisible('option[value="string:7fadd157-3455-4c2f-af14-2705f7dafcef"]', 240000)
    		browser.click('option[value="string:7fadd157-3455-4c2f-af14-2705f7dafcef"]')
			browser.click('select[id="productType"]')
			browser.waitForElementVisible('option[value="string:traditionalListing"]', 120000)
		 	browser.click('option[value="string:traditionalListing"]')
		 	browser.setValue ('input[ng-model="model.propertyAddress.line1"]', line1)
			browser.setValue ('input[ng-model="model.propertyAddress.zipCode"]', zipCode)
			browser.assert.containsText('input[ng-model="model.propertyAddress.city"]',"")
			city = browser.getText ('input[ng-model="model.propertyAddress.city"]')
			console.log (city)
	  		browser.assert.containsText('input[ng-model="model.propertyAddress.county"]',"")
	  		browser.assert.containsText('select[id="state"]',"")
	  		browser.waitForElementVisible('button[class="btn btn-primary btn-lg pull-right"]', 30000000)
	  		browser.pause(30000)
	  		browser.click('button[class="btn btn-primary btn-lg pull-right"]')
  			browser.waitForElementVisible('div[class="panel-heading clearfix pb0"]', 500000).assert.containsText('div[class="panel-heading clearfix pb0"]', '365 N Jefferson st, Chicago, IL 60661')	  
		})

	}

};