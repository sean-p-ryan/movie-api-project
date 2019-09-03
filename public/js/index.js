const showList = document.querySelector('.popular-shows-list');
const searchButton = document.getElementById('searchButton');
const showSearchArea = document.querySelector('.show-search');

const getPopularShows = async() => {
    const response = await fetch('/tv/popular');
    const json = await response.json();
    const shows = json.results;
    console.log(shows);
    getShowNames(shows);
}

const getShowNames = (shows) => {
    shows.forEach(show => {
        let showName = show.original_name;
        let newShow = document.createElement('li');
        let showIdLink = document.createElement('a');
<<<<<<< HEAD
        showIdLink.href = `${show.id}`;

        showIdLinknewShow.appendChild('a');
        newShow.innerText = showName;
=======
        showIdLink.innerText = showName;
        showIdLink.href = `/tv/${show.id}`;
        newShow.appendChild(showIdLink);        
>>>>>>> 1adc32cd293ca142477781200b7117ef5d7cb9bc
        showList.appendChild(newShow)
    })
};

searchButton.addEventListener("click", function(e) {
    e.preventDefault()
    searchShow()
});

const searchShow = async() => {
    const searchInput = document.getElementById('tvShowSearch').value;
    const tvShowUrl = `/search/tv/${searchInput}`;
    const showResponse = await fetch(tvShowUrl)
    const showData = await showResponse.json();
    const showResults = showData.results;
    // clearPrevResults();
    displayShowResults(showResults)
}

const clearPrevResults = () => {
    let previousSearches = document.querySelectorAll(".show-result");
    showSearchArea.removeChild(previousSearches);
}

const displayShowResults = (results) => {
    results.forEach(show => {
        let showNameData = show.original_name;
        let showDescriptionData = show.overview;
        let showResult = document.createElement('ul');
        // showResult.classList.add('show-result');
        showSearchArea.appendChild(showResult);
        let showNameDisplay = document.createElement('li');
        showNameDisplay.innerText = showNameData;
        let showDescriptionDisplay = document.createElement('li');
        showDescriptionDisplay.innerText = showDescriptionData;
        showResult.appendChild(showNameDisplay);
        showResult.appendChild(showDescriptionDisplay);
    })
}

getPopularShows();