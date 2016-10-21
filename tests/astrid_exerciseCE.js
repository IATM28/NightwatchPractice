module.exports = {
    'Step 1: CE Login' : function (browser){
        browser
            .url('https://cedev.channelauction.com/login') 
            .waitForElementVisible('body', 1000)
            .setValue('input[ng-model="loginCtrl.logonName"]', 'jose')
            .setValue('input[ng-model="loginCtrl.password"]', 'jose')
            .click('button[data-elm-id="btnLogin"]')
            .waitForElementVisible('body', 1000);
    },
    
    'Step 2: Browse to new property file' : function (browser){
        browser
            .waitForElementVisible('a[data-elm-id="lnkCasAdministration"]',2000)
            .click('a[data-elm-id="lnkCasAdministration"]')
            .waitForElementVisible('a[data-elm-id="lnkCasNewPropertyFile"]',2000)
            .click('a[data-elm-id="lnkCasNewPropertyFile"]')
            .waitForElementVisible('select[data-elm-id="client"]',2000);
    },
    
    'Step 3: Basic info and create property' : function (browser){
        browser
            .waitForElementVisible('option[value="string:8bd47bce-72a1-4f0f-ae1b-796ed6992e84"]', 2000)
            .setValue('select[data-elm-id="client"]', 'string:8bd47bce-72a1-4f0f-ae1b-796ed6992e84')
            .waitForElementVisible('option[value="string:traditionalListing"]', 2000)
            .setValue('select[data-elm-id="productType"]', 'string:traditionalListing')
            .setValue('input[data-elm-id="line1"]', '1133 Fairways')
            .setValue('input[data-elm-id="zipCode"]', '37087')
            .waitForElementVisible('option[value="string:Condominium"]', 2000)
            .setValue('select[data-elm-id="propertyType"]', 'string:Condominium')
            .waitForElementVisible('button[data-elm-id="btnCreate"]', 2000)
            .click('button[data-elm-id="btnCreate"]')
            .pause(5000)
    },
    
    'Step 4: Setting basic event information and publish' : function (browser){
        browser
            .waitForElementVisible('li[heading="Marketing Controls"]', 2000)
            .click('li[heading="Marketing Controls"]')
    }
};


