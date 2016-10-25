  module.exports = {
  'login ce' : function (browser) {
    browser
      .maximizeWindow()
      //open ce url
      .url('https://cedev.channelauction.com/login')
      .waitForElementVisible('input[ng-model="loginCtrl.logonName"]', 100000)
      //login with jose/ jose
      .setValue('input[ng-model="loginCtrl.logonName"]', 'jose')
      .setValue('input[ng-model="loginCtrl.password"]', 'jose')
      .click('button[data-elm-id="btnLogin"]')
      .waitForElementVisible('body', 100000)
  },

  'choose create a file' : function (browser){
  	browser
      //click on administration
      .waitForElementVisible('body', 20000)
      .waitForElementVisible('a[data-elm-id="lnkCasAdministration"]', 50000)
  	  .click('a[data-elm-id="lnkCasAdministration"]')
      //click on create a file
      .waitForElementVisible('a[data-elm-id="lnkCasNewPropertyFile"]', 20000)
      .click('a[data-elm-id="lnkCasNewPropertyFile"]')
      .waitForElementVisible('body', 20000)
  },
  
  'fill transaction characteristics' : function (browser){
    browser
      //choose client id and product type
      .waitForElementVisible('select[id="client"]', 500000)
      .click('select[id="client"]')
      .waitForElementVisible('option[value="string:c10e801f-a17c-475c-bf79-709aff55de48"]', 20000)
      .click('option[value="string:c10e801f-a17c-475c-bf79-709aff55de48"]')
      .assert.containsText('select[data-elm-id="client"]', "10195")
      .click('select[id="productType"]')
      .waitForElementVisible('select[id="productType"]', 200000)
      .click('option[value="string:traditionalListing"]')    
  },
  'fill address' : function (browser){
    browser
      //filling address line 1
      .waitForElementVisible('input[data-elm-id="line1"]', 200000)
      .setValue('input[data-elm-id="line1"]', '125 Test st')
      .pause(1000)
      //filling zip code
      .waitForElementVisible('input[data-elm-id="zipCode"]', 200000)
      .setValue('input[data-elm-id="zipCode"]', '80007')
      .pause(1000)
  },
  'create and check' : function (browser){
    browser
      .pause(5000)
      //click create
      .waitForElementVisible('button[data-elm-id="btnCreate"]', 200000)
      .click('button[data-elm-id="btnCreate"]')
      .pause(2000)
      //check for publish button
      .waitForElementVisible('select[ng-model="page.dataScreen"]',50000)
      .pause(3000) 
      .end()
        
  }
  
};
