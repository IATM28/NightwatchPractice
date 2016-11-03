var variables = {
    user: "elopez@mahisoft.com",
    password: "123456",
    urldeqa: 'https://deqa.channelauction.com/homes/login',
    urlcedev: 'https://cedev.channelauction.com/login',
    address: '',
    zip: '',
    zipcodes: ['92602', '92618', '92620', '92672', '92688', '90275', '33012', '94107', '94536'],
    pathde: './tests_output/screenshots/de/',
    pathce: './tests_output/screenshots/ce/',
    ext: '.png',
    propertytype: 'Townhouse',
    beds: '3',
    baths: '2',
    sqft: '2000',
    lsSqft: '5000',
    yearBuilt: '1995',
    amount: '350000',
    image: '\\home.jpg',
    userce: "jose",
    passwordce: "jose",
    sdate: "10/01/2016",
    edate: "12/01/2016",
}

var today = new Date();
var datetime = today.toLocaleString();
datetime = datetime.replace(/:|\s/g, '');
datetime = datetime.replace(/['/']/g, '');
var HtmlReporter = require('./bin/nightwatch-html-reporter');

var reporter = new HtmlReporter({
    openBrowser: true,
    reportsDirectory: "./tests_output/reports",
    uniqueFilename: false,
    reportFilename: "generatedTestResults" + datetime + ".html",
    themeName: "default",
    relativeScreenshots: true,
});

module.exports = {
    reporter: reporter.fn,
    variables: variables
}