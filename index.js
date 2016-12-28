var split = require('unicode-string/chars')
var chars = require('./lib/chars')

var rand = function (max) {
  return ~~(Math.random() * max)
}

module.exports = function (text, options) {
  text = split(text || '   he comes   ')
  options = options || {}

  var counts
  var result = ''

  var types = []
  if (options.up !== false) types.push('up')
  if (options.middle !== false) types.push('middle')
  if (options.down !== false) types.push('down')

  for (var i = 0, l = text.length; i < l; i++) {
    if (chars.pattern.test(text[i])) {
      continue
    }

    // Don’t mess with emoji
    if (text[i].length > 1) {
      result += text[i]
      continue
    }

    counts = {
      up: 0,
      middle: 0,
      down: 0
    }

    if (options.size === 'mini') {
      counts.up = rand(8)
      counts.middle = rand(2)
      counts.down = rand(8)
    }

    else if (options.size === 'maxi') {
      counts.up = rand(16) + 3
      counts.middle = rand(4) + 1
      counts.down = rand(64) + 3
    }

    else {
      counts.up = rand(8) + 1
      counts.middle = rand(3) 
      counts.down = rand(8) + 1
    }
  
    result += text[i]

    for (var j = 0, m = types.length; j < m; j++) {
      var type = types[j]
      var count = counts[type]
      var tchars = chars[type]
      var max = tchars.length - 1

      while (count--) {
        result += tchars[rand(max)]
      }
    }
  }

  return result
}
