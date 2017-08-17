module.exports = function (config) {
    config.set({
      basePath: '',
      frameworks: ['jasmine', '@angular/cli'],
      plugins: [
        require('karma-jasmine'),
        require('karma-chrome-launcher'),
        require('karma-phantomjs-launcher'), /* add PhantomJS launcher here */
        require('karma-jasmine-html-reporter'),
        require('karma-coverage-istanbul-reporter'),
        require('@angular/cli/plugins/karma')
      ],
      /*...*/
      browsers: ['Chrome', 'PhantomJS'], /* add PhatomJS here */
      singleRun: false
    });
  };