var path    = require('path');
var chai    = require('chai');
var assert  = chai.assert;
var request = require('supertest');

var env     = process.env.NODE_ENV || "development";
// var config  = require(path.join(__dirname, 'config', 'config.json'))[env];

var app     = require('../app');

describe("API: ", function() {
  describe('/images', function(done) {
    it('GET', function() {
      request(app)
        .get('/api/v1/images')
        .expect('Content-Type', /json/)
        .expect(200, {"files": []}, done);
    });
    it('POST', function(done) {
      request(app)
        .post('/api/v1/images')
        // .attach('file', 'tests/files/test.jpg')
        .expect(200)
        .end(function(err, res) {
          if (err) return done(err);
          done();
        });
    });
  });
});