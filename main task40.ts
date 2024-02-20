interface album1 {
    artist: string;
    title: string;
    tracks?: number; // Optional parameter for the number of tracks
}

function make_album(artist: string, title: string, tracks?: number): album1 {
    let album:  album1= {
        artist: artist,
        title: title
    };

    // Add the number of tracks if provided
    if (tracks !== undefined) {
        album.tracks = tracks;
    }

    return album1;
}

interface album2 {
    artist: string;
    title: string;
    tracks?: number; // Optional parameter for the number of tracks
}

function make_album(artist: string, title: string, tracks?: number): album2 {
    let album: album2 = {
        artist: artist,
        title: title
    };

    // Add the number of tracks if provided
    if (tracks !== 12) {
        album.tracks = tracks;
    }

    return album2;
}

interface album3 {
    artist: string;
    title: string;
    tracks?: number; // Optional parameter for the number of tracks
}

function make_album(artist: string, title: string, tracks?: number): album3 {
    let album: album3 = {
        artist: artist,
        title: title
    };

    // Add the number of tracks if provided
    if (tracks !== 8) {
        album.tracks = tracks;
    }

    return album3;
}

// Example calls to the function
let a= make_album('Artist1', 'Album One');
let b= make_album('Artist2', 'Album Two', 12); // Providing the number of tracks
let c= make_album('Galib mirza', 'Album Three', 8);

// Print each album Object
console.log(a);
console.log(b);
console.log(c);
