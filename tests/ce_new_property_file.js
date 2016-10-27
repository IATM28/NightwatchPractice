var enviroment = "https://cedev.channelauction.com";
var timeforelement = 100000;
var addressline1 = "022 S 23rd St";
var zipcode = 94804;
var fulladdress = addressline1 + ", Richmond, CA " + zipcode;

module.exports = {
  'Login on CE' : function (browser) {
	  browser.maximizeWindow()
	  //Start Session
	  browser.url(enviroment)
	  browser.waitForElementPresent('input[data-elm-id="logonName"]',timeforelement)
	  browser.waitForElementPresent('input[data-elm-id="password"]',timeforelement)
	  browser.waitForElementPresent('label[for="rememberMe"]',timeforelement)
	  browser.waitForElementPresent('button[data-elm-id="btnLogin"]',timeforelement)
	  browser.waitForElementPresent('a[class="text-muted"]',timeforelement)
	  browser.setValue('input[name="logonName"]','jose')
	  browser.setValue('input[name="password"]','jose')
	  browser.click('button[data-elm-id="btnLogin"]')
	  browser.pause(timeforelement)
	  browser.waitForElementPresent('img[src="img/logo.png"]',timeforelement)
	  browser.waitForElementPresent('a[data-elm-id="lnkCasAdministration"]',timeforelement)
	  browser.waitForElementPresent('em[class="fa fa-dashboard"]',timeforelement)
	  browser.waitForElementPresent('em[class="fa fa-file-o"]',timeforelement)
  },
  'Navigate to New Property File' : function(browser){
	  browser.click('a[data-elm-id="lnkCasAdministration"]')
	  browser.waitForElementPresent('a[data-elm-id="lnkCasNewPropertyFile"]',timeforelement)
	  browser.click('a[data-elm-id="lnkCasNewPropertyFile"]')
	  browser.waitForElementPresent('h3[class="ng-scope"]',timeforelement)
	  browser.waitForElementPresent('fieldset[id="transactionCharacteristicsForm"]',timeforelement)
	  browser.waitForElementPresent('fieldset[id="propertyAddressForm"]',timeforelement)
	  browser.waitForElementPresent('fieldset[id="propertyCharacteristicsForm"]',timeforelement)
	  browser.waitForElementPresent('button[data-elm-id="btnCreate"]',timeforelement)
  },
  //Fill required fields for new properies
  'Create New Property' : function(browser){
	  //Fill Address section
	  browser.setValue('input[data-elm-id="line1"]',addressline1)
	  browser.setValue('input[data-elm-id="zipCode"]',zipcode)
	  browser.click('a[data-elm-id="btnMapAddress"]') 
	  //Fill Property Characteristics
	  /*
	  This section is not required on create new properties.
	  */
	  //Fill Transaction Characteristics section. It is neccesary to select client at the end of this section, because take a lot of time to load.
	  browser.click('select[data-elm-id="productType"]')
	  browser.click('option[value="string:traditionalListing"]')
	  browser.click('select[data-elm-id="isTestProperty"]')
	  browser.click('option[label="No"]')
	  browser.pause(240000)
	  browser.click('select[data-elm-id="client"]')
	  browser.pause(10000)
	  browser.assert.containsText('select[id="client"]',"--")
	  browser.click('select[data-elm-id="client"]')
	  browser.keys(browser.Keys.DOWN_ARROW)
	  browser.keys(['\uE006'])
	  browser.click('button[data-elm-id="btnCreate"]')
  },
  'Verify Property' : function(browser){
	  browser.waitForElementPresent('select[data-elm-id="dataScreen"]',timeforelement)
	  browser.waitForElementPresent('a[class="ng-binding"]',timeforelement)
	  browser.waitForElementPresent('fieldset[id="amenities"]',timeforelement)
	  browser.waitForElementPresent('button[data-elm-id="btnSaveAll"]',timeforelement)
	  browser.pause(timeforelement)
	  browser.assert.containsText('select[data-elm-id="dataScreen"]',"Auction Transaction Summary")
	  browser.assert.containsText('h4[class="pull-left mt-sm ng-binding"]',fulladdress)
	  //browser.pause(timeforelement)
	  browser.click('em[class="fa fa-file-o"]')
	  browser.waitForElementPresent('h3[class="pv-lg clearfix ng-binding ng-scope"]',timeforelement)
	  browser.waitForElementPresent('label[class="col-md-12 col-lg-4 control-label"]',timeforelement)
	  browser.waitForElementPresent('th[uib-tooltip="Address"]',timeforelement)
	  browser.waitForElementPresent('input[data-elm-id="searchAddress"]',timeforelement)
	  browser.pause(10000)
	  browser.clearValue('input[data-elm-id="searchAddress"]')
	  //browser.setValue('input[data-elm-id="searchAddress"]',addressline1)
	  browser.setValue('input[data-elm-id="searchAddress"]',addressline1)
	  //browser.pause(10000)
	  browser.pause(timeforelement)
	  browser.waitForElementPresent('div[class="glbl-no-wrap ng-binding"]',timeforelement)
	  browser.waitForElementPresent('td[class="ng-binding"]',timeforelement)
	  browser.assert.containsText('th[uib-tooltip="Address"]',"ADDRESS")
	  browser.click('div[class="glbl-no-wrap ng-binding"]')
	  //This function works to switch tabs
	  browser.window_handles(function(result){
		var handle = result.value[1];
		browser.switchWindow(handle);
      });
	  browser.pause(timeforelement)
	  browser.waitForElementPresent('select[data-elm-id="dataScreen"]',timeforelement)
	  browser.waitForElementPresent('a[class="ng-binding"]',timeforelement)
	  browser.waitForElementPresent('fieldset[id="amenities"]',timeforelement)
	  browser.waitForElementPresent('button[data-elm-id="btnSaveAll"]',timeforelement)
	  browser.pause(timeforelement)
	  browser.assert.containsText('select[data-elm-id="dataScreen"]',"Auction Transaction Summary")
	  browser.assert.containsText('h4[class="pull-left mt-sm ng-binding"]',fulladdress)
	  browser.assert.containsText('label[class="control-label pr-sm"]',"Publish")
  },
 'Publish Property' : function(browser){
	 //browser.pause(timeforelement)
	 browser.click('li[heading="Marketing Controls"]')
	 browser.waitForElementPresent('fieldset[id="listingTypes"]',timeforelement)
	 browser.waitForElementPresent('fieldset[id="publishHistory"]',timeforelement)
	 browser.waitForElementPresent('fieldset[id="eventHistoryPanel"]',timeforelement)
	 browser.waitForElementPresent('fieldset[id="mkgHistory"]',timeforelement)
	 browser.waitForElementPresent('button[data-elm-id="btnAddNewEvent"]',timeforelement)
	 browser.pause(timeforelement)
	 browser.click('button[data-elm-id="btnAddNewEvent"]')
	 browser.click('button[data-elm-id="btnAddNewEvent"]')
	 browser.pause(timeforelement)
	 browser.waitForElementPresent('div[class="pv mb-lg"]',timeforelement)
	 browser.waitForElementPresent('button[data-elm-id="btnCancel"',timeforelement)
	 browser.waitForElementPresent('button[data-elm-id="btnSave"',timeforelement)
	 browser.waitForElementPresent('div[ng-hide="loadingListingHistory"]',timeforelement)
	 browser.click('input[ng-model="listingChoice"]')
	 browser.pause(timeforelement)
	 browser.waitForElementPresent('div[ng-show="asset.isListing"]',timeforelement)
	 browser.waitForElementPresent('input[ng-model="listingType"]',timeforelement)
	 browser.click('input[value="traditional"]')
	 browser.click('span[class="mr-lg"]')
	 browser.click('input[ng-model="listingType"]')
	 browser.pause(timeforelement)
	 browser.waitForElementPresent('input[data-elm-id="startDateTraditional"]',timeforelement)
	 browser.waitForElementPresent('input[data-elm-id="endDateTraditional"]',timeforelement)
	 browser.waitForElementPresent('input[id="listPrice"]',timeforelement)
	 browser.waitForElementPresent('input[id="allowOffersTraditional"]',timeforelement)
	 browser.setValue('input[data-elm-id="startDateTraditional"]',"10012016")
	 browser.setValue('input[data-elm-id="endDateTraditional"]',"12312017")
	 browser.setValue('input[id="listPrice"]',"100000")
	 browser.click('input[id="allowOffersTraditional"]')
	 browser.waitForElementPresent('input[data-elm-id="prepTimeTraditional"]',timeforelement)
	 browser.setValue('input[data-elm-id="prepTimeTraditional"]',"10")
	 browser.assert.elementPresent('button[data-elm-id="btnSave"]')
	 browser.click('button[data-elm-id="btnSave"]')
	 browser.pause(timeforelement)
	 browser.click('label[class="switch switch-lg"]')
	 browser.waitForElementPresent('div[class="sweet-alert showSweetAlert visible"]',timeforelement)
	 browser.waitForElementPresent('button[class="cancel"]',timeforelement)
	 browser.waitForElementPresent('button[class="confirm"]',timeforelement)
	 browser.click('button[class="confirm"]')
	 browser.click('button[class="confirm"]')
	 browser.pause(timeforelement)
	 browser.refresh()
	 browser.waitForElementPresent('button[data-elm-id="btnIsPublished"]',timeforelement)
	 browser.click('button[data-elm-id="btnIsPublished"]')
	 browser.pause(timeforelement)
	 //This function works to switch tabs
	 browser.window_handles(function(result){
		var handle = result.value[2];
		browser.switchWindow(handle);
     });
	 browser.waitForElementPresent('button[ng-click="abCtrl.maoButtonClick()"]',timeforelement)
	 browser.waitForElementPresent('h1[class="line1 ng-binding"]',timeforelement)
	 browser.assert.containsText('h1[class="line1 ng-binding"]',addressline1)
	 browser.pause(timeforelement)
	 browser.end();
 } 
      //browser.click('label[class="switch switch-lg"]')
	  //browser.pause(timeforelement)
	  //browser.end();
};