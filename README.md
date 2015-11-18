#hn.js [![Build Status](https://img.shields.io/travis/bencevans/node-hn.js.svg?style=flat-square)](https://travis-ci.org/bencevans/node-hn.js) [![Dependency Status](https://img.shields.io/david/bencevans/node-hn.js.svg?style=flat-square)](https://david-dm.org/bencevans/node-hn.js) [![Coverage Status](https://img.shields.io/coveralls/bencevans/node-hn.js.svg?style=flat-square)](https://coveralls.io/r/bencevans/node-hn.js?branch=master)

[Hacker News](http://news.ycombinator.com) Scraper



## Install

```bash
npm install hn.js
```

## Usage

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

## Licence

MIT © [Ben Evans](http://bensbit.co.uk)
