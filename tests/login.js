module.exports = {


    ceLogin: function(browser) {
        var data = browser.globals.variables;
        var num = 1;
        var option = 'Login';
        var step = "1.- ";
        var path = data.pathce + step + option;


        browser
            .windowMaximize()
            .url(data.urlcedev)
            .waitForElementVisible('body', 1000)
            .assert.containsText('body', 'SIGN IN TO CONTINUE.')
            .setValue('input[name="logonName"]', data.userce)
            .setValue('input[name="password"]', data.passwordce)
            //.saveScreenshot(path + num + data.ext)
            .click('button[data-elm-id="btnLogin"]')
            .waitForElementVisible('a[data-elm-id="lnkCasAdministration"]', 20000)
        browser.expect.element('div.content-wrapper').text.to.contain('Dashboard')
            //browser
            // .saveScreenshot(path + (num += 1) + data.ext)
            //.pause(4000)
    },

    deLogin: function(browser, step) {

        var data = browser.globals.variables;

        if (step != 3) {
            browser
                .windowMaximize()
                .url(data.urldeqa)

        }
        browser
            .waitForElementVisible('label[for="userEmail"]', 5000)
            .assert.containsText('body', 'Log In')
            // .saveScreenshot(path + num + data.ext)
            .setValue('input[id="userEmail"]', data.user)
            .setValue('input[id="userPassword"]', data.password)
            // .saveScreenshot(path + (num += 1) + data.ext)
            //.pause(1000)
            .click('button[data-elm-id="btnLogin"]')
        if (step === 3) {
            browser
                .waitForElementVisible('.intro-section', 20000)
                .assert.containsText('.intro-section', 'Seller Info')
                //.saveScreenshot(path + (num += 1) + data.ext)
                //.pause(4000)

        } else {
            browser
                .waitForElementVisible('div.mainView h2:nth-child(3)', 10000)
                .assert.containsText('div.mb-lg h1', 'Hi there')
                //.saveScreenshot(path + (num += 1) + data.ext)
                //.pause(4000)
        }


    }




}