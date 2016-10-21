var variables = {
    user: "elopez@mahisoft.com",
    password: "123456",
    dir: '9224 W Lone Cactus Dr, Peoria, AZ 85382',
    zip: '80031',
    path: './tests_output/screenshots/',
    ext: '.png',
    sqft: '2000',
    lsSqft: '5000',
    yearBuilt: '1995',
    amount: '150000',
    image: '\\home.jpg',

}


var today = new Date();
var datetime = today.toLocaleString();
datetime = datetime.replace(/:|\s/g, '');
datetime = datetime.replace(/['/']/g, '');

var HtmlReporter = require('nightwatch-html-reporter');

/*
var reporter = new HtmlReporter({
    openBrowser: false,
    reportsDirectory: "./tests_output/reports",
    uniqueFilename: false,
    reportFilename: "generatedTestResults" + datetime + ".html",
    themeName: "default",


});*/

module.exports = {
   // reporter: reporter.fn,
    variables: variables
}