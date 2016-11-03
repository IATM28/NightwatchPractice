var address = require('./address.js');
var login = require('./login.js');

module.exports = {


    'Step 0: Look For valid Addresss': function(browser) {

        address.Address(browser, 'ce');
    },


    'Step 1: CE Login': function(browser) {
        login.ceLogin(browser);
    },


    'Step 2: Select option to create New listing': function(browser) {

        var data = browser.globals.variables;
        var num = 1;
        var option = 'Create_Listing';
        var step = "2.- ";
        var path = data.pathce + step + option;
        var dir;

        browser
            .click('a[data-elm-id="lnkCasAdministration"]')
            .waitForElementVisible('li[cas-only="cas-only"].open ul[role="menu"]', 20000)
            .assert.containsText('li[cas-only="cas-only"].open ul[role="menu"]', 'Files')
            .click('a[data-elm-id="lnkCasNewPropertyFile"]')
            .waitForElementVisible('div[uib-collapse="transactionCharacteristicsForm"]', 10000)
            .assert.containsText('body', 'New Property File')
            .saveScreenshot(path + data.ext)
            .pause(1000)
    },


    'Step 3: Fill listing information': function(browser) {

        var data = browser.globals.variables;
        var num = 1;
        var option = 'Fill_ListingInfo';
        var step = "3.- ";
        var path = data.pathce + step + option;

        browser
            .click('select#client')
            .waitForElementPresent('option[value="string:37521344-ab3f-49c5-8738-e4000b88f2d6"]', 35000)
            .click('option[value="string:37521344-ab3f-49c5-8738-e4000b88f2d6"]')
            .click('select#productType')
            .waitForElementPresent('option[value="string:traditionalListing"]', 30000)
            .click('option[value="string:traditionalListing"]')
            .setValue('input#line1', data.address)
            .setValue('input#zipCode', data.zip)
            .saveScreenshot(path + data.ext)
            .pause(3000)
    },


    'Step 4: Listing': function(browser) {

        var data = browser.globals.variables;
        var num = 1;
        var option = 'Listing';
        var step = "4.- ";
        var path = data.pathce + step + option;


        browser
            .click('button[data-elm-id="btnCreate"]')
            .waitForElementVisible('div[ng-class="getClass(notification.status)"]', 20000)
        browser.expect.element('div[ng-class="getClass(notification.status)"]').to.not.be.present.before(20000)
        browser
            .saveScreenshot(path + num + data.ext)
            browser.expect.element('div[ng-class="' + "{'panel-heading-collapsed':fileHeader" + '}"]').text.to.contain(data.address)
        browser
            .click('a[data-elm-id="lnkCasDashboard"]')
            .waitForElementVisible('a[ui-sref="page.auctioneer-dashboard"]', 20000)
            .pause(2000)
        browser.expect.element('.list-group').text.to.contain(data.address)
        browser
            .saveScreenshot(path + (num += 1) + data.ext)
            .end()

    }

};