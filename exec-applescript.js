var teen_process = require('teen_process')
var B = require('bluebird')

var exec = teen_process.exec

// exec('osascript', ['-e', `quit app "${appName}"`]);
exec('osascript', ['-e', `display dialog "Hello World"`]).then(function () {
  console.log(`script executed`)
}, function (e) {
  console.log(`error ${JSON.stringify(e)}`)
})
