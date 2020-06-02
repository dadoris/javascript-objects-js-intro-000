
var playlist =
{
  Slowdive: 'Alison',
  My_Bloody_Valentine: 'Sometimes',
  Phil Ochs: "Heres to the State of Mississippi"
}



function  updatePlaylist( obj , artistName, songTitle  ){
  obj[artistName ] = songTitle;
  return  obj  ;
}

function updatePlaylist ( obj , artistName, songTitle  ){
  obj[artistName ] = songTitle;
  return obj;
}

function removeFromPlaylist (obj , songTitle ) {
  delete obj.songTitle;
  return obj;
}

removeFromPlaylist(playlist, songTitle) ;
