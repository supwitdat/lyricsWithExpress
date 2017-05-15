
window.setInterval(function(){
  /// call your function here

$('p').remove();

$.get('/lyric', function(data){
  lyricSent = data;
  console.log(data);

  $('.wrap').append('<p>'+ data +'</p>');

});

}, 2500);
