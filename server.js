const express = require('express');
const emojify = require('moji-translate');
const app = express();
const port = process.env.PORT || 5000;

app.get('/api/hello', (req, res) => {
    res.send({ express: 'Hello From Express' });
});

app.post('/api/emoji', (req, res) => {
    console.log(req);
    res.send({ emojis: 'let\'s get emojied' });
});

app.listen(port, () => console.log(`Listening on port ${port}`));