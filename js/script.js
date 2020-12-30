"use strict";

const questions = ['which last movie did you see?', 'what rating do you give him?', 'which is your best genre'];

const personalMovieDB = {
    count: '',
    movies: {},
    actors: {},
    genres: [],
    private: false,

    start: function(){
        while(this.count === 0 || this.count === '' || this.count === null || isNaN(this.count)){
            this.count = +prompt('How many movies did you see last time?');
        }
    },

    calculateUserRating: function (){
        if(this.count <= 10){
            console.log('you watched to many movies');
        }else if(this.count >10 && this.count < 30){
            console.log('you watched anought conunt of movies');
        }else if(this.count >= 30){
            console.log('You watched so many movies!');
        }else{
            console.log('Error');
        }
    },

    printResult: function(){
        if(this.private === false){
            console.log(this);
        }
    },

    writeYourGenres: function(question){
        for(let i = 0; i < 3; i++){
            let thirdQuestion = '';
            while(thirdQuestion === null || thirdQuestion ===''){
                thirdQuestion = prompt(question + ' ' + (i + 1) + '?','');
            }
            this.genres[i] = thirdQuestion;
        }
    },

    setMovies: function (){
        for(let i = 0; i < 2; i++){
            let firstQuestion = '',
                secondQuestion = ''

            while(firstQuestion === null || firstQuestion.length > 50 ||  firstQuestion === ''){
                firstQuestion = prompt(questions[0], '');
            }

            while(secondQuestion === null || secondQuestion ===''){
                secondQuestion = prompt(questions[1],'');
            }


            this.movies[firstQuestion] = secondQuestion;
        }
    },

    toggleVisibilityMyDB: function (){
        this.private = !this.private;
    },

    printFavouriteGenres: function(){
        this.genres.forEach((item, i) => {
            console.log(`Your favorite genre ${i + 1} is: ${item}`);
        });
    }
};

personalMovieDB.start();

personalMovieDB.setMovies();
personalMovieDB.writeYourGenres(questions[2]);

personalMovieDB.calculateUserRating();

personalMovieDB.printResult();
personalMovieDB.printFavouriteGenres();
