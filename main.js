$(document).ready(function(){
  $("div1").css('cursor','pointer');

  $("span1").mouseenter(function() {
    $('<div class="info_panel">'
      + "Москва"
      + '</div>').appendTo('div1');
    $('.info_panel').css({
      'position': 'absolute',
      'top': '54%',
      'left': '13%'
    });
  });

  $("span2").mouseenter(function() {
    $('<div class="info_panel">'
      + "Гатчина"
      + '</div>').appendTo('div1');
    $('.info_panel').css({
      'position': 'absolute',
      'top': '41%',
      'left': '9%'
    });
  });

  $("span3").mouseenter(function() {
    $('<div class="info_panel">'
      + "Санкт-Петербург"
      + '</div>').appendTo('div1');
    $('.info_panel').css({
      'position': 'absolute',
      'top': '40%',
      'left': '12%'
    });
  });

  $("span4").mouseenter(function() {
    $('<div class="info_panel">'
      + "Мурманск"
      + '</div>').appendTo('div1');
    $('.info_panel').css({
      'position': 'absolute',
      'top': '32%',
      'left': '20%'
    });
  });

  $("span5").mouseenter(function() {
    $('<div class="info_panel">'
      + "Арсеньев"
      + '</div>').appendTo('div1');
    $('.info_panel').css({
      'position': 'absolute',
      'top': '78%',
      'right': '8%'
    });
  });

  $("span1").mouseleave(function () {
    $('.info_panel').remove();
  });

  $("span2").mouseleave(function () {
    $('.info_panel').remove();
  });

  $("span3").mouseleave(function () {
    $('.info_panel').remove();
  });

  $("span4").mouseleave(function () {
    $('.info_panel').remove();
  });

  $("span5").mouseleave(function () {
    $('.info_panel').remove();
  });

});
