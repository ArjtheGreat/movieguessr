var unirest = require("unirest");

var req = unirest("GET", "https://movie-database-imdb-alternative.p.rapidapi.com/");

req.query({
	"i": "tt4154796",
	"type": "movie",
	"r": "json"
});

req.headers({
	"x-rapidapi-key": "5c1ae27e1amsh7317a252884ea16p16a568jsnab9a2ff89e58",
	"x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
	"useQueryString": true
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});