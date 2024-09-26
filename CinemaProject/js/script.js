$(document).ready(function() {
    // Завантаження фільмів з localStorage
    const movies = JSON.parse(localStorage.getItem('movies')) || [];
    movies.forEach((movie) => {
        $('#movieList').append(createMovieElement(movie));
    });

    // Функція створення HTML елемента фільму сторінки користувача
    function createMovieElement(movie) {
        return `<div class="movie">
            <img src="${movie.image}" alt="${movie.title}" class="movie-img" style="width: 150px; height: 200px;">
            <h3>${movie.title}</h3>
            <p>${movie.description}</p>
            <p><strong>Жанр:</strong> ${movie.genre}</p>
            <p><strong>Актори:</strong> ${movie.cast}</p>
            <a href="${movie.trailer}" target="_blank">Переглянути трейлер</a>
        </div>`;
    }
});
