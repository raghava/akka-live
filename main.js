var playerType;

function loadYouTubeVideo(){
  if(playerType == 'youtube'){
    return false;
  }
  playerType = 'youtube';
  var ele = jQuery('<iframe width="100%" height="495" src="https://www.youtube.com/embed/_s3GWnxA6Vs?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
  jQuery('#player').html('').append(ele);
}

function loadFacebookVideo(){
  if(playerType == 'facebook'){
    return false;
  }
  playerType = 'facebook';
  var ele = jQuery('<div class="fb-video" data-href="//www.facebook.com/newskarnataka/videos/2776193792603460/" data-show-text="false" data-autoplay="true"></div>');
  var player = jQuery('#player');
  player.html('').append(ele);
  FB.XFBML.parse(player[0]);
}

jQuery(window).ready(function(){
  loadFacebookVideo();
})