const movies = require("./data");

// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result =  array.map(movie => movie.director);
  // console.log("EXERCICE 1 ->", result);
  return result;
}
getAllDirectors(movies);



// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {

  let result = array.filter(movie => movie.director === director);
  // console.log("EXERCICE 2 ->", result);
 return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {

  let moviesDirector = array.filter(movie => movie.director === director);

  let totalScore = moviesDirector.reduce((acc, item) => acc + item.score, 0);

  let result = totalScore/moviesDirector.length;

  console.log("EXERCICE 3 ->", result.toFixed(2));

  return parseFloat(result.toFixed(2));
  
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {

  const sortedMovies = array.map(movie => movie.title).sort();

  return sortedMovies.slice(0, 20);
  
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {

  const spareArray = [...array];

  const orderedMovies = spareArray.sort((a, b) => {
    if (a.year !== b.year) {
      return a.year - b.year;
    } else {
      return a.title.localeCompare(b.title);
    }
  });

  return orderedMovies;
}


// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, category) {

  let moviesCategory = array.filter(movie => movie.genre.includes(category));

  if (moviesCategory.length === 0) {
    return 0;
  };

  let totalCategoryScore = moviesCategory.reduce((acc, item) => acc + item.score, 0);

  let averageCategoryScore = totalCategoryScore / moviesCategory.length

  console.log("EXERCICE 6 ->", averageCategoryScore.toFixed(2));

  return parseFloat(averageCategoryScore.toFixed(2));

}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(movies) {

 return movies.map(movie => {

  const newMovie = { ...movie };

  let movieDuration =newMovie.duration;

  let min = 0;
  let hrs = 0;

  if (movieDuration.includes("h")){
    hrs = parseInt(movieDuration.split("h")[0]);
  }

  if (movieDuration.includes("min")){
    min = parseInt(movieDuration.split(" ")[1].replace("min", ""));
  }

  newMovie.duration = hrs * 60 + min;

  return newMovie;
  
 })


}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(movies, year) {

  const filmsOfYear = movies.filter(item => item.year === year);

  if (filmsOfYear === 0){
    return [];
  }

  let bestFilm = filmsOfYear.reduce((best, item) => {
    return item.score > best.score ? item : best;
  });

  return [bestFilm]
  
}
 


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
