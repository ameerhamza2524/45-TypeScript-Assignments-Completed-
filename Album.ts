// Album ka structure define karna
type Album = {
    artist: string;
    title: string;
    tracks?: number; // Optional hai, zaroori nahi
  };
  
  // Function jo album ka object banata hai
  function make_album(artist: string, title: string, tracks?: number): Album {
    let album: Album = { artist, title };
    if (tracks !== undefined) {
      album.tracks = tracks;
    }
    return album;
  }
  
  // Teen albums banate hain
  const album1 = make_album('Taylor Swift', 'Fearless');
  const album2 = make_album('Adele', '25');
  const album3 = make_album('The Beatles', 'Abbey Road');
  
  // Albums ko print karte hain
  console.log(album1);
  console.log(album2);
  console.log(album3);
  
  // Ek album tracks ke sath banate hain
  const albumWithTracks = make_album('Michael Jackson', 'Thriller', 9);
  
  // Album ko print karte hain jo tracks ke sath hai
  console.log(albumWithTracks);
  