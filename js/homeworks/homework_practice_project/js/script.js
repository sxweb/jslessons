/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

document.querySelectorAll('.promo__adv *').forEach((item) =>{
    item.remove();
});
document.querySelector('.promo__genre').textContent = 'Драма';
document.querySelector('.promo__bg').style.background = 'url(img/bg.jpg) center center/cover no-repeat';
renderMoviesList(movieDB.movies.sort());



function renderMoviesList(movies) {
    const moviesList = document.querySelector('.promo__interactive-list');
    moviesList.innerHTML = '';
    for(let i = 0; i < movies.length; i++){
        let movie = movies[i];
        if(movie.length > 12){
            movie = movie.slice(0,12);
            movie +='...';
        }
        moviesList.innerHTML += `<li class="promo__interactive-item">${i + 1}. ${movie}<div class="delete"></div></li>`;
    }
    addRemoveFunctions();
}

const addFilmButton = document.querySelector('.promo__interactive .add button');
addFilmButton.addEventListener('click', addFilm);

function addFilm(e){
    e.preventDefault();
    let value = document.querySelector('.promo__interactive .add input').value;
    if(value.length > 0){
        movieDB.movies.push(value);
    }
    renderMoviesList(movieDB.movies.sort());
    const isFavorite = document.querySelector('.add input[type="checkbox" i]').checked;
    if(isFavorite){
        console.log(`Added favourite movie called ${value}`);
    }

}

function addRemoveFunctions() {
    let deleteButtons = document.querySelectorAll('.promo__interactive-list .delete');
    deleteButtons.forEach((item) => {
        item.addEventListener('click', deleteMovie);
    });
}

addRemoveFunctions();

function deleteMovie(e){
    e.preventDefault();
    console.log(e.target.parentElement.textContent);
    const list = document.querySelectorAll('.promo__interactive-item');
    list.forEach((item, i) =>{
        if(item.textContent == e.target.parentElement.textContent){
            movieDB.movies.splice(i,1);
        }
    });
    renderMoviesList(movieDB.movies.sort());
}



