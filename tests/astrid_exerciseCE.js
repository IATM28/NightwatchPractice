module.exports = {
    'Step 1: CE Login' : function (browser){
        browser
            .url('https://cedev.channelauction.com/login') 
            .waitForElementVisible('body', 3000)
            .setValue('input[ng-model="loginCtrl.logonName"]', 'jose')
            .setValue('input[ng-model="loginCtrl.password"]', 'jose')
            .click('button[data-elm-id="btnLogin"]');
    },
    
    'Step 2: Browse to new property file' : function (browser){
        browser
            .waitForElementVisible('a[data-elm-id="lnkCasAdministration"]', 20000)
            .click('a[data-elm-id="lnkCasAdministration"]')
            .waitForElementVisible('a[data-elm-id="lnkCasNewPropertyFile"]', 2000)
            .click('a[data-elm-id="lnkCasNewPropertyFile"]')
            .waitForElementVisible('select[data-elm-id="client"]',2000);
    },
    
    'Step 3: Basic info and create property' : function (browser){
        browser
            .waitForElementVisible('option[value="string:7fadd157-3455-4c2f-af14-2705f7dafcef"]', 10000)
            .click('select.form-control option[value="string:7fadd157-3455-4c2f-af14-2705f7dafcef"]')
            .waitForElementVisible('option[value="string:traditionalListing"]', 2000)
            .click('select.form-control option[value="string:traditionalListing"]')
            .setValue('input[data-elm-id="line1"]', '1133 Fairways')
            .setValue('input[data-elm-id="zipCode"]', '37087')
            .waitForElementVisible('option[value="string:Condominium"]', 2000)
            .setValue('select[data-elm-id="propertyType"]', 'string:Condominium')
            .pause(2000)
            .waitForElementVisible('button[data-elm-id="btnCreate"]', 2000)
            .click('button[data-elm-id="btnCreate"]')
            .waitForElementVisible('li[heading="Marketing Controls"]', 5000);
    },
    
    'Step 4: Verify property creation' : function (browser){
        browser
            .waitForElementVisible('h4.pull-left.mt-sm', 2000)
            .getText('h4.pull-left.mt-sm', function(result) {
                var propertyName = result.value;
                this.waitForElementVisible('a[data-elm-id="lnkCasFiles"]', 3000)
                    .click('a[data-elm-id="lnkCasFiles"]')
                    .waitForElementVisible('input[data-elm-id="searchAddress"]', 3000)
                    .setValue('input[data-elm-id="searchAddress"]', propertyName)
                    .pause(1000)
                    .waitForElementVisible('div.glbl-no-wrap', 3000)
                    .assert.containsText('div.glbl-no-wrap', propertyName)
                    .end();
            });
    }
};

/*
 * This is a possible step 4, still not fully functional
    'Step 4: Setting basic event information and publish' : function (browser){
        browser
            .waitForElementVisible('li[heading="Marketing Controls"]', 5000)
            .click('li[heading="Marketing Controls"]')
            .waitForElementNotPresent('div[ng-class="getClass(notification.status)"]', 5000)
  //        .waitForElementNotPresent('div.tab-content.glbl-tab-content', 5000)
            .waitForElementVisible('button[data-elm-id="btnAddNewEvent"]', 2000)
            .execute(function(selector) {
              document.querySelector(selector).click();
           }, ['button[data-elm-id="btnAddNewEvent"]'])
  //        .click('button[data-elm-id="btnAddNewEvent"]')
            .waitForElementVisible('input[name=listingType]', 5000)
            .click('input[name=listingType]')
            .waitForElementVisible('input[name=listingListingType]', 5000)
            .click('input[name=listingListingType]')
    }
};

*/
