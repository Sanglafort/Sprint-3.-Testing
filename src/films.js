// Exercise 1: Get the array of all directors.
function getAllDirectors(movies) {
  let result =  movies.map(movie => movie.director);
  console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(movies, director) {
  let filmsDirector = movies.filter(movie => movie.director === director);
  console.log("EXERCICI 2 ->", filmsDirector);
  return filmsDirector;
} 


// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let currentDirector = getMoviesFromDirector(array, director);
  let sumScores = currentDirector.reduce((total, film) => total + film.score, 0);
  let average = sumScores / currentDirector.length;
  console.log("EXERCICI 3 ->", average);
  return average;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(movies) {
  let onlyTitles = movies.map(movie => movie.title);
  let orderByTitle = onlyTitles.sort();
  console.log("EXERCICI 4 ->", orderByTitle);
  return orderByTitle.slice(0, 20);  
}

// Exercise 5: Order by year, ascending
function orderByYear(movies) {
  let yearOrdered = [...movies].sort((a, b) => {
    if(a.year === b.year) {
      return a.title.localeCompare(b.title);
    }
    return a.year - b.year
  })  
  console.log("EXERCICI 5 ->", yearOrdered);
  return yearOrdered;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(movies, genre) {
  let currentCategory = movies.filter(movie => movie.genre.includes(genre));
  let sumScoresCat = currentCategory.reduce((total, film) => total + film.score, 0);
  let averageCategory = sumScoresCat / currentCategory.length;
  console.log("EXERCICI 6 ->", averageCategory);
  return averageCategory;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(movies) {
  let convertedHours = movies.map(movie => {
    let arrayDuration = movie.duration
    let createArray = arrayDuration.split(' ');
    let hours = createArray[0] ? Number(createArray[0].replace('h', '')) : 0;
    let minuts = createArray[1] ? Number(createArray[1].replace('min', '')) : 0;
    let inMinuts = (hours * 60) + minuts;
    return {...movies.duration, duration: inMinuts};
  })
  console.log("EXERCICI 7 ->", convertedHours);
  return convertedHours;  
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
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
