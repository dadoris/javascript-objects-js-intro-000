
var playlist = {
  Slowdive: 'Alison',
  My Bloody Valentine : 'Sometimes',
  Phil Ochs: "Here's to the State of Mississippi"
};

function  updatePlaylist( obj , artistName, songTitle  ){
  obj[artistName ] = songTitle;
  return  obj  ;
}

function updatePlaylist ( obj , artistName, songTitle  ){
  obj[artistName ] = songTitle;
  return obj;
}

function removeFromPlaylist (obj , songTitle ) {
  delete obj[songTitle] ;
  return obj;
}
