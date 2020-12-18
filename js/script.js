"use strict"

let moviesCount = +prompt('How many movies did you see last time?');

const personalMovieDB = {
    count: moviesCount,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

const questions = ['which last movie did you see?', 'what rating do you give him?'];

for(let i = 0; i < 2; i++){
    let firstQuestion,
        secondQuestion;
    do{
        firstQuestion = prompt(questions[0], '');
    }while(firstQuestion.length > 50 ||  firstQuestion === '');
    
    do{
        secondQuestion = prompt(questions[1],'');
    }while(secondQuestion ==='');

    personalMovieDB.movies[firstQuestion] = secondQuestion;
};

if(personalMovieDB.count < 10){
    console.log('you watched to many movies');
}else if(personalMovieDB.count >10 && personalMovieDB.count < 30){
    console.log('you watched anought conunt of movies');
}else{
    console.log('You watched so many movies!');
}
console.log(personalMovieDB.movies);
