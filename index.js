var request = require('request');
var _ = require('underscore');
var cheerio = require('cheerio');

var call = function (path, callback) {

    request('http://news.ycombinator.com', function(err, res, body) {

       if(err) 
        return callback(err);

    var items = [];

    $ = cheerio.load(body);
    $('td.title').each(function (index, element) {
       if(index % 2 !== 1)
          return true;

      var item = {};
      var tempHref = $(this).parent().next().find('a').next().attr('href');
      if(!tempHref)
        return false;
      item.id = parseInt(tempHref.match(/id=([0-9]+)/)[1]);
      item.title = $(this).find('a').text();
      item.url = $(this).find('a').attr('href');
      items.push(item);

  });

    callback(null, items);

});
}

var home = function (callback) {
    if(typeof callback == "undefined") {
        var callback = page;
        var page = 0;
    }
    call('/', callback);
}

var newest = function (callback) {
    if(typeof callback == "undefined") {
        var callback = page;
        var page = 0;
    }
    call('/newest', callback);
}

var best = function (callback) {
    if(typeof callback == "undefined") {
        var callback = page;
        var page = 0;
    }
    call('/best', callback);
}

module.exports.home = home;
module.exports.newest = newest;
module.exports.best = best;