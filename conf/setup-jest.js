jasmine.VERBOSE = true;

require('jasmine-reporters');

var reporter = new jasmine.JUnitXmlReporter('output/');

jasmine.getEnv().addReporter(reporter);
