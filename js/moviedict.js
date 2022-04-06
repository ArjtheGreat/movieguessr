function randomProperty(obj) {
    let returnvar;
    let count = 0;
    for (let prop in obj)
        if (Math.random() < 1/++count)
           returnvar = prop;
    return returnvar;
}



//movie dictionaries
var AvengersEndgame = {
    name: "Avengers Endgame",
    pic: "movies/USA_AvengersEndgame.png",
    country: "United States of America"
}

var PulpFiction = {
    name: "Pulp Fiction",
    pic: "movies/USA_AvengersEndgame.png",
    country: "United States of America"
}

var TheMatrix = {
    name: "The Matrix",
    pic: "movies/USA_TheMatrix.png",
    country: "United States of America"
}


var movie = []; //this is array literation

movie.push(AvengersEndgame);
movie.push(TheMatrix);

movie.push(PulpFiction);
