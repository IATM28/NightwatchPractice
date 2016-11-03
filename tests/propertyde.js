var address = require('./address.js');
var login = require('./login.js');

module.exports = {


    'Step 0: Look For valid Addresss': function(browser) {

        address.Address(browser, 'de');
    },

    'Step 1: Select List a Home': function(browser) {

        var data = browser.globals.variables;
        var num = 1;
        var option = 'Listinfo_option';
        var step = "1.- ";
        var path = data.pathde + step + option;


        browser
            .windowMaximize()
            .url('https://deqa.channelauction.com/homes/list-a-home/search')
            .waitForElementVisible('body', 10000)
            .assert.containsText('.browse-info-box h1', 'List a Home')
            //.saveScreenshot(path + num + data.ext)
    },


    'Step 2: Fill List information': function(browser) {

        var data = browser.globals.variables;
        var num = 1;
        var option = 'Listinfo';
        var step = "2.- ";
        var path = data.pathde + step + option;


        browser
            .waitForElementVisible('body', 1000)
            .setValue('input[name="address"]', data.address)
            .pause(7000)
            //.saveScreenshot(path + num + data.ext)
            .click('button[btn-whirl="btn-whirl"]')
            .pause(3000)
            // In case the Address popup is displayed. 
            .element('css selector', '.modal-header h1', function(result) {
                if (result.value && result.value.ELEMENT) {
                    browser.click('button[ng-click="caCtrl.createAsset()"]')
                }
            })
            // In case the Zipcode is not valid
            .element('css selector', '.img-responsive', function(result) {
                if (result.value && result.value.ELEMENT) {
                    console.log('Zipcode: ' + data.zip + ' is out of market.');
                    browser.pause()
                    performAsync(function(err) {
                        if (err) {
                            done(err);
                        }

                    })
                }
            })
        browser
        //.saveScreenshot(path + (num += 1) + data.ext)
            .waitForElementVisible('.main-header', 10000, false, function(result) {
            browser
                .assert.containsText('.main-header', 'Completed')
                .waitForElementVisible('.container .listing-package', 10000)
                //.saveScreenshot(path + (num += 1) + data.ext)
                .click('a[ng-click="listingPackageCtrl.getStarted()"]')
        })

    },


    'Step 3: Login': function(browser) {

        login.deLogin(browser, 3);
    },



    'Step 4: Fill Seller info': function(browser) {

        var data = browser.globals.variables;
        var num = 1;
        var option = 'Sellerinfo';
        var step = "4.- ";
        var path = data.pathde + step + option;

        browser

            .click('button[data-elm-id="btnOwner"]')
            .waitForElementVisible('.form-section .section-title', 5000)
            .click('button[data-elm-id="btnHaveAgentNo"]')
            .pause(2000)
            //.saveScreenshot(path + (num += 1) + data.ext)
            //.pause(1000)
            .click('button[data-elm-id="btnSave"]')
            //.pause(1000)
            .waitForElementVisible('.property-info', 10000)
            .assert.containsText('.property-info', 'Property Info')
            //.pause(1000)
            //.saveScreenshot(path + (num += 1) + data.ext)

    },


    'Step 5: Fill Property info': function(browser) {

        var data = browser.globals.variables;
        var num = 1;
        var option = 'Propertyinfo';
        var step = "5.- ";
        var path = data.pathde + step + option;

        browser
        // Property Type
            .click('select[name="propertyType"]')
            .assert.containsText('select[name="propertyType"]', data.propertytype)
            .click('option[value="string:' + data.propertytype + '"]')
            .pause(1000)
            // Property Beds
            .click('select[id="beds"]')
            .assert.containsText('select[id="beds"]', data.beds)
            .click('option[value="number:' + data.beds + '"]')
            .pause(1000)
            // Property Bathrooms
            .click('select[id="completeBathrooms"]')
            .pause(1000)
            .assert.containsText('select[id="completeBathrooms"]', data.baths)
            .click('select#completeBathrooms option[value="number:' + data.baths + '"]')
            .pause(1000)
            // Property Split Bathrooms - Only if it's needed
            /* .click('select[id="splitBathrooms"]')
            .assert.containsText('select[id="splitBathrooms"]', '0')
            .click('select#splitBathrooms" option[value="number:0"]')
            .pause(1000)
            */
            // Property Square Footage
            .setValue('input[id="squareFootage"]', data.sqft)
            // Lot Square Footage
            .setValue('input[id="lotSizeSqft"]', data.lsSqft)
            // Year Built
            .setValue('input[id="yearBuilt"]', data.yearBuilt)
            //.saveScreenshot(path + data.ext)
            //.pause(2000)
            .click('button[data-elm-id="btnSave"]')
            .waitForElementVisible('.amenities', 5000)
    },


    'Step 6: Fill Amenities if they exist': function(browser) {

        var data = browser.globals.variables;
        var num = 1;
        var option = 'Amenities';
        var step = "6.- ";
        var path = data.pathde + step + option;

        browser
        // To be completed
            .assert.containsText('.amenities', 'Amenities')
            //.saveScreenshot(path + num + data.ext)
            //.pause(2000)
            .click('button[data-elm-id="btnSave"]')
            // .pause(2000)
            //.saveScreenshot(path + (num += 1) + data.ext)
            .waitForElementVisible('.property-description', 5000)
    },


    'Step 7: Fill Property Descriptions': function(browser) {

        var data = browser.globals.variables;
        var num = 1;
        var option = 'Description';
        var step = "7.- ";
        var path = data.pathde + step + option;

        browser
        // To be completed
            .assert.containsText('.property-description', 'Description')
            //.saveScreenshot(path + num + data.ext)
            //.pause(3000)
            .click('button[data-elm-id="btnSave"]')
            // .pause(2000)
            //.saveScreenshot(path + (num += 1) + data.ext)
            .waitForElementVisible('.listing-terms-page', 5000)
    },

    'Step 8: Fill Listing Terms': function(browser) {

        var data = browser.globals.variables;
        var num = 1;
        var option = 'Listing_Terms';
        var step = "8.- ";
        var path = data.pathde + step + option;

        browser
        //.saveScreenshot(path + num + data.ext)
            .assert.containsText('.listing-terms-page', 'Listing Terms')
            .clearValue('input[id="listPrice"]')
            .setValue('input[id="listPrice"]', data.amount)
            .pause(1000)
            .click('button[data-elm-id="btnSave"]')
            .pause(1000)
            //.saveScreenshot(path + (num += 1) + data.ext)
            .waitForElementVisible('.intro-section', 10000)

    },


    'Step 9: Add Photos': function(browser) {

        var data = browser.globals.variables;
        var num = 1;
        var option = 'Add_Photos';
        var step = "9.- ";
        var path = data.pathde + step + option;

        browser
            .assert.containsText('.intro-section', 'Photos')
            //.saveScreenshot(path + num + data.ext)
            .setValue('input#upload', __dirname + data.image)
            .pause(3000)
            .click('button[data-elm-id="btnAssignPhotos"]')
            .waitForElementVisible('.modal-content', 10000)
            .pause(3000)
            .click('div.img-content')
            .pause(3000)
            .click('button[data-elm-id="btnTakeAction"]')
            .waitForElementVisible('div.sn-content.img-content', 20000)
            .pause(5000)
            //.saveScreenshot(path + (num += 1) + data.ext)
            .click('button[data-elm-id="btnSaveAndPreview"]')


    },

    'Step 10: List Home': function(browser) {

            var data = browser.globals.variables;
            var num = 1;
            var option = 'List_Property';
            var step = "10.- ";
            var path = data.pathde + step + option;

            browser
                .waitForElementVisible('.toast', 30000)
                //.saveScreenshot(path + num + data.ext)
                .assert.containsText('.toast', 'Success')
            browser.expect.element('.toast').to.not.be.present.before(20000)
            browser
                .waitForElementVisible('button[data-elm-id="btnActivateListingXs"]', 30000)
                //.saveScreenshot(path + (num += 1) + data.ext)
                .assert.containsText('button[data-elm-id="btnActivateListingXs"]', 'Yes, List Home')
                .click('button[data-elm-id="btnActivateListingXs"]')
                .waitForElementVisible('button[data-elm-id="btnAgreeContinue"]', 30000)
                //.pause(3000)
                //.saveScreenshot(path + (num += 1) + data.ext)
                .pause(5000)
                .click('button[data-elm-id="btnAgreeContinue"]')
                .waitForElementVisible('div[ng-bind-html="toaster.html"]', 30000)
            browser.expect.element('div[ng-bind-html="toaster.html"]').text.to.contain('Thank you for completing your listing')
            browser.expect.element('div[ng-bind-html="toaster.html"]').to.not.be.present.before(20000)
                //.pause(2000)
                //.saveScreenshot(path + (num += 1) + data.ext)
                .end();
        }
        /*  // Validation of property on CE
            'Step 11: Check Listing CE': function(browser) {

         //  Call cepublish.js
            }

        */

};