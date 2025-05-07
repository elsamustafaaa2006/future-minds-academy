const gerneList = document.querySelector('#gerneList');
const movies = document.querySelector('.movies');
const movieDetail = document.querySelector('#movieDetail');

let currentGerne = 0;

for (let i = 0; i < allMovies.length; i++) {
    gerneList.innerHTML += `
    <option value="${i}">${allMovies[i].gerne}</option>
`;
}
  
loadMovies(currentGerne); //default list
showMovie(0);
function loadMovies(m) {
    currentGerne = m;
    let myMovies = allMovies[m].movies;
    movies.innerHTML = '';
    for (let i = 0; i < myMovies.length; i++) {
        movies.innerHTML += `
            <li onclick= "showMovie(${i})">
                <div><img src="img/${myMovies[i].thumb}" alt=""></div>
                <h3>${myMovies[i].title}</h3>
                <div class="datetime">
                    <p>${myMovies[i].date}</p>
                    <p>Length: ${myMovies[i].length}min</p>
                </div>
            </li>
        `;
    }

}

gerneList.addEventListener('change', function (i) {
    loadMovies(i.target.value);
});

function showMovie(e) {
    console.log(allMovies[currentGerne].movies[e].title);

    movieDetail.innerHTML = `
      <div>
            <p>${allMovies[currentGerne].movies[e].date}</p>
            <p>Length: ${allMovies[currentGerne].movies[e].length}</p>
        </div>
        <h1>${allMovies[currentGerne].movies[e].title}</h1>
        ${allMovies[currentGerne].movies[e].trailer}
        <p>${allMovies[currentGerne].movies[e].desc}</p>
        <h4>${allMovies[currentGerne].movies[e].actors}</h4>
    `;

}




