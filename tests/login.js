module.exports = {


    ceLogin: function(browser) {
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

        deLogin: function(browser) {

        var data = browser.globals.variables;
        var dir;

        browser
            .assert.containsText('body', 'Log In')
            .setValue('input[id="userEmail"]', data.user)
            .setValue('input[id="userPassword"]', data.password)
            .click('button[data-elm-id="btnLogin"]')
            .waitForElementVisible('.intro-section', 20000)
            .assert.containsText('.intro-section', 'Seller Info')

    }



}