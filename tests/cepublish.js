var login = require('./login.js');


module.exports = {

    'Step 1: CE Login': function(browser) {
        login.ceLogin(browser);
    },

    'Step 2: Search Address': function(browser) {

        var data = browser.globals.variables;

        browser
            .waitForElementVisible('a[title="Files"]', 20000)
            .click('a[title="Files"]')
            .pause(3000)
            .waitForElementVisible('div.main-view.ng-scope', 20000)
            .pause(2000)
        browser.expect.element('div.main-view.ng-scope').text.to.contain("Address")
        browser
            .setValue('input[data-elm-id="searchAddress"]', data.address)
            .pause(3000)
            .waitForElementVisible('div.glbl-no-wrap', 10000)
        browser.expect.element('div.glbl-no-wrap').text.to.contain(data.address)
        browser
            .click('div.glbl-no-wrap:nth-of-type(1)')
            .window_handles(function(result) {
                browser.switchWindow(result.value[1])
            })
            .waitForElementVisible('#fileHeader h4.pull-left', 30000)
            .pause(2000)
        browser.expect.element('div[ng-class="' + "{'panel-heading-collapsed':fileHeader" + '}"]').text.to.contain(data.address)


    },


    'Step 3: Create Event': function(browser) {
        var data = browser.globals.variables;

        browser
            .click('ul li:nth-child(7) a.ng-binding')
            .waitForElementVisible('#listingTypes', 15000)
            .pause(2000)
            .click('button[data-elm-id="btnAddNewEvent"]')
            .pause(2000)
        browser.expect.element('button[data-elm-id="btnSave"]').to.be.present.before(15000)
        browser
            .click('label:nth-child(1) input[name="listingType"]')
            .pause(2000)
            .waitForElementVisible('div[ng-show="asset.isListing"] span.mr-lg:nth-of-type(1)', 15000)
            .click('span:nth-child(1) input[name="listingListingType"]')
            .pause(2000)
            .waitForElementVisible('#startDateTraditional', 15000)
            .setValue('#startDateTraditional', data.sdate)
            .setValue('#endDateTraditional', data.edate)
            .pause(2000)
            .click('button[data-elm-id="btnSave"]')
            .waitForElementVisible('div[ng-class="getClass(notification.status)"]', 20000)
    },

    'Step 4: Publish': function(browser) {

        browser.expect.element('div[ng-class="getClass(notification.status)"]').to.not.be.present.before(20000)
        browser
            .click('#fileHeader label.switch.switch-lg span')
            .waitForElementVisible('button[data-elm-id="btnUpdatePublish"', 20000)
            .waitForElementVisible('div.sweet-alert.showSweetAlert.visible  h2', 20000)
            .click('.sa-confirm-button-container button') 
            .click('#publishHistory legend paneltool  a[ng-click="publishHistory = !publishHistory"]') 
            .waitForElementVisible('a[data-elm-id="btnViewOnline"]', 20000)
      }
};