var variables = {
    user: "elopez@mahisoft.com",
    password: "123456",
    dir: '9236 W Lone Cactus Dr, Peoria, AZ 85382',
    path: './tests/screenshots/',
    ext: '.png',
    sqft: '2000',
    lsSqft: '5000',
    yearBuilt: '1995',
    amount: '150000',
    image: '\\home.jpg'

}


var today = new Date();
var datetime = today.toLocaleString();
datetime = datetime.replace(/:|\s/g, '');
datetime = datetime.replace(/['/']/g, '');

/*var HtmlReporter = require('/bin/nightwatch-html-reporter');


var reporter = new HtmlReporter({
    openBrowser: false,
    reportsDirectory: "./reports",
    uniqueFilename: false,
    reportFilename: "generatedTestResults" + datetime + ".html",
    themeName: "default",


});*/

module.exports = {
 //   reporter: reporter.fn,
    variables: variables
}