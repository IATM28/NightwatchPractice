module.exports = {

  'login on DE' : function (browser) {
    browser
		.url('https://dedev.channelauction.com/homes')
		.waitForElementVisible('body', 10000)
		//.waitForElementVisible('a[ng-href="login?redirectUrl=/homes/"]', 100000)

	
		//LogIn
		.pause(10000)
		.useXpath()
		.click('//*[@id="main-navbar"]/nav[2]/div/ul[1]/li[1]/a')
		.useCss()
		.waitForElementVisible('input[data-elm-id="userEmail"]', 1000)
		.setValue('input[data-elm-id="userEmail"]','mgarmendia@mahisoft.com')
		.setValue('input[data-elm-id="userPassword"]','123456')
		.click('button[data-elm-id="btnLogin"]')
		.pause(10000)
		.useXpath()
		.waitForElementVisible('//*[@id="main-navbar"]/nav[2]/div/ul[2]/li[2]/a', 500000)
		.click('//*[@id="main-navbar"]/nav[2]/div/ul[2]/li[2]/a')
		
		//Select Sell a Home
		.waitForElementVisible('//*[@id="main-navbar"]/nav[2]/div/ul[2]/li[2]/ul/li[1]/a', 100000)
    	.click('//*[@id="main-navbar"]/nav[2]/div/ul[2]/li[2]/ul/li[1]/a')
    	.waitForElementVisible('/html/body/div[2]/div/div',50000)
    	.waitForElementVisible('/html/body/div[2]/div/div/div/div/input', 50000)
     	.useCss()

		//Get Address
		.setValue('input[name="address"]','310 S 4th St-UNIT 46, Phoenix, AZ 85004')
		.pause(2000)
		.waitForElementVisible('button[class="btn btn-primary locate-property-btn"]',50000)
		.click('button[class="btn btn-primary locate-property-btn"]')
		.waitForElementVisible('button[class="btn btn-primary col-sm-6 col-sm-offset-3"]',50000)
		.pause(5000)
		.click('button[class="btn btn-primary col-sm-6 col-sm-offset-3"]')

		//Listing Package
		//.waitForElementVisible('a[class="btn2 primary-btn btn btn-primary m-15"]',100000)
		.pause(5000)
		.click('a[class="btn2 primary-btn btn btn-primary m-15"]')

		//Seller Info
		.waitForElementVisible('button[data-elm-id="btnOwner"]',10000)
		.click('button[data-elm-id="btnOwner"]')
		.click('button[data-elm-id="btnHaveAgentNo"]')
		.click('button[class="btn btn-primary btn-lg btn-block ng-binding"]')

		//Property Info
		.waitForElementVisible('select[data-elm-id="propertyType"]',50000)
		.click('select[data-elm-id="propertyType"]')
		.waitForElementVisible('option[value="string:Single Family-Attached"]',10000)
		.click('option[value="string:Single Family-Attached"]')
		.click('select[data-elm-id="beds"]')
		.waitForElementVisible('option[value="number:1"]',10000)
		.click('option[value="number:1"]')
		.setValue('select[data-elm-id="completeBathrooms"]',2)
		.waitForElementVisible('button[data-elm-id="btnSave"]', 20000)
		.click('button[data-elm-id="btnSave"]')

		//Amenities
		.waitForElementVisible('select[data-elm-id="storiesNum"]',20000)
		.waitForElementVisible('button[data-elm-id="btnSave"]', 20000)
		.click('button[data-elm-id="btnSave"]')

		//Description
		.waitForElementVisible('textarea[id="mlsComments"]',20000)
		.waitForElementVisible('button[data-elm-id="btnSave"]', 20000)
		.click('button[data-elm-id="btnSave"]')

		//Listing Terms
		.waitForElementVisible('input[ng-model="termsCtrl.model.listPriceInCents"]',10000)
		.setValue('input[ng-model="termsCtrl.model.listPriceInCents"]', 100000)
		.click('button[data-elm-id="btnSave"]')
		
		//Upload Photos
		.pause(2000)
		//.waitForElementVisible('', 5000)
		.setValue('input[type="file"]', require('path').resolve('./home.jpg'))
		.waitForElementVisible('button[data-elm-id="btnAssignPhotos"]', 50000)
		.click('button[data-elm-id="btnAssignPhotos"]')
		.pause(10000)
		//.waitForElementVisible('div[class="img-content"]', 20000)
		.click('div[class="img-content"]')
		.click('button[data-elm-id="btnTakeAction"]')
		.pause(5000)
		//.waitForElementVisible('button[data-elm-id="btnSaveAndPreview"]', 9000)
		.click('button[data-elm-id="btnSaveAndPreview"]')
		.pause(15000)
		//.waitForElementVisible('button[data-elm-id="btnActivateListingXs"]', 50000)
		.click('button[data-elm-id="btnActivateListingXs"]')
		.pause(10000)
		//.waitForElementVisible('button[data-elm-id="btnAgreeContinue"]', 6000)
		.click('button[data-elm-id="btnAgreeContinue"]')
		.pause(5000)
		.assert.containsText('div[ng-if="activityDashboard.homesListedData.length > 0"]', '310 S 4th St 46 Phoenix AZ 85004')
		//.waitForElementVisible()
		//.click('span[]')
	}
};