let findMov = document.querySelector("#find_movie");
let foundMov = document.querySelector("movie_title");

// Open & close search bar on nav.Search click
findMov.addEventListener("click", (e) => {

    if (queMov.style.visibility === 'visible')
    {
        queMov.style.visibility = 'hidden';
    }
    else
    {
        queMov.style.visibility = 'visible';
    }
    e.preventDefault();
});


let queMov = document.querySelector("#mov_search");
let titles = document.querySelectorAll(".img_search");

queMov.oninput = () => {
    // Hides all movie titles for the moment
    titles.forEach(hide => hide.style.display = 'none');

    let value = queMov.value;
    // Using search query grab attribute and display only the matching value
    titles.forEach(filter => {
        let movie = filter.getAttribute('data-title');

        if (value.toLowerCase().split(" ").every(item => movie.toLowerCase().includes(item))) {
            filter.style.display = 'block';
            filter.attributeStyleMap.clear();
        }
        if (queMov.value == '') {
            filter.style.display = 'block';
            filter.attributeStyleMap.clear();
        }
    });
    e.preventDefault();
};