module.exports = {
    ceLogin : function(browser){
        browser
            .url('https://ceqa.channelauction.com/login') 
            .waitForElementVisible('body', 3000)
            .setValue('input[ng-model="loginCtrl.logonName"]', 'jose')
            .setValue('input[ng-model="loginCtrl.password"]', 'jose')
            .click('button[data-elm-id="btnLogin"]');
    },
    
    deLogin : function (browser) {
        browser
            .url('https://deqa.channelauction.com/homes/')
            .waitForElementVisible('body', 1000)
            .click('#main-navbar nav div ul.nav.navbar-nav.navbar-right li a.btn.btn-nav-outline')
            .waitForElementVisible('body', 1000)
            .waitForElementVisible('input[name="userEmail"]', 1000)
            .setValue('input[name="userEmail"]', 'astridsellersagent@mahisoft.com')
            .setValue('input[data-elm-id="userPassword"]', '123456')
            .click('button[data-elm-id="btnLogin"]')
            .pause(3000)
            .assert.urlEquals('https://deqa.channelauction.com/homes/dashboard/activity');
    }
 };

