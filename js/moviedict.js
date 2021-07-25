function randomProperty(obj) {
    let returnvar;
    let count = 0;
    for (let prop in obj)
        if (Math.random() < 1/++count)
           returnvar = prop;
    return returnvar;
}



var AvengersEndgame = {
    name: "Avengers Endgame",
    pic: "movies/USA_AvengersEndgame.png",
    country: "US"
}

var PulpFiction = {
    name: "Pulp Fiction",
    pic: "movies/USA_PulpFiction.png",
    country: "US"
}


var movie = []; //this is array literation

movie.push(AvengersEndgame);
movie.push(PulpFiction);
