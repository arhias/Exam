$(document).ready(function() {
    // Список фільмів у розкладі
    const schedule = [
        {
            movieTitle: 'Інтерстеллар',
            time: '18:30',
            date: '1 Липня 2014',
            image: '../images/interstellar.jpg'
        },
        {
            movieTitle: 'Титанік',
            time: '15:00',
            date: '28 Вересня 2024',
            image: '../images/titanic.jpg'
        },
        {
            movieTitle: 'Матриця',
            time: '20:00',
            date: '29 Вересня 2024',
            image: '../images/matrix.jpg'
        }
    ];

    // Виведення фільмів на сторінку
    schedule.forEach(seance => {
        $('#scheduleList').append(createSeanceElement(seance));
    });

    // Функція створення HTML кожного сеансу
    function createSeanceElement(seance) {
        return `<div class="seance">
            <img src="${seance.image}" alt="${seance.movieTitle}" class="movie-img">
            <h3>${seance.movieTitle}</h3>
            <p><strong>Час:</strong> ${seance.time}</p>
            <p><strong>Дата:</strong> ${seance.date}</p>
        </div>`;
    }
});
