var chars = require('./lib/chars')

module.exports = function (zalgo) {
  return zalgo.replace(chars.pattern, '')
}
