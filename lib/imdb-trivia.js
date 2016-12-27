'use strict';

const request = require('request');
const scraper = require('cheerio');

let scrape = function (url, options, cb) {
  if (!cb) {
    cb = options;
  }

  request.get(url, function (err, res) {
    if (res.statusCode !== 200) {
      return cb({
        status_code: res.statusCode,
        details: res.body
      });
    }

    return cb(null, scraper.load(res.body));
  });
};

(function () {
  const imdbTrivia = (function () {    
    let imdbTrivia = function (movieId, cb) {
      const baseUrl = 'http://www.imdb.com/title';

      scrape(baseUrl + '/' + movieId + '/trivia', function (err, jq) {
        if (err) {
          return cb(err);
        }

        let movieTitle = jq('meta[property="og:title"]').attr('content');        
        let results = [];

        jq('div[class=sodatext]').each(function (index) {
          let item = jq(this);

          results[index] = item.text().trim().replace(/\\/g, '');
        });

        return cb(null, {
          title: movieTitle,
          trivia_count: results.length,
          trivia: results
        });
      });
    };

    return imdbTrivia;
  })();
  module.exports = imdbTrivia;
}).call(this);