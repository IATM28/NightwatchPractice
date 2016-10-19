  module.exports = {
  'login ce' : function (browser) {
    browser
      .url('https://cedev.channelauction.com/login')
      .waitForElementVisible('input[ng-model="loginCtrl.logonName"]', 100000)
      .setValue('input[ng-model="loginCtrl.logonName"]', 'jose')
      .setValue('input[ng-model="loginCtrl.password"]', 'jose')
      .click('button[data-elm-id="btnLogin"]')
      .waitForElementVisible('body', 100000)
  },

  'choose create a file' : function (browser){
  	browser
      .waitForElementVisible('body', 20000)
      .waitForElementVisible('a[data-elm-id="lnkCasAdministration"]', 50000)
  	  .click('a[data-elm-id="lnkCasAdministration"]')
      .waitForElementVisible('a[data-elm-id="lnkCasNewPropertyFile"]', 20000)
      .click('a[data-elm-id="lnkCasNewPropertyFile"]')
      .waitForElementVisible('body', 20000)
  },
  
  'fill transaction characteristics' : function (browser){
    browser
      //.url('https://cedev.channelauction.com/#/app/cas/property-file/new')
      .waitForElementVisible('select[id="client"]', 500000)
      .click('select[id="client"]')
      .waitForElementVisible('option[value="string:c10e801f-a17c-475c-bf79-709aff55de48"]', 20000)
      .click('option[value="string:c10e801f-a17c-475c-bf79-709aff55de48"]')
      .assert.containsText('select[data-elm-id="client"]', "10195")
      .click('select[id="productType"]')
      .waitForElementVisible('select[id="productType"]', 200000)
      .click('option[value="string:traditionalListing"]')    
  },
  /*'fill address' : function (browser){
    browser
      .setValue('input[data-elm-id="line1"]', 'addressline1')
      .setValue('input[data-elm-id="zipCode"]', 'zipCode')    
  },*/
  'create and check' : function (browser){
    browser
      .click('button[data-elm-id="btnCreate"]')
        
  }
  
};
