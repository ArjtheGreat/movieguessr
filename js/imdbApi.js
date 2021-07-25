var unirest = require('unirest');
unirest.post(API_URL)
  .header("X-RapidAPI-Key", k_12345678)
  .end(function (result) {
    console.log(result.status, result.headers, result.body);
  });