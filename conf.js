// conf.js this file contains with Configuration of library driver
exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['spec.js'],
    capabilities: {
      browserName: 'chrome'
    },
    jasmineNodeOpts: {
      defaultTimeoutInterval: 500000
  },
  }
