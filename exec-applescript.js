var teen_process = require('teen_process')
var B = require('bluebird')

var exec = teen_process.exec

// exec('osascript', ['-e', `quit app "${appName}"`]);
var openTextEdit = function () {
  return exec("open", ["/Applications/TextEdit.app"])
}

var quitTextEdit = function () {
  return exec('osascript', ['-e', `quit app "TextEdit.app"`])
}

var delay = function () {
  return B.delay(1000)
}

openTextEdit()
.then(delay)
.then(quitTextEdit).then(function () {
  console.log(`script executed`)
}, function (e) {
  console.log(`error ${JSON.stringify(e)}`)
})
