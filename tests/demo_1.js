/*module.exports = {
  'step one' : function (browser) {
    browser
      /*.url('https://cedev.channelauction.com')
      .waitForElementVisible('body', 1000)
      .setValue('input[ng-model="loginCtrl.logonName"]', 'jose')
      .setValue('input[ng-model="loginCtrl.password"]', 'jose')
      .click('button[data-elm-id="btnLogin"]')
      .waitForElementVisible('body', 1000)*/
      
      /*
      .url('http://www.fakeaddressgenerator.com/World_Address/get_us_address/city/Phoenix')
   //.useXpath()
    .waitForElementVisible('input[type="text"]', 50000)
    .getValue('input[type="text"]', function(result) {
            // Assign the value of the result inside your callback function
            // For this test, we're assuming the text of @element is 'bar'
            line1 = result;
            console.log('shit', line1)
        })
    .getText('input[type="text"]', function(result) {
            // Assign the value of the result inside your callback function
            // For this test, we're assuming the text of @element is 'bar'
            zipCode = result.value;
            console.log(zipCode)
       })
  }
};*/

module.exports = {
  'step one' : function (browser) {
    browser
      .url('https://cedev.channelauction.com')
      .waitForElementVisible('body', 10000)
      .setValue('input[ng-model="loginCtrl.logonName"]', 'jose')
      .setValue('input[ng-model="loginCtrl.password"]', 'jose')
      .click('button[data-elm-id="btnLogin"]')
      .waitForElementVisible('body', 10000)
   .waitForElementVisible('a[data-elm-id="lnkCasAdministration"]', 120000)
   .click('a[data-elm-id="lnkCasAdministration"]')
   .waitForElementVisible('a[data-elm-id="lnkCasAdministration"]', 1000)
   .click('a[data-elm-id="lnkCasNewPropertyFile"]')
   
   //select client name
   .waitForElementVisible('select[id="client"]', 240000)
   .click('select[id="client"]')
   .waitForElementVisible('option[value="string:7fadd157-3455-4c2f-af14-2705f7dafcef"]', 240000)
   .click('option[value="string:7fadd157-3455-4c2f-af14-2705f7dafcef"]')
   
    //select product type
   .click('select[id="productType"]')
   .waitForElementVisible('option[value="string:traditionalListing"]', 120000)
   .click('option[value="string:traditionalListing"]')
   
   //Input Address
   .setValue('input[ng-model="model.propertyAddress.line1"]', '365 N Jefferson st')
   .setValue('input[ng-model="model.propertyAddress.zipCode"]', '60661')
   //.assert.containsText('input[ng-model="model.propertyAddress.city"]',"")
   //.assert.containsText('input[ng-model="model.propertyAddress.county"]',"")
   //.assert.containsText('select[id="state"]',"")
   //.waitForElementVisible('button[class="btn btn-primary btn-lg pull-right"]', 30000000)
    //.assert.elementPresent('button[data-elm-id="btnCreate"]')
   .click('button[data-elm-id="btnCreate"')
   //assert.elementPresent('button[data-elm-id="btnSaveAll"]')
   //.waitForElementVisible('div[class="panel-heading clearfix pb0"]', 500000).assert.containsText('div[class="panel-heading clearfix pb0"]', '365 N Jefferson st')
   
  }
};