 module.exports = {
'clicking login de' : function (browser) {
    browser
      .url('https://dedev.channelauction.com/homes')
      .waitForElementVisible('body', 100000)
      .useXpath()
      .waitForElementVisible('a[ng-href="login?redirectUrl=/homes/"]', 500000)
      //clicking on login button
      .click('a[ng-href="login?redirectUrl=/homes/"]')
  },

  'loging in' : function (browser){
  	browser
      .waitForElementVisible('body', 20000)
      //filling email
      .waitForElementVisible('input[data-elm-id="userEmail"]', 50000)
  	  .setValue('input[data-elm-id="userEmail"]', 'gabobuyer9@mahisoft.com')
  	  //filling password
      .waitForElementVisible('input[data-elm-id="userPassword"]', 20000)
      .setValue('input[data-elm-id="userEmail"]', '123456')
      //clicking login
      .click('data-elm-id="btnLogin"')
      
  },
  
  'list a home' : function (browser){
    browser
      .waitForElementVisible('body', 500000)
      //clicking sell a home on top nav bar
      .click('a[class= "dropdown tittle"]')
      .waitForElementVisible('a[ui-sref="locate-property"]', 20000)
      //clicking  list a home option on dropdown
      .click('a[ui-sref="locate-property"]')
      .waitForElementVisible('body', 500000)
      //filling address
      .setValue('input[ng-model="locatePropCtrl.model.address"', address)
      .click('li[id="typeahead-459-3439-option-0"]')
      pause(2000)
      .click('button[ng-click="locatePropCtrl.createProperty()"]')
      pause(2000)
      

  },
  'sj_listing_package' : function (browser){
    browser
      .waitForElementVisible('body', 500000)
      .waitForElementVisible('a[ng-click="listingPackageCtrl.getStarted()"]', 500000)
      .click('a[ng-click="listingPackageCtrl.getStarted()"]')
         
  },
  'sj_seller_info' : function (browser){
    browser
      .waitForElementVisible('body', 500000)
      .waitForElementVisible('button[ng-click="declCtrl.setUserIsAgent(false)"]', 500000)
      .click('button[ng-click="declCtrl.setUserIsAgent(false)"]')
      pause(2000)
      .waitForElementVisible('button[ng-click="declCtrl.setOwnerHasAgent(false)"]', 500000)
      .click('button[ng-click="declCtrl.setOwnerHasAgent(false)"]')
      pause(2000)
      .click('button[data-elm-id="btnSave"]')
  }
  
};