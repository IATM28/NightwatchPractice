 module.exports = {
'clicking login de' : function (browser) {
    browser
      .maximizeWindow()
      .url('https://dedev.channelauction.com/homes')
      .waitForElementVisible('body', 100000)
      .useXpath()
      .waitForElementVisible('//*[@id="main-navbar"]/nav[2]/div/ul[1]/li[1]/a', 500000)
      //clicking on login button
      .click('//*[@id="main-navbar"]/nav[2]/div/ul[1]/li[1]/a')
  },

  'loging in' : function (browser){
  	browser
      .useCss()
      .waitForElementVisible('body', 20000)
      //filling email
      .waitForElementVisible('input[data-elm-id="userEmail"]', 50000)
  	  .setValue('input[data-elm-id="userEmail"]', 'gabobuyer9@mahisoft.com')
      .waitForElementVisible('input[data-elm-id="userPassword"]', 20000)
      .setValue('input[data-elm-id="userPassword"', '123456')
      //clicking login
      .click('button[data-elm-id="btnLogin"]')
      .pause(1000)
      
  },
  
  'list a home' : function (browser){
    browser
      .useXpath()
      .waitForElementVisible('/html/body/div[2]/div/div', 500000)
      //clicking sell a home on top nav bar
      .click('//*[@id="main-navbar"]/nav[2]/div/ul[2]/li[2]/a')
      .waitForElementVisible('//*[@id="main-navbar"]/nav[2]/div/ul[2]/li[2]/ul/li[1]/a', 20000)
      //clicking  list a home option on dropdown
      .click('//*[@id="main-navbar"]/nav[2]/div/ul[2]/li[2]/ul/li[1]/a')
      .waitForElementVisible('/html/body/div[2]/div', 500000)
      .useCss()
      //filling address
      .waitForElementVisible('input[name="address"', 500000)
      .setValue('input[name="address"', '71 S Lamar St Lakewood CO 80226')
      .pause(5000)
      .waitForElementVisible('button[ng-click="locatePropCtrl.createProperty()"]', 500000)
      .click('a[class="ng-binding ng-scope"]')
      .keys('\uE006')
      .pause(5000)
      .click('button[ng-click="locatePropCtrl.createProperty()"]')
      .pause(2000)
      .verify.containsText('div[class="modal-header"]', 'Address Verification')
      .click('button[type="submit"]')
      
      

  },
  'sj_listing_package' : function (browser){
    browser
      //select to start SJ
      .waitForElementVisible('body', 500000)
      .waitForElementVisible('a[ng-click="listingPackageCtrl.getStarted()"]', 500000)
      .click('a[ng-click="listingPackageCtrl.getStarted()"]')
         
  },
  'sj_seller_info' : function (browser){
    browser
      //selecting seller without agent as selling options
      .waitForElementVisible('body', 500000)
      .waitForElementVisible('button[ng-click="declCtrl.setUserIsAgent(false)"]', 500000)
      .click('button[ng-click="declCtrl.setUserIsAgent(false)"]')
      .pause(2000)
      .waitForElementVisible('button[ng-click="declCtrl.setOwnerHasAgent(false)"]', 500000)
      .click('button[ng-click="declCtrl.setOwnerHasAgent(false)"]')
      .pause(2000)
      .click('button[data-elm-id="btnSave"]')
  },

  'sj_property_info' : function (browser){
    browser
      .waitForElementVisible('body', 500000)
      //select property type
      .waitForElementVisible('select[id="propertyType"]', 500000)
      .click('select[id="propertyType"]')
      .pause(1000)
      .waitForElementVisible('option[label="Single Family-Attached"]', 500000)
      .click('option[label="Single Family-Attached"]')
      //select beds
      .waitForElementVisible('select[id="beds"]', 500000)
      .click('select[id="beds"]')
      .pause(1000)
      .waitForElementVisible('option[label="4"]', 500000)
      .click('option[label="4"]')
      .pause(1000)
      //select total baths
      //.waitForElementVisible('select[id="completeBathrooms"]', 500000)
      //.click('select[id="completeBathrooms"]')
      //.pause(1000)
      //.waitForElementVisible('#completeBathrooms[option:nth-child(4)]', 500000)
      //.click('option[label="3"]')
      .clearValue('select[data-elm-id="completeBathrooms"]')
      .setValue('select[data-elm-id="completeBathrooms"]', '2')
      .pause(1000)
      //set square footage
      .clearValue('input[id="squareFootage"]')
      .waitForElementVisible('input[id="squareFootage"]', 500000)
      .setValue('input[id="squareFootage"]', '3000')
      //set lot size
      .clearValue('input[id="lotSizeSqft"]')
      .waitForElementVisible('input[id="lotSizeSqft"]', 500000)
      .setValue('input[id="lotSizeSqft"]', '5000')
      //set year built
      .clearValue('input[id="yearBuilt"]')
      .waitForElementVisible('input[id="yearBuilt"]', 500000)
      .setValue('input[id="yearBuilt"]', '2000')  
      .click('button[data-elm-id="btnSave"]')
  },

  'sj_amenities' : function (browser){
    browser
      .waitForElementVisible('body', 500000)
      //select # of stories
      .waitForElementVisible('select[id="storiesNum"]', 500000)
      .click('select[id="storiesNum"]')
      .click('option[label="2"')
      .pause(1000)
      .click('button[data-elm-id="btnSave"]')
  },
  'sj_description' : function (browser){
    browser
      .waitForElementVisible('body', 500000)
      //filling descrption
      .waitForElementVisible('textarea[id="mlsComments"]', 500000)
      .setValue('textarea[id="mlsComments"]', 'buy my house please! random comments')
      .pause(1000)
      //random comment 1
      .setValue('input[id="description0"]', "it's pretty!")
      //random comment 2
      .setValue('input[id="description1"]', "it's very pretty!")
      //random comment 3
      .setValue('input[id="description2"]', "it's cozy")
      //random comment 4
      .setValue('input[id="description3"]', "it has a nice view!")
      //random comment 5
      .setValue('input[id="description4"]', "again it's very pretty!")
      .pause(1000)
      .click('button[data-elm-id="btnSave"]')
  },
  'sj_listing_terms' : function (browser){
    browser
      .waitForElementVisible('body', 500000)
      //filling listing price
      .waitForElementVisible('input[id="listPrice"]', 500000)
      .setValue('input[id="listPrice"]', '350000')
      .pause(1000)
      .click('button[data-elm-id="btnSave"]')
  },
  'sj_photos' : function (browser){
    browser
      .waitForElementVisible('body', 50000)
      .waitForElementVisible('div[class="drop-border"', 50000)
      //upload photo
      //.useXpath()
      //.waitForElementVisible('//*[@id="upload"]', 5000)
      .setValue('input[type="file"]', require('path').resolve('././gabo_test_house.jpg'))
      //.useCss()
      //.setValue('input#upload', __dirname + 'gabo_test_house.jpg')
      .waitForElementVisible('button[data-elm-id="btnDeletePhotos"', 50000)
      .pause(5000)
      .click('button[data-elm-id="btnAssignPhotos"]')
      .pause(5000)
      .click('div[class="img-content"]')
      .pause(5000)
      .click('button[data-elm-id="btnTakeAction"]')
      .pause(5000)
      .click('div[class="btr bt-star icon"]')
      .click('button[data-elm-id="btnSaveAndPreview"]')
      .pause(5000)
  },
  'sj_preview' : function (browser){
    browser
      .waitForElementVisible('body', 500000)
      //filling listing price
      .waitForElementVisible('button[data-elm-id="btnActivateListingXs"]', 500000)
      .click('button[data-elm-id="btnActivateListingXs"]')
      .pause(1000)
    
  },
  'sj_activate_listing' : function (browser){
    browser
      .waitForElementVisible('body', 500000)
      //filling listing price
      .waitForElementVisible('button[data-elm-id="btnAgreeContinue"]', 500000)
      .click('button[data-elm-id="btnAgreeContinue"]')
      .pause(1000)
      //.assert.containsText('ng-class="config.title")
      .end()
  },

  
};