// Loads dom before running any js for more responsive layout
document.addEventListener('DOMContentLoaded', () => {


    // switches from jpeg file to gif file on click Play then allows user to replay gif
    let movieTag = document.querySelector(".movie_tmp");
    let playTag = document.querySelector(".trailer_play");

    playTag.addEventListener('click', (e) => {
        console.log("hello wrld");
        let loadTag = document.querySelector(".gif-loading");
        if (movieTag.src === "./images/movie_2.gif")
        {
            movieTag.src = "./images/placeholder.jpeg";
            playTag.innerHTML = "Play";
            loadTag.style.visibility = "hidden";
        }
        else
        {
            movieTag.src = "./images/movie_2.gif";
            playTag.innerHTML = "Replay";
            loadTag.style.visibility = "visible";
        }
        e.preventDefault();
    });

    let timesClicked = 0;

    let searchPop = document.querySelector(".search_bar");
    let searchNew = document.querySelector(".new_search");
    // Open and close search bar
    searchPop.addEventListener('click', (e) => {
        timesClicked++;

        // Records click event and opens new movies.html on second click
        if (timesClicked >= 2) {
            window.open(
                searchPop.href,
                "_blank"
            );
            searchPop.setAttribute("href", "./movies.html");

            return false;
        }
        else
        {
            if (searchNew.style.display === 'block')
            {
                searchNew.style.display = "none";
            }
            else
            {
                searchNew.style.display = "block";
            }
        }
        e.preventDefault();
    });
});
