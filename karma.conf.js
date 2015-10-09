// Contents of: config/karma.conf.js
module.exports = function (config) {
  config.set({
    basePath : './',

    // Fix for "JASMINE is not supported anymore" warning
    frameworks : ["jasmine"],

    files : [
      'test/*.js'
    ],

    autoWatch : true,

    browsers : ['Chrome'],

    junitReporter : {
      suite      : 'unit'
      //...
    }
  });
}