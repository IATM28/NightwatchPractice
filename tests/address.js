module.exports = {

    Address: function(browser, from) {

        var data = browser.globals.variables;
        var zip = data.zipcodes[Math.floor(Math.random() * (8 + 1))];
        var str;
        var address;

        browser
            .url('http://www.fakeaddressgenerator.com/US_Real_Random_Address/index')
            .waitForElementVisible('body', 1000)
            .setValue('input[name="zip"]', zip)
            .pause(1000)
            .click('input[type="submit"]')
            .pause(1000)
            .getText('ul li:nth-child(' + Math.floor(Math.random() * (5 + 1) + 1) + ') p:nth-child(4)', function(result) {
                data.zip = zip;
                console.log('Zipcode to Use: ' + data.zip);
                if (from === 'ce') {
                    str = (JSON.stringify(result.value));
                    address = str.substring(8, str.indexOf(","));
                } else {
                    address = (JSON.stringify(result.value)).substr(8);
                }
                data.address = address.replace('"', '');
                console.log('Address to use: ' + data.address);
            })
    }

}