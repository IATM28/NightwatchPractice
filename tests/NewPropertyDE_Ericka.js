module.exports = {
  'Create listing' : function (browser) {
    browser

      .url('https://deqa.channelauction.com/homes/login')
      .waitForElementVisible('body', 7000)
      .setValue('input[data-elm-id="userEmail"]', 'astridseller@mahisoft.com')
      .setValue('input[data-elm-id="userPassword"]', '123456')
      .click('button[data-elm-id="btnLogin"]')
      .pause(3000)
      .url('https://deqa.channelauction.com/homes/list-a-home/search')
      .pause(3000)
      //IMPORTANT: You need to change the Address to provide valid results
      .setValue('input[ng-model="locatePropCtrl.model.address"]','5133 N 76th Lane Glendale, AZ 85303')
      .pause(3000)
      .click('button[ng-click="locatePropCtrl.createProperty()"]')
      .pause(13000)
      .click('button[ng-click="caCtrl.createAsset()"]')
      //The listing process starts
      .pause(10000)
      .click('div.hero-card-white a')
      .pause(10000)
      .waitForElementVisible('button[data-elm-id="btnOwner"]', 7000)
      .pause(5000)
      .click('button[data-elm-id="btnOwner"]')
      .waitForElementVisible('button[data-elm-id="btnHaveAgentNo"]', 7000)
      .pause(5000)
      .click('button[data-elm-id="btnHaveAgentNo"]')
      .waitForElementVisible('button[data-elm-id="btnSave"]', 7000)
      .pause(5000)
      .click('button[data-elm-id="btnSave"]')
      .waitForElementVisible('select[data-elm-id="propertyType"]', 7000)
      .pause(5000)
      .click('select.form-control option[value="string:Condominium"]')
      .waitForElementVisible('select[data-elm-id="beds"]', 7000)
      .pause(5000)
      .click('select.form-control option[value="number:2"]')
      .waitForElementVisible('select[data-elm-id="completeBathrooms"]', 7000)
      .click('select.form-control option[value="number:40"]')
      .click('button[data-elm-id="btnSave"]')
      .pause(5000)
      .waitForElementVisible('select[data-elm-id="storiesNum"]', 7000)
      .pause(5000)
      .click('button[data-elm-id="btnSave"]')
      .pause(10000)
      .click('button[data-elm-id="btnSave"]')
      .waitForElementVisible('input[data-elm-id="listPrice"]', 3000)
      .setValue('input[data-elm-id="listPrice"]', '280000')
	.click('button[data-elm-id="btnSave"]')
      .waitForElementVisible('button[data-elm-id="btnUploadPhotosTop"]', 2000)
      //IMPORTANT: This photo is in a local file, you need to change it if you aren't in C:/Testing/NightwatchPractice/tests/
      .setValue('input[type="file"]', require('path').resolve('C:/Testing/NightwatchPractice/tests/HouseForSale.jpg'))
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
 
     'Preview & Marketing' : function (browser){
      browser

      .waitForElementNotPresent('div.toast.toast-success', 30000)
      .waitForElementVisible('button[data-elm-id="btnActivateListingXs"]', 3000)
      .click('button[data-elm-id="btnActivateListingXs"]')
      .pause(3000)
      .waitForElementVisible('button[data-elm-id="btnAgreeContinue"]', 2000)
      .click('button[data-elm-id="btnAgreeContinue"]')
      .pause(3000)
      .assert.urlEquals('https://deqa.channelauction.com/homes/dashboard/activity')
    .end();

      }
}
