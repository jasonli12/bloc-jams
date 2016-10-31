// Example Album
var albumPicasso = {
    title: 'The Colors',
    artist: 'Pablo Picasso',
    label: 'Cubism',
    year: '1881',
    albumArtURL: 'assets/images/album_covers/01.png',
    songs: [
        { title: 'Blue', duration: '4:26' },
        { title: 'Green', duration: '3:14' },
        { title: 'Red', duration: '5:01' },
        { title: 'Pink', duration: '3:21' },
        { title: 'Magenta', duration: '2:15' },
    ]
};

//Another Example Album

var albumMarconi = {
    title: 'The Telephone',
    artist: 'Guglielmo Marconi',
    label: 'EM',
    year: '1909',
    albumArtURL: 'assets/images/album_covers/20.png',
    songs: [
        { title: 'Hello, Operator?', duration: '1:01' },
        { title: 'Ring, ring, ring', duration: '5:01' },
        { title: 'Fits in your pocket', duration: '3:21' },
        { title: 'Can you hear me now?', duration: '3:14' },
        { title: 'Wrong phone number', duration: '2:15' },
    ]
};

var albumKurosaki = {
    title: 'Reincarnation',
    artist: 'Maon Kurosaki',
    label: 'NBCUniversal Entertainment Japan',
    year: '2014',
    albumArtURL: 'assets/images/album_covers/reincarnation.jpg',
    songs: [
        { title: 'X-Encounter', duration: '6:15' },
        { title: '-Autonomy-', duration: '4:09' },
        { title: 'Algo~Who Knows It?', duration: '4:27' },
        { title: '...Because, In Shadow', duration: '5:51' },
        { title: 'Fixxx and Lie', duration: '3:59' },
        { title: 'K O N', duration: '3:10' },
        { title: 'Dysnomia', duration: '5:07' },
        { title: 'Trying! Trying!', duration: '4:40' },
        { title: 'Himawari no Natsu', duration: '5:01' },
        { title: 'Reincarnation', duration: '6:06' },
    ]
};

var createSongRow = function(songNumber, songName, songLength) {
    var template =
        '<tr class="album-view-song-item">'
    +   '   <td class="song-item-number">' + songNumber + '</td>'
    +   '   <td class="song-item-title">' + songName + '</td>'
    +   '   <td class="song-item-duration">' + songLength + '</td>'
    +   '</tr>'
    ;
    
    return template;
};

var albumTitle = document.getElementsByClassName('album-view-title')[0];
var albumArtist = document.getElementsByClassName('album-view-artist')[0];
var albumReleaseInfo = document.getElementsByClassName('album-view-release-info')[0];
var albumImage = document.getElementsByClassName('album-cover-art')[0];
var albumSongList = document.getElementsByClassName('album-view-song-list')[0];

var setCurrentAlbum = function(album) {

    //#2
    albumTitle.firstChild.nodeValue = album.title;
    albumArtist.firstChild.nodeValue = album.artist;
    albumReleaseInfo.firstChild.nodeValue = album.year + ' ' + album.label;;
    albumImage.setAttribute('src', album.albumArtURL);
    
    //#3
    albumSongList.innerHTML = '';

    //#4
    for (var i = 0; i < album.songs.length; i++) {
        albumSongList.innerHTML += createSongRow(i + 1, album.songs[i].title, album.songs[i].duration);
    }
};

var listOfAlbums = [albumPicasso, albumMarconi, albumKurosaki];
var albumNumber = 1;

window.onload = function() {
    setCurrentAlbum(albumPicasso);
    
    albumImage.addEventListener("click",function(event) {
        setCurrentAlbum(listOfAlbums[albumNumber]);        
        albumNumber++;
        
        if (albumNumber == listOfAlbums.length) {
            albumNumber = 0;
        }
    });
};
    









