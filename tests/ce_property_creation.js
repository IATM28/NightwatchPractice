module.exports = {
  'Create a property via CE' : function (browser) {
    browser
      .url('https://cedev.channelauction.com')
      .waitForElementVisible('body', 50000)
      .setValue('input[ng-model="loginCtrl.logonName"]', 'jose')
      .setValue('input[ng-model="loginCtrl.password"]', 'jose')
      .click('button[data-elm-id="btnLogin"]')
      .waitForElementVisible('li[class="btn-group dropdown"]', 30000)
      .click('a[data-elm-id="lnkCasAdministration"]')
      .click('a[data-elm-id="lnkCasNewPropertyFile"]')
      .waitForElementVisible('#client option', 30000)
      .click('select[name="client"]') 
	  .pause(30000)
	  .click('option[value="string:7fadd157-3455-4c2f-af14-2705f7dafcef"]') //selects the option but doesn't click
	  .setValue('select[ng-model="model.transactionCharacteristics.productType"]', 'Traditional Listing')
	  .setValue('input[ng-model="model.propertyAddress.line1"]', '1539 West Polk Street')
	  .setValue('input[ng-model="model.propertyAddress.zipCode" ]', '85007')
	  .setValue('input[ng-model="model.propertyAddress.city"]', 'Phoenix')
	  .setValue('input[ng-model="model.propertyAddress.county"]', 'Maricopa County')
	  .setValue('select[ng-model="model.propertyAddress.state"]', 'Arizona')
	  .waitForElementVisible('div[class="col-xs-12"]', 30000)
	  .click('button[data-elm-id="btnCreate"]') 
	  .waitForElementVisible('div[class="panel-heading clearfix pb0"]', 50000).assert.containsText('div[class="panel-heading clearfix pb0"]', '1539 West Polk Street, Phoenix, AZ 85007')
  }
};