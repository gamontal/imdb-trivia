'use strict';

const should = require('should');
const imdbTrivia = require('../index');


it('should successfully return trivia results for the movie with IMDb id tt1431045', function (done) {
  imdbTrivia('tt1431045', function (err, res) {
    try {
      should(res).have.property('total');
      should(res).have.property('results');
      done();
    } catch (e) {
      done(e);
    }
  });
});
