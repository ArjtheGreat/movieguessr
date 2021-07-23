function randomProperty(obj) {
    let returnvar;
    let count = 0;
    for (let prop in obj)
        if (Math.random() < 1/++count)
           returnvar = prop;
    return returnvar;
}

       
    


let USA_moviedict = {};
let addPair = function (myKey, myValue) {
    USA_moviedict[myKey] = myValue;
};
let giveValue = function (myKey) {
    return USA_moviedict[myKey];
};

addPair("AvengersEndgame", "movies/USA_AvengersEndgame.png");
addPair("PulpFiction", "movies/USA_PulpFiction.png");
addPair("movie1", "movies/USA_movie1.png");
addPair("movie2", "movies/USA_movie2.png");
addPair("movie3", "movies/USA_movie3.png");
addPair("movie4", "movies/USA_movie4.png");
addPair("movie5", "movies/USA_movie5.png");
addPair("movie6", "movies/USA_movie6.png");
