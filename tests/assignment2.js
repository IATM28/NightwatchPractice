// Developer: Angel Ortega - Mahisoft
// Assignment 2: Create a new property from DE

module.exports = {		
  'Create a new property from DE': function (browser) {
  	var userEmail = 'jcasique+52@mahisoft.com'
  	var userPassword = 'jcasique'
  	var address = '10336 Juniper St Los Angeles CA 90002' // without commas
  	var photo = 'house_photo.jpg'

	browser
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
			browser.pause(1000)
			browser.keys.ENTER								
			browser.click('button[btn-whirl="btn-whirl"]')

			// Verify if modal window shows up after the realty tracking
				if (browser.waitForElementVisible('div[class="modal-content"]', 80000)){
					browser.click('button[btn-whirl="btn-whirl"]')
				}	

			browser.waitForElementVisible('body', 80000)

		// THE SELLER JOURNEY GETS STARTED:		
		// Complete step in the SJ: Listing Package
			browser.waitForElementVisible('a[ng-click="listingPackageCtrl.getStarted()"]', 80000)
			browser.click('a[ng-click="listingPackageCtrl.getStarted()"]')

		// Complete step in the SJ: Seller Info
			browser.waitForElementVisible('button[ng-click="declCtrl.setUserIsAgent(false)"]', 80000)
			browser.click('button[ng-click="declCtrl.setUserIsAgent(false)"]')									
			browser.waitForElementVisible('button[ng-click="declCtrl.setOwnerHasAgent(false)"]', 80000)
			browser.click('button[ng-click="declCtrl.setOwnerHasAgent(false)"]')
			browser.click('button[data-elm-id="btnSave"]')

		// Complete step in the SJ: Property Info
			browser.waitForElementVisible('select[data-elm-id="propertyType"] option[label="Single Family-Attached"]', 80000)
			browser.click('select[data-elm-id="propertyType"] option[label="Single Family-Attached"]')
			browser.waitForElementVisible('select[data-elm-id="beds"] option[label="2"]', 80000)			
			browser.click('select[data-elm-id="beds"] option[label="2"]')	
			browser.waitForElementVisible('select[data-elm-id="completeBathrooms"] option[label="3"]', 80000)								
			browser.click('select[data-elm-id="completeBathrooms"] option[label="3"]')
			browser.setValue('input[data-elm-id="squareFootage"]', '3025')
			browser.setValue('input[data-elm-id="lotSizeSqft"]', '1765')
			browser.setValue('input[id="yearBuilt"]', '1999')
			browser.click('button[data-elm-id="btnSave"]')
			browser.pause(2000)

		// Complete step in the SJ: Amenities							
			browser.click('button[data-elm-id="btnSave"]')
			browser.pause(2000)		

		// Complete step in the SJ: Description
			browser.click('button[data-elm-id="btnSave"]')
			browser.pause(2000)

		// Complete step in the SJ: Listing Terms							
			browser.waitForElementVisible('input[data-elm-id="listPrice"]', 80000)
			browser.setValue('input[data-elm-id="listPrice"]', '350000')
			browser.click('button[data-elm-id="btnSave"]')			

		// Complete step in the SJ: Photos
			browser.waitForElementVisible('div[uploader="lpCtrl.page.uploader"]', 80000)
			browser.setValue('input[type="file"]', require('path').resolve('./'+photo))
			browser.pause(1000)
			browser.click('button[data-elm-id="btnAssignPhotos"]')																																							
			browser.waitForElementVisible('div[class="img-content"]', 80000)
			browser.click('div[class="img-content"]')
			browser.pause(1000)
			browser.click('button[data-elm-id="btnTakeAction"]')
			browser.pause(1000)
			browser.click('button[data-elm-id="btnSaveAndPreview"]')

		// List the home just created
			browser.waitForElementVisible('button[data-elm-id="btnActivateListingXs"]', 80000)		
			browser.click('button[data-elm-id="btnActivateListingXs"]')	

		// Activate Listing - Marketing Agreement
			browser.waitForElementVisible('div[class="marketing-signature ng-binding"]', 80000)
			browser.waitForElementVisible('button[data-elm-id="btnAgreeContinue"]', 80000)
			browser.click('button[data-elm-id="btnAgreeContinue"]')	
		
		// Verify on DE if property was created and listed successfully
			browser.waitForElementVisible('div[ng-if="activityDashboard.homesListedData.length > 0"]', 80000)
			browser.assert.containsText('div[ng-if="activityDashboard.homesListedData.length > 0"]', address)
		}
	)
  }
};