const express = require('express');
const app = express();

const base = 'https://api.themoviedb.org/3';
const api_key = process.env.api_key;
require('dotenv').config();


app.listen(3000, () => console.log('listening on port 3000!'));
app.use(express.static('public'));

app.get('/tv/popular', async (req, res) => {
    const tv_popular_url = 'https://api.themoviedb.org/3/tv/popular?fb6a1d3f38c3d97f67df6d141f936f29'
    fetch(tv_popular_url)
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        })
})