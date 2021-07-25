const moviechoice = 'AvengersEndgame';

var unirest = require('unirest');
unirest.post(API_URL)
  .header("X-RapidAPI-Key", '454d66e78cmsha296d73b6d8977fp142715jsne26d9321763a')
  .end(function (result) {
    console.log(result.status, result.headers, result.body);
  });

  var axios = require("axios").default;

  var options = {
    method: 'GET',
    url: 'https://movie-database-imdb-alternative.p.rapidapi.com/',
    params: {s: moviechoice, r: 'json', page: '1'},
    headers: {
      'x-rapidapi-key': '454d66e78cmsha296d73b6d8977fp142715jsne26d9321763a',
      'x-rapidapi-host': 'movie-database-imdb-alternative.p.rapidapi.com'
    }
  };
  
  axios.request(options).then(function (response) {
      console.log(response.data);
  }).catch(function (error) {
      console.error(error);
  });