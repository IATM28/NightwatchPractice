var propertyAddress = '5491 W 10th Ct Hialeah FL 33012';

module.exports = {
  'Step 1: Login DE and verify redirection' : function (browser) {
    browser
      .url('https://deqa.channelauction.com/homes/')
      .waitForElementVisible('body', 1000)
      .click('#main-navbar nav div ul.nav.navbar-nav.navbar-right li a.btn.btn-nav-outline')
      .waitForElementVisible('body', 1000)
      .waitForElementVisible('input[name="userEmail"]', 1000)
      .setValue('input[name="userEmail"]', 'astridsellersagent@mahisoft.com')
      .setValue('input[data-elm-id="userPassword"]', '123456')
      .click('button[data-elm-id="btnLogin"]')
      .pause(2000)
      .assert.urlEquals('https://deqa.channelauction.com/homes/dashboard/activity')
  },
      
 'Step 2: Browse to List a Home and search address' : function (browser){
     browser
      .useXpath()
      .click('//*[@id="main-navbar"]/nav[2]/div/ul[2]/li[2]/a')
      .waitForElementVisible('//*[@id="main-navbar"]/nav[2]/div/ul[2]/li[2]/ul/li[1]/a', 2000)
      .click('//*[@id="main-navbar"]/nav[2]/div/ul[2]/li[2]/ul/li[1]/a')
      .useCss()
      .waitForElementVisible('input[name="address"]', 2000)
      .setValue('input[name="address"]', propertyAddress)
      .pause(5000)
      
// TODO: Use option in the RealtyTrack dropdown
     
      .click('button[class="btn btn-primary locate-property-btn"]')
      .waitForElementVisible('button[class="btn btn-primary col-sm-6 col-sm-offset-3"]', 2000)
      .click('button[class="btn btn-primary col-sm-6 col-sm-offset-3"]')
 },
 
 'Step 3: Go through the SJ steps' : function (browser){
     browser
      .waitForElementVisible('div.hero-card-white a', 2000)
      .click('div.hero-card-white a')
      .waitForElementVisible('button[data-elm-id="btnAgent"]', 2000)
      .click('button[data-elm-id="btnAgent"]')
      .setValue('input[data-elm-id="ownerEmail"]', 'astridseller@mahisoft.com')
      .click('button[data-elm-id="btnSave"]')
      .waitForElementVisible('select[data-elm-id="propertyType"]', 2000)
      .waitForElementVisible('select[data-elm-id="beds"]', 2000)
      .waitForElementVisible('select[data-elm-id="completeBathrooms"]', 2000)
      .setValue('select[data-elm-id="propertyType"]', 'string:Single Family-Attached')
      .setValue('select[data-elm-id="beds"]', '2')
      .setValue('select[data-elm-id="completeBathrooms"]', '2')
      .click('button[data-elm-id="btnSave"]')
      .waitForElementVisible('span.fa-stack.pull-right', 2000)
      .click('button[data-elm-id="btnSave"]') 
      .waitForElementVisible('h3.inline', 2000)
      .click('button[data-elm-id="btnSave"]')
      .waitForElementVisible('input[data-elm-id="listPrice"]', 2000)
      .setValue('input[data-elm-id="listPrice"]', '400000')
      .click('button[data-elm-id="btnSave"]')
      .waitForElementVisible('button[data-elm-id="btnUploadPhotosTop"]', 2000)
      .setValue('input[type="file"]', require('path').resolve('C:/Users/Astrid/Documents/NightWatchPractice/tests/House.jpg'))
      .waitForElementVisible('button[data-elm-id="btnDeletePhotos"]', 2000)
      .click('button[data-elm-id="btnAssignPhotos"]')
      .waitForElementVisible('div.img-content', 2000)
      .click('div.img-content')
      .click('button[data-elm-id="btnTakeAction"]')
      .waitForElementPresent('div.action-icon.primary', 2000)
      .click('div.action-icon.primary')
      .waitForElementVisible('button[data-elm-id="btnSaveAndPreview"]', 2000)
      .click('button[data-elm-id="btnSaveAndPreview"]')
      .pause(5000);
 },
 
 'Step 4: Preview property and Marketing Agreement' : function (browser){
     browser
      .waitForElementNotPresent('div.toast.toast-success', 20000)
      .waitForElementVisible('button[data-elm-id="btnActivateListingXs"]', 2000)
      .click('button[data-elm-id="btnActivateListingXs"]')
      .pause(3000)
      .waitForElementVisible('button[data-elm-id="btnAgreeContinue"]', 2000)
      .click('button[data-elm-id="btnAgreeContinue"]')
      .pause(3000)
      .assert.urlEquals('https://deqa.channelauction.com/homes/dashboard/activity');
 },
 
 'Step 5: Verify property creation' : function (browser){
     browser
        .waitForElementVisible('h2.address-lg.m0', 3000)
        .assert.containsText('div[ng-if="activityDashboard.homesListedData.length > 0"]', propertyAddress)
        .end();
  }
};
