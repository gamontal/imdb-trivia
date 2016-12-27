'use strict';

const should = require('should');
const imdbTrivia = require('../index');


it('should successfully return trivia for the movie with IMDb ID tt1431045', function (done) {
  imdbTrivia('tt1431045', function (err, res) {
    try {
      should(res).have.property('title');
      should(res).have.property('trivia_count');
      should(res).have.property('trivia');
      done();
    } catch (e) {
      done(e);
    }
  });
});
