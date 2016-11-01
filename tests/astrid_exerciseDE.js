var propertyAddress = '5660 W 14th Ave Hialeah FL 33012';
var auth = require('./auth.js');

module.exports = {
  'Step 1: DE Login' : function (browser) {
     auth.deLogin(browser);
  },
      
 'Step 2: Browse to List a Home and search address' : function (browser){
     browser
      .useXpath()
      .waitForElementVisible('//*[@id="main-navbar"]/nav[2]/div/ul[2]/li[2]/a', 5000)
      .click('//*[@id="main-navbar"]/nav[2]/div/ul[2]/li[2]/a')
      .waitForElementVisible('//*[@id="main-navbar"]/nav[2]/div/ul[2]/li[2]/ul/li[1]/a', 5000)
      .click('//*[@id="main-navbar"]/nav[2]/div/ul[2]/li[2]/ul/li[1]/a')
      .useCss()
      .waitForElementVisible('input[name="address"]', 2000)
      .setValue('input[name="address"]', propertyAddress)
      .pause(4000)
      
// TODO: Use option in the RealtyTrack dropdown 
     
      .click('button[class="btn btn-primary locate-property-btn"]')
      .waitForElementVisible('button[class="btn btn-primary col-sm-6 col-sm-offset-3"]', 2000)
      .click('button[class="btn btn-primary col-sm-6 col-sm-offset-3"]');
 },
 
 'Step 3: Go through the SJ steps' : function (browser){
     browser
      .waitForElementVisible('div.hero-card-white a', 5000)
      .click('div.hero-card-white a')
      .waitForElementVisible('button[data-elm-id="btnAgent"]', 5000)
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
      .setValue('input#upload', __dirname + '\\House.jpg')
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
        .waitForElementVisible('h2.address-lg.m0', 5000)
        .verify.containsText('div[ng-if="activityDashboard.homesListedData.length > 0"]', propertyAddress);
 },
 
 'Step 6: Publish property' : function (browser) {
     auth.ceLogin(browser);
     browser
        .pause(4000)
        .waitForElementVisible('a[data-elm-id="lnkCasFiles"]', 2000)
        .click('a[data-elm-id="lnkCasFiles"]')
        .waitForElementVisible('input[data-elm-id="searchAddress"]', 3000)
        .setValue('input[data-elm-id="searchAddress"]', propertyAddress)
        .pause(1000)
        .waitForElementVisible('div.glbl-no-wrap', 3000)
        .click('div.glbl-no-wrap')
        .window_handles(function(result){
            var handle = result.value[1];
            browser.switchWindow(handle);
        })
        .waitForElementVisible('h4.pull-left.mt-sm', 5000)
        .click('label.switch.switch-lg')
        .waitForElementVisible('button.confirm', 2000)
        .click('button.confirm')
        .waitForElementVisible('a[data-elm-id="btnIsPublished"]', 2000)
        .click('a[data-elm-id="btnIsPublished"]')
        .window_handles(function (result){
            var handle = result.value[2];
            browser.switchWindow(handle);
        })
        .waitForElementVisible('div.col-sm-7.col-md-9', 5000)
        .assert.visible('div.col-sm-7.col-md-9')
        .end();
  }
};
