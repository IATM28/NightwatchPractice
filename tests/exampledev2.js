module.exports = {



    'Step 1: Select List a Home': function(browser) {

        var data = browser.globals.variables;
        var num = 1;
        var option = 'Listinfo';
        var step = "1.- ";
        var path = data.path + step + option;


        browser
            .windowMaximize()
            .url('http://www.fakeaddressgenerator.com/US_Real_Random_Address/index')
            .waitForElementVisible('body', 1000)
            .setValue('input[name="zip"]', data.zip)
            .click('input[type="submit"]')
            .pause(2000)
            .getText('ul li:nth-child(5) p:nth-child(3)', function(result) {
                dir = (JSON.stringify(result.value)).substr(8);
                console.log('result: ' + (JSON.stringify(result.value)).substr(8));
                browser
                    .url('https://deqa.channelauction.com/homes/list-a-home/search')
                    .waitForElementVisible('body', 10000)
                    .assert.containsText('.browse-info-box h1', 'List a Home')
                    .setValue('input[name="address"]', dir)

            })
            .pause(7000)
            .saveScreenshot(path + num + data.ext)
            .click('button[btn-whirl="btn-whirl"]')
            // In case the Address popup is displayed. To be reviewed. change for: verify.isVisible or elementPresent
            .waitForElementVisible('.modal-header h1', 10000, false, function(visible) {
                if (visible) {
                    browser.click('button[ng-click="caCtrl.createAsset()"]')
                }
            })
            .saveScreenshot(path + (num += 1) + data.ext)
            .waitForElementVisible('.main-header', 10000)
            .assert.containsText('.main-header', 'Completed')
            .saveScreenshot(path + (num += 1) + data.ext)
            .click('a[ng-click="listingPackageCtrl.getStarted()"]')
            /*
            //To be reviewed
             .verify.elementPresent('a[ng-click="listingPackageCtrl.getStarted()"]', false, function(visible2) {
                if (visible2) {
                    browser.click('a[ng-click="listingPackageCtrl.getStarted()"]')
                        /// should include go to step 4
                }
            })*/

    },

    'Step 2: Login': function(browser) {

        var data = browser.globals.variables;
        var num = 1;
        var option = 'Login';
        var step = "2.- ";
        var path = data.path + step + option;
        var dir;

        browser
            .waitForElementVisible('label[for="userEmail"]', 5000)
            .assert.containsText('body', 'Log In')
            .saveScreenshot(path + (num += 1) + data.ext)
            .setValue('input[id="userEmail"]', data.user)
            .setValue('input[id="userPassword"]', data.password)
            .click('button[data-elm-id="btnLogin"]')
            .waitForElementVisible('.intro-section', 20000)
            .assert.containsText('.intro-section', 'Seller Info')
            .saveScreenshot(path + (num += 1) + data.ext)
            .pause(4000)
    },

    'Step 3: Fill Seller info': function(browser) {

        var data = browser.globals.variables;
        var num = 1;
        var option = 'Sellerinfo';
        var step = "3.- ";
        var path = data.path + step + option;

        browser
            .click('button[data-elm-id="btnOwner"]')
            .waitForElementVisible('.form-section .section-title', 5000)
            .click('button[data-elm-id="btnHaveAgentNo"]')
            .pause(5000)
            .click('button[data-elm-id="btnSave"]')
            .pause(1000)
            .saveScreenshot(path + (num += 1) + data.ext)
            .waitForElementVisible('.property-info', 10000)
            .assert.containsText('.property-info', 'Property Info')
            .saveScreenshot(path + (num += 1) + data.ext)

    },


    'Step 4: Fill Property info': function(browser) {


        var data = browser.globals.variables;
        var num = 1;
        var option = 'Propertyinfo';
        var step = "5.- ";
        var path = data.path + step + option;

        browser
            .waitForElementVisible('.property-info', 1000)
            // Property Type
            .click('select[name="propertyType"]')
            .assert.containsText('select[name="propertyType"]', 'Townhouse')
            .click('option[value="string:Townhouse"]')
            .pause(2000)
            // Property Beds
            .click('select[id="beds"]')
            .assert.containsText('select[id="beds"]', '3')
            .click('option[value="number:3"]')
            .pause(2000)
            // Property Bathrooms
            .click('select[id="completeBathrooms"]')
            .pause(2000)
            .assert.containsText('select[id="completeBathrooms"]', '2')
            .click('select#completeBathrooms option[value="number:2"]')
            /* //To be reviewed
               .waitForElementVisible('label[for="completeBathrooms"] span.text-danger', 5000, false, function(visible) {
                     if (visible) {
                         browser.click('select[id="completeBathrooms"]')
                         browser.pause(10000)
                         browser.assert.containsText('select[id="completeBathrooms"]', '2')
                         browser.click('option[value="number:2"]')
                     }
                 }) */
            .pause(2000)

            // Property Split Bathrooms
            .click('select[id="splitBathrooms"]')
            .assert.containsText('select[id="splitBathrooms"]', '0')
            .click('select[id="splitBathrooms"] option[value="number:0"]')
            .pause(2000)
            // Property Square Footage
            .setValue('input[id="squareFootage"]', data.sqft)
            // Lot Square Footage
            .setValue('input[id="lotSizeSqft"]', data.lsSqft)
            // Year Built
            .setValue('input[id="yearBuilt"]', data.yearBuilt)
            .saveScreenshot(path + num + data.ext)
            .pause(2000)
            .click('button[data-elm-id="btnSave"]')
            .waitForElementVisible('.amenities', 5000)


    },


    'Step 5: Fill Amenities if they exist': function(browser) {

        var data = browser.globals.variables;
        var num = 1;
        var option = 'Amenities';
        var step = "5.- ";
        var path = data.path + step + option;

        browser
            .assert.containsText('.amenities', 'Amenities')
            .saveScreenshot(path + num + data.ext)
            .pause(3000)
            .click('button[data-elm-id="btnSave"]')
            .waitForElementVisible('.property-description', 10000)
    },


    'Step 6: Fill Property Descriptions': function(browser) {

        var data = browser.globals.variables;
        var num = 1;
        var option = 'Description';
        var step = "6.- ";
        var path = data.path + step + option;

        browser
            .assert.containsText('.property-description', 'Description')
            .saveScreenshot(path + num + data.ext)
            .pause(3000)
            .click('button[data-elm-id="btnSave"]')
            .waitForElementVisible('.listing-terms-page', 10000)

    },

    'Step 7: Fill Listing Terms': function(browser) {

        var data = browser.globals.variables;
        var num = 1;
        var option = 'Listing_Terms';
        var step = "7.- ";
        var path = data.path + step + option;

        browser
            .assert.containsText('.listing-terms-page', 'Listing Terms')
            .saveScreenshot(path + num + data.ext)
            .clearValue('input[id="listPrice"]')
            .setValue('input[id="listPrice"]', data.amount)
            .pause(3000)
            .click('button[data-elm-id="btnSave"]')
            .waitForElementVisible('.intro-section', 10000)

    },


    'Step 8: Add Photos': function(browser) {

        var data = browser.globals.variables;
        var num = 1;
        var option = 'Add_Photos';
        var step = "8.- ";
        var path = data.path + step + option;

        browser
            .assert.containsText('.intro-section', 'Photos')
            .saveScreenshot(path + num + data.ext)
            .setValue('input#upload', (__dirname + data.image))
            .pause(3000)
            .click('button[data-elm-id="btnAssignPhotos"]')
            .waitForElementVisible('.modal-content', 8000)
            .pause(3000)
            .click('div.img-content')
            .pause(3000)
            .click('button[data-elm-id="btnTakeAction"]')
            .waitForElementVisible('div.sn-content.img-content', 15000)
            .pause(5000)
            .saveScreenshot(path + (num += 1) + data.ext)
            .click('button[data-elm-id="btnSaveAndPreview"]')
            .waitForElementVisible('.mb-sm', 3000)
            .waitForElementNotVisible('.mb-sm', 30000 )


    },

    'Step 9: List Home': function(browser) {

        var data = browser.globals.variables;
        var num = 1;
        var option = 'List_Property';
        var step = "9.- ";
        var path = data.path + step + option;

        browser
        //To be reviewed
            .waitForElementVisible('.toast', 30000)
            .assert.containsText('.toast', 'Success')
            .saveScreenshot(path + (num += 1) + data.ext)
            .waitForElementVisible('div[ng-class="previewCtrl.page.buttonBackgroundColor"]', 10000)
            .pause(5000)
            .assert.containsText('div[ng-class="previewCtrl.page.buttonBackgroundColor"]', 'Ready to list?')
            .saveScreenshot(path + (num += 1) + data.ext)
            .click('button[data-elm-id="btnActivateListingXs"]')
            .waitForElementVisible('.signature-line', 5000)
            .pause(5000)
            .click('button[data-elm-id="btnAgreeContinue"]')
            .waitForElementVisible('div[ng-bind-html="toaster.html"]', 5000)
            .assert.containsText('div[ng-bind-html="toaster.html"]', 'Thank you for completing your listing. We will contact you shortly. If you have any questions, please call us at (866) 910-8369.')
    }


};