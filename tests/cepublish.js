var dir = '1345 E Coronado Rd';
var login = require('./login.js');


module.exports = {

    'Step 1: CE Login': function(browser) {
        login.ceLogin(browser);
    },


    'Step 2: Search Address': function(browser) {

        var data = browser.globals.variables;
        browser
            .click('a[title="Files"]')
            .pause(3000)
            .waitForElementVisible('div.main-view.ng-scope', 20000)
        browser.expect.element('div.main-view.ng-scope').text.to.contain("Address")
        browser
            .setValue('input[data-elm-id="searchAddress"]', dir)
            .pause(3000)
            .waitForElementVisible('div.glbl-no-wrap', 10000)
        browser.expect.element('div.glbl-no-wrap').text.to.contain(dir)
        browser
            .click('div.glbl-no-wrap:nth-of-type(1)')
            .window_handles(function(result) {
                browser.switchWindow(result.value[1])
            })
            .waitForElementVisible('#fileHeader h4.pull-left', 30000)
            .pause(2000)
            .assert.containsText('#fileHeader h4.pull-left', dir)
            .click('ul li:nth-child(7) a.ng-binding')
            .waitForElementVisible('#listingTypes legend.clearfix', 15000)
            .click('button[data-elm-id="btnAddNewEvent"]')
            .waitForElementVisible('div.pv.mb-lg', 15000)
            .click('button[data-elm-id="btnAddNewEvent"]')                 
            .waitForElementVisible('div.pv.mb-lg label:nth-of-type(1)', 15000)
            .click('label:nth-child(1) input[name="listingType"]')
            .waitForElementVisible('div[ng-show="asset.isListing"] span.mr-lg:nth-of-type(1)', 15000)
            .click('span:nth-child(1) input[name="listingListingType"]')
            .waitForElementVisible('#startDateTraditional', 15000)
            .setValue('#startDateTraditional', data.sdate)
            .setValue('#endDateTraditional', data.edate)
            .pause(5000)
            .click('button[data-elm-id="btnSave"]')
            .waitForElementVisible('div[ng-class="getClass(notification.status)"]', 10000)
            .pause(5000)
            .click('input[ng-model="model.isPublished"]')
            .pause(5000)


    }


};