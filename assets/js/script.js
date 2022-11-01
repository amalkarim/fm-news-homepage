$(document).click(function() {
  if ($('nav').hasClass('showed')) $('nav').removeClass('showed');

  if ($('.overlay').is(':visible')) $('.overlay').fadeOut();
})

$('#hamburger').click(function(e) {
  e.stopPropagation();
  $('nav').addClass('showed');
  $('.overlay').fadeIn();
});

$('#closeBtn').click(function(e) {
  e.stopPropagation();
  $('nav').removeClass('showed');
  $('.overlay').fadeOut();
});

$('nav').click(function(e) {
  if ($(this).hasClass('showed')) e.stopPropagation();
});