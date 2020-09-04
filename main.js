var playerType;

function loadYouTubeVideo(){
  if(playerType == 'youtube'){
    return false;
  }
  playerType = 'youtube';
  var ele = jQuery('<iframe width="100%" height="543" src="https://www.youtube.com/embed/y6rhvWFIiFI?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
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

function toggleCalendar(){
  jQuery("#schedule-container").toggleClass('hide')
}

jQuery(window).ready(function(){
  loadFacebookVideo();
})
