var hn = require('../');
var fs = require('fs');
var assert = require('assert');


describe('hn.js', function(){


  describe('#parsePage()', function(){
    it('should return with equal to fixture', function(done){
      fs.readFile(__dirname + '/fixture/home.html', function(err, body) {
        if(err) return done(err);

        hn.parsePage(body, function(err, items) {
          assert.equal(err, null);
          assert.deepEqual(items, JSON.parse(fs.readFileSync(__dirname + '/fixture/home.json')));
          done();

        });
      });
    });
  });

});