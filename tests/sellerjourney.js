module.exports = {
  'Create Property on DE' : function (browser) {
	  //Start Session
	  browser.url('https://dedev.channelauction.com/homes/login?redirectUrl=%2Fhomes%2F')
      //browser.url('https://dedev.channelauction.com/homes/')
      //browser.waitForElementVisible('body',1000)
	  //browser.waitForElementPresent('a[ng-href="login?redirectUrl=/homes/"]',10000)
	  //browser.click('a[ng-href="login?redirectUrl=/homes/"]')
      
	  browser.maximizeWindow()
	  browser.waitForElementVisible('body',1000)
	  browser.pause(120000)
	  browser.waitForElementPresent('input[data-elm-id="userEmail"]',100000)
	  browser.waitForElementPresent('input[data-elm-id="userPassword"]',100000)
	  browser.waitForElementPresent('button[data-elm-id="btnLogin"]',100000)
	  browser.assert.elementPresent('input[data-elm-id="userEmail"]')
	  browser.assert.elementPresent('input[data-elm-id="userPassword"]')
	  browser.assert.elementPresent('button[data-elm-id="btnLogin"]')
	  browser.assert.containsText('h1',"Log In")
	  browser.setValue('input[data-elm-id="userEmail"]', 'jcasique+52@mahisoft.com')
      browser.setValue('input[data-elm-id="userPassword"]', 'jcasique')
      browser.click('button[data-elm-id="btnLogin"]')
      browser.waitForElementVisible('h1[class="ng-binding"]',50000)
	  browser.waitForElementPresent('i[class="btr bt-question-circle"]',50000)
	  
	  
	  /*
	  Aca falta colocar mouse over en la opcion List a Home.
	  */
	  //Start step 0
	  browser.url('https://dedev.channelauction.com/homes/list-a-home/search')
	  browser.waitForElementPresent('input[name="address"]',50000)
	  browser.waitForElementPresent('button[class="btn btn-primary locate-property-btn"]',50000)
	  browser.setValue('input[name="address"]','4860 Retriever Cir, Anchorage, AK 99502')
	  browser.click('button[class="btn btn-primary locate-property-btn"]')
	  browser.pause(50000)
	  browser.keys(['\uE006'])
	  browser.click('button[btn-whirl="btn-whirl"]')
	  browser.waitForElementPresent('input[name="line1"]',50000)
	  browser.waitForElementPresent('input[id="line2"]',50000)
	  browser.waitForElementPresent('input[id="zipCode"]',50000)
	  browser.waitForElementPresent('input[id="county"]',50000)
	  browser.waitForElementPresent('input[id="city"]',50000)
	  browser.waitForElementPresent('select[id="state"]',50000)
	  browser.waitForElementPresent('button[class="btn btn-primary col-sm-6 col-sm-offset-3"]',50000)
	  browser.assert.elementPresent('input[name="line1"]')
	  browser.assert.elementPresent('input[id="line2"]')
	  browser.assert.elementPresent('input[id="zipCode"]')
	  browser.assert.elementPresent('input[id="county"]')
	  browser.assert.elementPresent('input[id="city"]')
	  browser.assert.elementPresent('select[id="state"]')
	  browser.assert.elementPresent('button[class="btn btn-primary col-sm-6 col-sm-offset-3"]')
	  browser.click('button[class="btn btn-primary col-sm-6 col-sm-offset-3"]')
	  //Finish step 0
	  //start step 1
	  browser.pause(100000)
	  browser.waitForElementPresent('a[class="btn2 primary-btn btn btn-primary m-15"]',50000)
	  browser.waitForElementPresent('i[class="bt-check-circle bts ng-scope"]',50000)
	  browser.assert.elementPresent('a[class="btn2 primary-btn btn btn-primary m-15"]')
	  browser.click('a[class="btn2 primary-btn btn btn-primary m-15"]')
	  //Finish step 1
	  //Start step 2
	  browser.waitForElementPresent('div[class="text-center ng-binding"]',50000)
	  browser.waitForElementPresent('button[data-elm-id="btnOwner"]',50000)
	  browser.waitForElementPresent('button[data-elm-id="btnAgent"]',50000)
	  browser.assert.elementPresent('button[data-elm-id="btnOwner"]')
	  browser.assert.elementPresent('button[data-elm-id="btnAgent"]')
	  browser.click('button[data-elm-id="btnOwner"]')
	  browser.click('button[data-elm-id="btnOwner"]')
	  browser.pause(50000)
	  browser.waitForElementPresent('button[class="btn btn-marshmallow-rectangle checked"]',100000)
	  browser.waitForElementPresent('button[data-elm-id="btnHaveAgentYes"]',50000)
	  browser.waitForElementPresent('button[data-elm-id="btnHaveAgentNo"]',50000)
	  browser.click('[data-elm-id="btnHaveAgentNo"]')
	  browser.waitForElementPresent('button[class="btn btn-marshmallow-rectangle checked"]',50000)
	  browser.assert.elementPresent('button[class="btn btn-marshmallow-rectangle checked"]')
	  browser.click('button[data-elm-id="btnSave"]')
	  //Finish step 2 as seller without agent
	  //Start step 3
	  browser.waitForElementPresent('select[data-elm-id="propertyType"]',50000)
	  browser.waitForElementPresent('select[data-elm-id="beds"]',50000)
	  browser.waitForElementPresent('select[data-elm-id="completeBathrooms"]',50000)
	  browser.waitForElementPresent('select[data-elm-id="splitBathrooms"]',50000)
	  browser.waitForElementPresent('input[data-elm-id="squareFootage"]',50000)
	  browser.waitForElementPresent('input[data-elm-id="lotSizeSqft"]',50000)
	  browser.waitForElementPresent('input[id="yearBuilt"]',50000)
	  browser.waitForElementPresent('button[data-elm-id="btnSave"]',50000)
	  browser.click('select[data-elm-id="propertyType"]')
	  browser.click('option[value="string:Single Family-Detached"]')
	  browser.click('select[data-elm-id="beds"]')
	  browser.click('option[value="number:4"]')
	  browser.click('select[data-elm-id="completeBathrooms"]')
	  browser.assert.containsText('select[data-elm-id="completeBathrooms"]',"Choose Below")
	  browser.keys(browser.Keys.DOWN_ARROW)
	  browser.keys(browser.Keys.DOWN_ARROW)
	  browser.keys(browser.Keys.DOWN_ARROW)
	  browser.keys(browser.Keys.DOWN_ARROW)
	  browser.keys(['\uE006'])
	  browser.click('button[data-elm-id="btnSave"]')
	  //Finish step 3
	  //Start step 4
	  browser.waitForElementPresent('p[class="mb-xl"]',50000)
	  browser.waitForElementPresent('select[data-elm-id="storiesNum"]',50000)
	  browser.waitForElementPresent('button[data-elm-id="btnSave"]',50000)
	  browser.assert.containsText('p[class="mb-xl"]',"Here's your chance to make your listing stand out. That fireplace may be unnecessary to you but just what another family is looking for. We've included some basic amenities below, but you can also select other to customize your own.")
	  browser.click('button[data-elm-id="btnSave"]')
	  //Finish step 4 
	  //Start step 5
	  browser.waitForElementPresent('h2[class="mb20"]',50000)
	  browser.waitForElementPresent('h3[class="inline"]',50000)
	  browser.waitForElementPresent('button[data-elm-id="btnSave"]',50000)
	  browser.assert.containsText('h2[class="mb20"]',"Description")
	  browser.assert.containsText('h3[class="inline"]',"5 reasons buyers will")
	  browser.assert.elementPresent('i[class="fa fa-heart heart"]')
	  browser.click('button[data-elm-id="btnSave"]')
	  //Finish step 5
	  //Start step 6
	  browser.pause(10000)
	  browser.waitForElementPresent('h2[class="mb20"]',50000)
	  browser.assert.containsText('h2[class="mb20"]',"Listing Terms")
	  browser.waitForElementPresent('div[class="tooltip-icon inline"]',50000)
	  browser.waitForElementPresent('input[data-elm-id="listPrice"]',50000)
	  browser.waitForElementPresent('p[class="text-justify"]',50000)
	  browser.assert.containsText('p[class="text-justify"]',"Please enter the amount that you or your client would like to get for the home. You can use the Estimated Value from our Valuation Tool as guidance. You can also check out our 5 pricing strategies, as well as the importance of using psychology before listing. Still unsure? Contact our Ten-X Homes Team at (866) 910-8369 or email CustomerSuccess@Ten-X.com")
	  browser.waitForElementPresent('button[data-elm-id="btnSave"]',50000)
	  browser.setValue('[data-elm-id="listPrice"]','100000')
	  browser.click('button[data-elm-id="btnSave"]')
	  //Finish step 6
	  //Start step 7
	  browser.pause(100000)
	  browser.waitForElementPresent('span[class="btn-text"]',50000)
	  browser.assert.elementPresent('input[id="upload"]')
	  browser.setValue('input[type="file"]', require('path').resolve('./casa1.jpg'))
	  browser.pause(50000)
	  browser.waitForElementPresent('button[data-elm-id="btnDeletePhotos"]',50000)
	  browser.waitForElementPresent('div[class="btn-content"]',50000)
	  browser.click('div[class="btn-content"]')
	  browser.waitForElementPresent('button[data-elm-id="btnCancel"]',50000)
	  browser.waitForElementPresent('button[data-elm-id="btnTakeAction"]',50000)
	  browser.click('div[class="img-content"]')
	  browser.pause(50000)
	  browser.click('button[data-elm-id="btnTakeAction"]')
	  browser.waitForElementPresent('div[class="img-overlay"]',50000)
	  browser.click('div[class="btr bt-star icon"]')
	  browser.waitForElementPresent('div[class="tooltip-cover"]',50000)
	  browser.waitForElementPresent('button[data-elm-id="btnSaveAndPreview"]',50000)
	  browser.click('button[data-elm-id="btnSaveAndPreview"]')
	  browser.pause(100000)
	  //Finish step 7
	  browser.pause(50000)
	  //Start Preview
	  browser.pause(5000)
	  browser.waitForElementPresent('button[data-elm-id="btnActivateListingXs"]',10000)
	  browser.waitForElementPresent('button[data-elm-id="btnPreviewListingXs"]',10000)
	  browser.waitForElementPresent('button[class="btn btn-block btn-primary"]',10000)
	  browser.click('button[data-elm-id="btnActivateListingXs"]')
	  //Finish Preview
	  //Start Marketing Controls
	  browser.pause(50000)
	  browser.waitForElementPresent('div[class="marketing-activate-text"]',10000)
	  browser.waitForElementPresent('div[class="marketing-sub-title"]',10000)
	  browser.waitForElementPresent('div[class="marketing-signature ng-binding"]',10000)
	  browser.waitForElementPresent('button[data-elm-id="btnAgreeContinue"]',10000)
	  browser.click('button[data-elm-id="btnAgreeContinue"]')
	  //Finish marketing Controls
	  }
};