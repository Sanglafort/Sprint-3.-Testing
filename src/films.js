// Exercise 1: Get the array of all directors.
function getAllDirectors(movies) {
  let result =  movies.map(movie => movie.director);  // Con .map se crea un nuevo array que busca solo los nombres de los directores(movie.director)
  console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(movies, director) {
  let filmsDirector = movies.filter(movie => movie.director === director); // Con .filter se crea un nuevo array que solo busca las peliculas del director (movie.director) pasado por parametro.
  console.log("EXERCICI 2 ->", filmsDirector);
  return filmsDirector;
} 


// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let currentDirector = getMoviesFromDirector(array, director); // Con la función anterior se obtienen las peliculas de un director especifico. 
  let sumScores = currentDirector.reduce((total, film) => total + film.score, 0);  // Con .reduce se suma cada score al total de scores de las peliculas del director buscado...
  let average = sumScores / currentDirector.length; //... y luego se divide por la longitud total del array de peliculas para calcular la media.
  console.log("EXERCICI 3 ->", average);
  return average;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(movies) {
  let onlyTitles = movies.map(movie => movie.title);  // Con .map se recorre el array de movies original para obtener un nuevo array que contenga solo los titulos de las peliculas 
  let orderByTitle = onlyTitles.sort(); // Con el metodo .sort se ordenan automaticamente (sin aplicar parametros) de la A a la Z.
  console.log("EXERCICI 4 ->", orderByTitle);
  return orderByTitle.slice(0, 20);  // Con .slice solo visualizamos las 20 primeras peliculas.
}

// Exercise 5: Order by year, ascending
function orderByYear(movies) {
  let yearOrdered = [...movies].sort((a, b) => { // Sin modificar el array original (...movies), ordenamos las peliculas por año (aquí si hay que aplicar parametros (a, b) al metodo .sort)... 
    if(a.year === b.year) { //...si coinciden varias peliculas que sean del mismo año...
      return a.title.localeCompare(b.title);  //...se ordenan alfabeticamente
    }
    return a.year - b.year
  })  
  console.log("EXERCICI 5 ->", yearOrdered);
  return yearOrdered;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(movies, genre) {
  let currentCategory = movies.filter(movie => movie.genre.includes(genre)); // Se crea un nuevo array filtrando todas las peliculas que incluyan el genero buscado por parametro.
  let sumScoresCat = currentCategory.reduce((total, film) => total + film.score, 0);
  let averageCategory = sumScoresCat / currentCategory.length;
  console.log("EXERCICI 6 ->", averageCategory);
  return averageCategory;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(movies) {
  let convertedHours = movies.map(movie => {  // Hay que recorrer el array original para obtener un nuevo array con la duracion modficada.
    let arrayDuration = movie.duration
    let createArray = arrayDuration.split(' '); // Con .split creamos un nuevo array a partir del string movie.duration donde los elementos se separan por el espacio vacío (" ")
    let hours = createArray[0] ? Number(createArray[0].replace('h', '')) : 0; // Si en el primer elemento de createArray (el de las horas) no hay nada, se devuelve un 0... Y para que sea solo un numero se reemplaza la "h" por nada ("").
    let minuts = createArray[1] ? Number(createArray[1].replace('min', '')) : 0; //...y lo mismo para el segundo elemento (el de los minutos)
    let inMinuts = (hours * 60) + minuts;
    return {duration: inMinuts};
  })
  console.log("EXERCICI 7 ->", convertedHours);
  return convertedHours;  
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(movies, year) {
  let filmsOfYear = movies.filter(movie => movie.year === year);  // Se crea un nuevo array filtrando el array original por año...
  filmsOfYear.sort((a, b) => b.score - a.score);  //... y se ordenan por score (de la puntuación más alta a la más baja)
  console.log("EXERCICI 8 ->", filmsOfYear[0]);
  return [filmsOfYear[0]]; // Y sólo se visualiza el primero de la lista, es decir, el que tiene mayor puntuación.
  
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
