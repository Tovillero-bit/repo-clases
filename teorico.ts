class Album {
    title: string;
    songs: string[];
    constructor(title: string, songs: string[]) {
        this.title = title;
        this.songs = songs;
    }
    addSongs(song: string) {
        this.songs.push(song);
    }
};

class Banda {
    members: string[];
    albums: Album[]
    constructor(members: string[], albums: Album[]) {
        this.members = members;
        this.albums = albums;
    }
    addAlbum(fullAlbum: Album) {
        this.albums.push(fullAlbum);
    }
}

/* function main() {
    const albumcito = new Album("Albumcito", ["Cancion 1", "Cancion 2"]);
    const albumcito2 = new Album("Albumcito II", ["Song 1", "Song 2"]);
    albumcito.addSongs("Cancion 3");
    // console.log(albumcito);
    const bandita = new Banda(["Tobichi", "Lotichi"], [albumcito]);
    // console.log(bandita);
    bandita.addAlbum(albumcito2);
    console.log(bandita.albums[0]);


}

 main();*/
