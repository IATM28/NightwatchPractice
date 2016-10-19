module.exports = {
  'Login on CE' : function (browser) {
    browser
      .url('https://cedev.channelauction.com')
      .waitForElementVisible('body',1000)
      //Start Session
      .setValue('input[name="logonName"]', 'jose')
      .setValue('input[name="password"]', 'jose')
      .click('button[data-elm-id="btnLogin"]')
      .waitForElementVisible('body',1000)
	  
      //Navigate from home to New Property File
      .waitForElementVisible('a[data-elm-id="lnkCasAdministration"]',50000)
      .click('a[data-elm-id="lnkCasAdministration"]')
      .click('a[data-elm-id="lnkCasNewPropertyFile"]')
      .waitForElementVisible('body',1000)
      
	  //Load and create new properties
      .waitForElementVisible('select[id="client"]',80000)
      
	  //Transaction Characteristics section	  
	  
      
	  //Product type dropdown
	  .click('select[id="productType"]')
      .click('option[value="string:traditionalListing"]')
      
	  //Test Property dropdown
	  .click('select[id="isTestProperty"]')
	  .click('option[label="No"]')
	  
	  //Address section
	  //Line 1 textbox
	  .setValue('input[id="line1"]','448 S 23rd St 1')	  
	  .setValue('input[id="zipCode"]','94804')
	  //.setValue('input[id="city"]','Richmond')
	  .click('button[data-elm-id="btnCreate"]')
	  
	  //Seller name dropdown
	  .click('select[id="client"]')
      //.click('option[label="0000"]')
	  .setValue('select[id="client"]','0000')
      //.end();
  }
};