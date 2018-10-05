async function getSongLyrics(artist, title) {
    var response = await fetch('https://api.lyrics.ovh/v1/' + artist + '/' + title);
    var song = await response.json();
    if (response.status !== 200) return(song.error);
    return song.lyrics;
}

export default {
    getSongLyrics: getSongLyrics
};