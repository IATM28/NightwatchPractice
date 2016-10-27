module.exports = {


    'Step 0: Look For valid Addresss': function(browser) {

        var data = browser.globals.variables;
        var zip = data.zipcodes[Math.floor(Math.random() * (8 + 1))];
        var str;
        var dir;

        browser
            .url('http://www.fakeaddressgenerator.com/US_Real_Random_Address/index')
            .waitForElementVisible('body', 1000)
            .setValue('input[name="zip"]', zip)
            .pause(1000)
            .click('input[type="submit"]')
            .pause(1000)
            .getText('ul li:nth-child(' + Math.floor(Math.random() * (5 + 1) + 1) + ') p:nth-child(3)', function(result) {
                data.zip = zip;
                console.log('Zipcode to Use: ' + data.zip);
                str = (JSON.stringify(result.value));
                dir = str.substring(8, str.indexOf(","));
                data.dir = dir.replace('"', '');
                console.log('Address to use: ' + data.dir);
            })
    },

    'Step 1: Login': function(browser) {

        var data = browser.globals.variables;
        var num = 1;
        var option = 'Login';
        var step = "1.- ";
        var path = data.pathce + step + option;


        browser
            .windowMaximize()
            .url('https://cedev.channelauction.com/login')
            .waitForElementVisible('body', 1000)
            .assert.containsText('body', 'SIGN IN TO CONTINUE.')
            .setValue('input[name="logonName"]', data.userce)
            .setValue('input[name="password"]', data.passwordce)
            .saveScreenshot(path + num + data.ext)
            .click('button[data-elm-id="btnLogin"]')
            .waitForElementVisible('a[data-elm-id="lnkCasAdministration"]', 20000)
        browser.expect.element('div.content-wrapper').text.to.contain('Dashboard')
        browser
            .saveScreenshot(path + (num += 1) + data.ext)
            .pause(4000)
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
            .setValue('input#line1', data.dir)
            .setValue('input#zipCode', data.zip)
            .saveScreenshot(path + data.ext)
            .pause(2000)
    },


    'Step 4: Listing': function(browser) {

        var data = browser.globals.variables;
        var num = 1;
        var option = 'Listing';
        var step = "4.- ";
        var path = data.pathce + step + option;


        browser
            .pause(2000)
            .click('button[data-elm-id="btnCreate"]')
            .waitForElementVisible('div#fileHeader', 20000)
            .saveScreenshot(path + num + data.ext)
            .pause(5000)
            .click('a[data-elm-id="lnkCasDashboard"]')
            .pause(2000)
            .waitForElementVisible('div.content-wrapper', 20000)
        browser.expect.element('.list-group').text.to.contain(data.dir)
        browser
            .saveScreenshot(path + (num += 1) + data.ext)
            .end()

    }

};