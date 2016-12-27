## imdb-trivia [![Build Status](https://travis-ci.org/gmontalvoriv/imdb-trivia.svg?branch=master)](https://travis-ci.org/gmontalvoriv/imdb-trivia)

> Get IMDb's movie trivia

Since IMDb has no API for this we're forced to scrape the movie's trivia page.

### Install

```
$ npm install --save imdb-trivia
```

### Usage

```javascript
const imdbTrivia = require('imdb-trivia');

imdbTrivia('tt0137523', function (err, movie) {
  if (err) {
    return console.log(err);
  }

  console.log(movie);

  /*
  {
    title: 'Fight Club (1999)',
    trivia_count: 161,
    trivia: [...]
  }
  */
});
```

### License

MIT © [Gabriel Montalvo](https://github.com/gmontalvoriv)