# to-zalgo
i̛͇͚̠͊ͥͧ̊n̲̱̙͔̄̈́ͩ͠ͅv̤͛͐͊ͥͪo̘͆͛̑̾ͅk̘͔̪̹̪̜̖͇͋̈ͩ̕e̙̲͉̘͍̭̬ͪ̉ and banish zalgo

The code was extracted (and modified) from [Marak/colors.js](https://github.com/Marak/colors.js), with the character set from [Acme::Zalgo](https://metacpan.org/pod/Acme::Zalgo).

[![Build status](https://travis-ci.org/michaelrhodes/to-zalgo.svg?branch=master)](https://travis-ci.org/michaelrhodes/to-zalgo)

## Install
``` sh
$ npm install to-zalgo
```

### Usage
```js
var zalgo = require('to-zalgo')
var banish = require('to-zalgo/banish')

var evil = zalgo('some text')


> ŝ̜̩͇̼̥̼́̏͢o͎͊͜ḿ̛̩̳̖͕̞̩̭ͪe͖̺̣̹̺̋̀͛̽͝ ̖͍̭͓̯̠͑͑͢t̼̪̋͌͢eͯ̋͏͖͎͍̩̭̮x̢͚̄̾̀̈ͧ̓ͩ̚t̪ͫ͝


banish(evil)
> some text
```

### License
[MIT](http://opensource.org/licenses/MIT)
