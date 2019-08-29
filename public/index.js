const getPopularShows = async () => {
    const popular_shows = await fetch('https://api.themoviedb.org/3/discover/tv?fb6a1d3f38c3d97f67df6d141f936f29');
    const json = await popular_shows.json();
    console.log(json)
}

getPopularShows();