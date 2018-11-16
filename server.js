const express = require('express');
const emojify = require('moji-translate');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

var mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/songmoji', { useNewUrlParser: true });

app.get('/api/hello', (req, res) => {
    res.send({ express: 'Hello From Express' });
});

app.post('/api/emoji', (req, res) => {
    var lyrics = req.body.lyrics;
    res.send({ emojis: emojify.translate(lyrics) });
});

if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, 'client/build')));
    // Handle React routing, return all requests to React app
    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
}

app.listen(port, () => console.log(`Listening on port ${port}`));