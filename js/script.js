"use strict";

let moviesCount = +prompt('How many movies did you see last time?');

const personalMovieDB = {
    count: moviesCount,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

const questions = ['which last movie did you see?', 'what rating do you give him?', 'which is your best genre?' +
' 1- comedy, 2 - horror, 3 - action, 4 - melodrama (enter a number)'];

for(let i = 0; i < 2; i++){
    let firstQuestion = '',
        secondQuestion = '',
        thirdQuestion = '';
    
    while(firstQuestion === null || firstQuestion.length > 50 ||  firstQuestion === ''){
        firstQuestion = prompt(questions[0], '');
    }
    
    while(secondQuestion === null || secondQuestion ===''){
        secondQuestion = prompt(questions[1],'');
    }


    personalMovieDB.movies[firstQuestion] = secondQuestion;
}

personalMovieDB.genres = writeYourGenres(questions[2]);

function writeYourGenres(question){
    let genres = [];

    for(let i = 0; i < 3; i++){
        let thirdQuestion = '';
        while(thirdQuestion === null || thirdQuestion ===''){
            thirdQuestion = prompt(question,'');
        }
        genres[i] = thirdQuestion;
    }
    return genres;
}

if(personalMovieDB.count <= 10){
    console.log('you watched to many movies');
}else if(personalMovieDB.count >10 && personalMovieDB.count < 30){
    console.log('you watched anought conunt of movies');
}else if(personalMovieDB.count >= 30){
    console.log('You watched so many movies!');
}else{
    console.log('Error');
}
if(personalMovieDB.private === false){
    console.log(personalMovieDB);
}
