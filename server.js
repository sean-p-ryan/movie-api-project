const express = require('express');
const app = express();
const fetch = require('node-fetch');

const base = 'https://api.themoviedb.org/3';
const api_key = process.env.API_KEY;
require('dotenv').config();


app.listen(3000, () => console.log('listening on port 3000!'));
app.use(express.static('public'));
app.use(express.json({ limit: '1mb' }));

app.get('/tv/popular', async(req, res) => {
    const tvPopularUrl = `${base}/tv/popular?`
    const popularShowsResponse = await fetch(tvPopularUrl);
    const popularShowsJSON = await popularShowsResponse.json();
    res.json(popularShowsJSON);
});

app.get('/search/tv/:tvShow', async(req, res) => {
    console.log(req.params.tvShow)
    const queryString = req.params.tvShow.replace(" ", "%20");
    const showSearchUrl = `${base}/search/tv?&query=${queryString}`
    const showSearchResponse = await fetch(showSearchUrl);
    const showSearchJSON = await showSearchResponse.json();
});

app.get('/tv/:tv_id', async(req, res) => {
    res.sendFile(__dirname + "/public/show.html");
});

app.get('/show/data/:showId', async(req, res) => {
    const showId = req.params.showId;
    const showInfoUrl = `${base}/tv/${showId}?api_key=${process.env.API_KEY}`;
    const showInfoResponse = await fetch(showInfoUrl);
    const showInfoJSON = await showInfoResponse.json();
    res.json(showInfoJSON);
})