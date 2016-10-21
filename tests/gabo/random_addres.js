	var rawAddress 
	var rawZipCode
	var zipCode
	var address
	var finalZipCode
module.exports = {
  'generate random address' : function (browser) {
  	/*var rawAddress 
	var rawZipCode
	var zipCode
	var address
	var finalZipCode*/
    browser
    //getting text from page with random adrresses
      .url('https://www.randomlists.com/random-addresses')
      .waitForElementVisible('ol[id="result"]', 10000)
      .getText('ol[id="result"]', ( function(ranAddress){
      	rawAddress = ranAddress.value.split("\n");
      	console.log(rawAddress);
      }))
      //handling raw address retrieved form page to get address and zip
      .perform (function(){
      	console.log ('raw address: ', rawAddress)
      	address = rawAddress[0]
      	console.log ('address: ', address)
      	rawZipCode = rawAddress[1].split(",")
      	console.log ('raw zip: ', rawZipCode)
      	zipCode = rawZipCode[1].split(" ")
      	console.log ('zip: ', zipCode)
      	finalZipCode = zipCode[2]
      	console.log ('final zip: ', finalZipCode)
      	//return finalZipCode
      	
      })
      //ranAddress()
      setTimeout(function(){
      	//console.log ('zip: ', finalZipCode)
      	/*console.log ('raw address: ', rawAddress)
      	address = rawAddress[0]
      	console.log ('address: ', address)
      	rawZipCode = rawAddress[1].split(",")
      	console.log ('raw zip: ', rawZipCode)
      	zipCode = rawZipCode[1].split(" ")
      	console.log ('zip: ', zipCode)
      	finalZipCode = zipCode[2]
      	console.log ('final zip: ', finalZipCode)*/
      }, 9000);	
      console.log ('final zip: ', finalZipCode)
      }
  
  }


      

