module.exports = {	
  'Create a new property from DE': function (browser) {
  	var userEmail = 'jcasique+52@mahisoft.com'
  	var userPassword = 'jcasique'
  	///var zipCode = '90002'
  	//var line1 = ''
  	var address = '9008 Holmes Ave, Los Angeles, CA 90002'
  	var currentNavOption = ''

  	/* get zipcode from CE - imcomplete
	.url('https://cedev.channelauction.com')
	.waitForElementVisible('body', 80000)
	.setValue('input[ng-model="loginCtrl.logonName"]', 'jose')
	.setValue('input[ng-model="loginCtrl.password"]', 'jose')
	.click('button[data-elm-id="btnLogin"]')
	.waitForElementVisible('div[class="nav-wrapper"]', 80000)
	.url('https://cedev.channelauction.com/#/app/cas/pricing-package-edit/9b3a6a13-455f-4d54-98e0-dcd9c51e2e1a') //'https://cedev.channelauction.com/#/app/cas/pricing-package-setup'
	//.waitForElementVisible('table[data-elm-id="tblPricePackageListing"]', 80000)
	//.click('a[class="ng-binding" value="Tex-X PP"]')
	.waitForElementVisible('select[id="SelectedStates"]', 80000)
	*/
	browser
	// Generate a valid address
	/*
	.url('http://www.fakeaddressgenerator.com/')
	.useXpath()
	.waitForElementVisible('html/body/div[1]/div[3]/div[2]/div[1]/form/div[4]/div[2]/input', 5000)	
	.setValue('html/body/div[1]/div[3]/div[2]/div[1]/form/div[4]/div[2]/input', zipCode)
	.click('html/body/div[1]/div[3]/div[2]/div[1]/form/div[6]/input')
	.waitForElementVisible('html/body/div[1]/div[3]/div[1]/div/div[3]/div[2]/div[6]/div[2]/strong/input', 5000)
	.getValue('html/body/div[1]/div[3]/div[1]/div/div[3]/div[2]/div[6]/div[2]/strong/input', function(result){ line1 = result.value; console.log('Address: '+line1) })
	*/
	.perform(
		function() {
			browser.url('https://dedev.channelauction.com/homes/login?redirectUrl=%2Fhomes%2F')
			browser.useCss()
			browser.waitForElementVisible('body', 80000)
			browser.waitForElementVisible('input[data-elm-id="userEmail"]',80000)
			browser.setValue('input[data-elm-id="userEmail"]', userEmail)
			browser.setValue('input[data-elm-id="userPassword"]', userPassword)
			browser.click('button[data-elm-id="btnLogin"]')	
			browser.waitForElementVisible('div[ng-controller="ActivityDashboardController as activityDashboard"]', 80000)
			browser.url('https://dedev.channelauction.com/homes/list-a-home/search')
			browser.waitForElementVisible('input[ng-model="locatePropCtrl.model.address"]', 80000)
			browser.setValue('input[ng-model="locatePropCtrl.model.address"]', address)
			browser.waitForElementVisible('ul[class="dropdown-menu ng-isolate-scope"]', 80000)
			browser.keys.ENTER //browser.keys(['\uE006'])
			browser.click('button[btn-whirl="btn-whirl"]')

				// Verify if modal window pops up after the realty tracking
				if (browser.waitForElementVisible('div[class="modal-content"]', 80000)){
					browser.click('button[btn-whirl="btn-whirl"]')
				}

			browser.waitForElementVisible('div[class="col-md-3 hidden-xs hidden-sm"] li[class="ng-scope active"] a[class="ng-binding ng-scope"]', 8000)
			browser.getText('div[class="col-md-3 hidden-xs hidden-sm"] li[class="ng-scope active"] a[class="ng-binding ng-scope"]', function(result){ currentNavOption = result.value; console.log(currentNavOption === "Listing Terms *"); })

			// THE SELLER JOURNEY PROCESS GETS STARTED:

				// Verify if the current step in the SJ is Listing Package
				if (currentNavOption === 'Listing Package ') {
					browser.click('a[ng-click="listingPackageCtrl.getStarted()"]')
				}

				// Verify if the current step in the SJ is Seller Info
				if (currentNavOption === 'Seller Info *') {
					browser.click('button[ng-click="declCtrl.setUserIsAgent(false)"]')
					//browser.pause(1000)
					//browser.waitForElementVisible('button[ng-click="declCtrl.setOwnerHasAgent(false)"]', 5000)
					browser.click('button[ng-click="declCtrl.setOwnerHasAgent(false)"]')
					browser.click('button[data-elm-id="btnSave"]')
				}

				// Verify if the current step in the SJ is Property Info
				if (currentNavOption === 'Property Info *') {
					browser.click('select[data-elm-id="propertyType"] option[label="Single Family-Attached"]')
					//browser.pause(500)
					browser.click('select[data-elm-id="beds"] option[label="2"]')
					//browser.pause(500)
					browser.click('select[data-elm-id="completeBathrooms"] option[label="3"]')
					browser.setValue('input[data-elm-id="squareFootage"]', '3025')
					browser.setValue('input[data-elm-id="lotSizeSqft"]', '1765')
					browser.setValue('input[id="yearBuilt"]', '1999')
					browser.click('button[data-elm-id="btnSave"]')
				}

				// Verify if the current step in the SJ is Amenities
				if (currentNavOption === 'Amenities ') {
					browser.click('input[data-elm-id="hasCentralAirConditioning"]')
					browser.click('button[data-elm-id="btnSave"]')		
				}

				// Verify if the current step in the SJ is Description
				if (currentNavOption === 'Description ') {
					browser.click('button[data-elm-id="btnSave"]')
				}

				// Verify if the current step in the SJ is Listing Terms
				if (currentNavOption === "Listing Terms *") {
					browser.pause(800)
					browser.setValue('input[data-elm-id="listPrice"]', '350000')
				}

				// Verify if the current step in the SJ is Photos
				if (currentNavOption === 'Photos *') {
					
				}


/*
			if (currentNavOption = 'Listing Package ') {
				//browser.setValue('input[data-elm-id="listPrice"]', '350000')
			} else if (currentNavOption = 'Seller Info ') {

			}
			
*/			
		






/*
			if (browser.waitForElementVisible('a[ng-click="listingPackageCtrl.getStarted()"]', 5000)){
				browser.click('a[ng-click="listingPackageCtrl.getStarted()"]')
				browser.waitForElementVisible('body', 5000)	
			}

			if (browser.waitForElementVisible('button[ng-click="declCtrl.setUserIsAgent(false)"]', 5000)){
				browser.click('button[ng-click="declCtrl.setUserIsAgent(false)"]')
			}
			
	*/
			//
			//
			//browser.waitForElementVisible('button[ng-click="declCtrl.setOwnerHasAgent(false)"]', 80000)
			//browser.click('button[ng-click="declCtrl.setOwnerHasAgent(false)"]')
			//browser.click('button[data-elm-id="btnSave"]')
			}
		)
	
	}
};