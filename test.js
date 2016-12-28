var test = require('tape')

var zalgo = require('./')
var unzalgo = require('./banish')
var chars = require('./lib/chars')

test('it works', function (assert) {
  var text = 'zalgo-text, it come 💦'
  var evil = zalgo(text)
  var pure = unzalgo(evil)
  assert.equal(chars.pattern.test(text), false)
  assert.equal(chars.pattern.test(evil), true)
  assert.equal(pure, text)
  assert.end()
})

test('it unzalgoes all chars', function (assert) {
  var evil = chars.all.join('')
  var pure = unzalgo(evil)
  assert.equal(pure, '')
  assert.end()
})
