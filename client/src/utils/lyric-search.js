async function getSongLyrics(artist, title) {
    var response = await fetch('https://api.lyrics.ovh/v1/' + artist + '/' + title);
    var song = await response.json();

    if (response.status !== 200) return(song.error);
    return song.lyrics;
}

async function translateSongLyrics(lyrics) {
    var response = await fetch('/api/emoji', { method: "POST", body: JSON.stringify({ lyrics: lyrics }), headers: { "Content-Type": "application/json" } });
    var emojied = await response.json();

    if (response.status !== 200) return (emojied.error);
    return emojied;
}

export default {
    getSongLyrics: getSongLyrics,
    translateSongLyrics: translateSongLyrics
};