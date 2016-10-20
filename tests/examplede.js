module.exports = {


	'Step 1: Login' : function (browser) {
		var num =1;
		browser

			//.windowMaximize()
			.url('https://deqa.channelauction.com/homes/')
			.waitForElementVisible('body', 1000)
			.click('#main-navbar li a.btn.btn-nav-outline')
			.saveScreenshot('./tests/screenshots/login'+num+'.png')
			.assert.containsText('body', 'Log In')
			.setValue('input[id="userEmail"]', 'elopez@mahisoft.com')
			.setValue('input[id="userPassword"]', '123456')
			.saveScreenshot('./tests/screenshots/login'+(num+=1)+'.png')
			.click('button[data-elm-id="btnLogin"]')
			.waitForElementVisible('.mb-lg:nth-of-type(1)', 20000)
			.pause(3000)
			.saveScreenshot('./tests/screenshots/login'+(num+=1)+'.png')
			.assert.containsText('.mb-lg', 'Hi there')
		},

	 'Step 2: Select option "Sell a home"' : function (browser) {
			 var num =1;
			 browser
				 .click('ul.nav.navbar-nav.navbar-right li:nth-child(2) a.dropdown-title')
				 .waitForElementVisible('ul.nav.navbar-nav.navbar-right li:nth-child(2) .dropdown-menu', 10000)
				 .saveScreenshot('./tests/screenshots/sellahome'+(num)+'.png')
				 .assert.containsText('ul.nav.navbar-nav.navbar-right li:nth-child(2) .dropdown-menu li:nth-child(1) a', 'List a Home')
				 .click('ul.nav.navbar-nav.navbar-right li:nth-child(2) .dropdown-menu li:nth-child(1) a')
				 .saveScreenshot('./tests/screenshots/sellahome'+(num+=1)+'.png')
				 .waitForElementVisible('body', 2000)
				 .assert.containsText('body', 'List a Home')
				 .saveScreenshot('./tests/screenshots/sellahome'+(num+=1)+'.png')
			 },

	 'Step 3: Fill List information' : function (browser) {
			 var num =1;
			 
			 browser
				.setValue('input[name="address"]', '9246 W Lone Cactus Dr, Peoria, AZ 85382')
				.pause(2000)
				.saveScreenshot('./tests/screenshots/listinfo'+(num)+'.png')
				//.click('.input-group-btn .btn.btn-primary.locate-property-btn')
				.click('button[btn-whirl="btn-whirl"]')
				.waitForElementVisible('body', 2000)
				.assert.containsText('body', 'Address')
				.pause(2000)
				.click('button[ng-click="caCtrl.createAsset()"]')		
				.saveScreenshot('./tests/screenshots/listinfo'+(num+=1)+'.png')
		
	 }


};
