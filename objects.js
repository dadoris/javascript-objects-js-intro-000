
var playlist =
{
  Slowdive: 'Alison'  
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
