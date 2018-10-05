const express = require('express');
const emojify = require('moji-translate');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.get('/api/hello', (req, res) => {
    res.send({ express: 'Hello From Express' });
});

app.post('/api/emoji', (req, res) => {
    var lyrics = req.body.lyrics;
    res.send({ emojis: emojify.translate(lyrics) });
});

app.listen(port, () => console.log(`Listening on port ${port}`));