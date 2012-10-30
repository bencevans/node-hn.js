var request = require('request');
var _ = require('underscore');
var cheerio = require('cheerio');

var baseURL = 'http://news.ycombinator.com';

var call = function (path, callback) {
  request(baseURL + path, function(err, res, body) {
    if(err) return callback(err);
    parsePage(body, callback);
  });
};

var parsePage = function (body, callback) {
  var items = [];

  var $ = cheerio.load(body);
  $('td.title').each(function (index, element) {
    if(index % 2 !== 1)
      return true;

    var item = {};
    var tempHref = $(this).parent().next().find('a').next().attr('href');
    if(!tempHref)
      return false;
    item.id = parseInt(tempHref.match(/id=([0-9]+)/)[1], 10);
    item.title = $(this).find('a').text();
    item.url = $(this).find('a').attr('href');
    items.push(item);
  });

  callback(null, items);
};

var home = function (callback) {
  call('/', callback);
};

var newest = function (callback) {
  call('/newest', callback);
};

var best = function (callback) {
  call('/best', callback);
};

// Export Vars
module.exports.baseURL = baseURL;

// Export Parser
module.exports.parsePage = parsePage;

// Export Call
module.exports.call = call;

// Export Call Proxies
module.exports.home = home;
module.exports.newest = newest;
module.exports.best = best;