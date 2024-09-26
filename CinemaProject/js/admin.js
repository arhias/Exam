$(document).ready(function() {
    // Завантаження фільмів з localStorage
    const movies = JSON.parse(localStorage.getItem('movies')) || [];
    movies.forEach((movie, index) => {
        $('#adminMovieList').append(createMovieElement(movie, index));
    });

    // Додавання нового фільму
    $('#addMovieForm').on('submit', function(event) {
        event.preventDefault();

        const movie = {
            title: $('#movieTitle').val(),
            description: $('#movieDescription').val(),
            genre: $('#movieGenre').val(),
            cast: $('#movieCast').val(),
            trailer: $('#movieTrailer').val(),
            image: $('#movieImage').val() 
        };

        movies.push(movie);
        localStorage.setItem('movies', JSON.stringify(movies));

        $('#adminMovieList').append(createMovieElement(movie, movies.length - 1));
        this.reset();
    });

    // Функція створення HTML елемента фільму 
    function createMovieElement(movie, index) {
        return `<div class="movie" data-index="${index}">
            <img src="${movie.image}" alt="${movie.title}" class="movie-img" style="width: 150px; height: 200px;">
            <h3>${movie.title}</h3>
            <p>${movie.description}</p>
            <p><strong>Жанр:</strong> ${movie.genre}</p>
            <p><strong>Актори:</strong> ${movie.cast}</p>
            <a href="${movie.trailer}" target="_blank">Переглянути трейлер</a>
            <button class="deleteMovie">Видалити фільм</button>
        </div>`;
    }

    // Видалення фільму
    $('#adminMovieList').on('click', '.deleteMovie', function() {
        const movieIndex = $(this).parent().data('index'); // Отримуємо індекс фільму
        movies.splice(movieIndex, 1); // Видаляємо фільм з масиву
        localStorage.setItem('movies', JSON.stringify(movies)); // Оновлюємо localStorage

        $(this).parent().remove(); // Видаляємо елемент з DOM
    });
});
