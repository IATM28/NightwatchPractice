module.exports = {


    ceAddress: function(browser) {

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

        deAddress: function(browser) {

        var data = browser.globals.variables;
        var zip = data.zipcodes[Math.floor(Math.random() * (9 + 1))];
        var dir;

        browser
            .url('http://www.fakeaddressgenerator.com/US_Real_Random_Address/index')
            .waitForElementVisible('body', 1000)
            .setValue('input[name="zip"]', zip)
            .pause(1000)
            .click('input[type="submit"]')
            .pause(1000)
            .getText('ul li:nth-child(' + Math.floor(Math.random() * (5 + 1) + 1) + ') p:nth-child(3)', function(result) {
                console.log('ZipCode to use: ' + zip);
                dir = (JSON.stringify(result.value)).substr(8);
                data.dir = dir.replace('"', '');
                console.log('Address to use: ' + data.dir);
            })
    }

}