"use strict"


const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false
}

const questions = ['which last movie did you see?', 'what rating do you give him?']

for (let i = 0; i < 2; i++) {
    let movieName = prompt(questions[0], '');
    let movieRating = prompt(questions[1]);
    personalMovieDB.movies[movieName] = movieRating;
    personalMovieDB.count++;

}
console.log(personalMovieDB.movies);
console.log(personalMovieDB.count);

