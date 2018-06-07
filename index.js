var _ = require('lodash');
var movieData = require('./movies.json');

// movies before 1190 with imbd rating > 8.7
var popularOldies = _.filter(movieData, (movie)=> movie.year < 1990 && movie.imdbRating > 8.7 )
var popularOldiesTitles = popularOldies.map((movie)=> movie.title)
// var po2 = _.map(popularOldies, origionalTitle)
console.log(popularOldiesTitles)

// do any movies star john travolta in 1994
    // find all movies with 
   var travoltaMovies = _.filter(movieData,  (movie) => {

        // John Travolta in the array of actors
      return   _.find(movie.actors, (actor) => actor === 'John Travolta')
    })
    var travMovie = travoltaMovies.map((movie)=> movie.origionalTitle)
    // find all travolta movies with a year of 1994
    
    839-340-5003
    // get me a list of distinct actors
    // get a list of all actors
    var allActors = _.chain(movieData)
        .map(movieData, 'actors')
        .union(...allActors)
        .value();
    // var allActors = _.map(movieData, 'actors')
    // var uniqActors = _.union(...allActors)
    // filter out any duplicates
    
    var abc =123;