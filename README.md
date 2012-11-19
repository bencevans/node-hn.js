#hn.js



[Hacker News](http://news.ycombinator.com) Parser

## Install

```bash
npm install hn.js
```

## Example

```javascript
var hn = require("hn.js");

// home can be replaced with best or newest
hn.home(function(err, items) {
	if(err) return console.error(err);
	console.log(items);
});
```

Writes to Log:

```javascript
{ id: 4597977,
 title: 'Xkcd style graphs',
 url: 'http://mathematica.stackexchange.com/questions/11350/xkcd-style-graphs' },
{ id: 4596609,
 title: 'Why Mozilla Persona is the right answer to the question of Identity',
 url: 'http://labs.newsint.co.uk/blog/2012/10/why-mozilla-persona-is-the-right-answer-to-the-question-of-identity/' },
// ...
```

Inspired by [forresty/hn](https://github.com/forresty/hn), required by [bencevans/HNCache](https://github.com/bencevans/HNCache)

## Links

[GitHub Repo](https://github.com/bencevans/node-hn.js)
[Issues](https://github.com/bencevans/node-hn.js/issues)

## Licence

The MIT Licence

Copyright (c) 2012 Ben Evans

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.