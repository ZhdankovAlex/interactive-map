$(document).ready(function(){
  var cities=[
      {
          "name": "Москва",
          "top": "57.5%",
          "left": "15.5%",
      },
      {
          "name": "Санкт-Петербург",
          "top": "44%",
          "left": "13%",
      },
      {
          "name": "Гатчина",
          "top": "44.5%",
          "left": "12%",
      },
      {
          "name": "Мурманск",
          "top": "36%",
          "left": "24%",
      },
      {
          "name": "Арсеньев",
          "top": "82.7%",
          "left": "87.75%",
      },
  ];

  var current = new Image();

  var armalit = new Array();
  current.src = "MATERIALS/cities/armalit/01.png";
  armalit.push(current);
  current.src = "MATERIALS/cities/armalit/02.png";
  armalit.push(current);
  current.src = "MATERIALS/cities/armalit/03.png";
  armalit.push(current);
  current.src = "MATERIALS/cities/armalit/04.png";
  armalit.push(current);
  current.src = "MATERIALS/cities/armalit/05.png";
  armalit.push(current);
  current.src = "MATERIALS/cities/armalit/06.png";
  armalit.push(current);
  current.src = "MATERIALS/cities/armalit/07.png";
  armalit.push(current);
  current.src = "MATERIALS/cities/armalit/08.png";
  armalit.push(current);
  current.src = "MATERIALS/cities/armalit/09.png";
  armalit.push(current);

  var askold = new Array();
  current.src = "MATERIALS/cities/askold/01.png";
  askold.push(current);
  current.src = "MATERIALS/cities/askold/02.png";
  askold.push(current);
  current.src = "MATERIALS/cities/askold/03.png";
  askold.push(current);
  current.src = "MATERIALS/cities/askold/04.png";
  askold.push(current);
  current.src = "MATERIALS/cities/askold/05.png";
  askold.push(current);
  current.src = "MATERIALS/cities/askold/06.png";
  askold.push(current);
  current.src = "MATERIALS/cities/askold/07.png";
  askold.push(current);
  current.src = "MATERIALS/cities/askold/08.png";
  askold.push(current);
  current.src = "MATERIALS/cities/askold/09.png";
  askold.push(current);
  current.src = "MATERIALS/cities/askold/10.png";
  askold.push(current);

  var burevestnik = new Array();
  current.src = "MATERIALS/cities/burevestnik/01.png";
  burevestnik.push(current);
  current.src = "MATERIALS/cities/burevestnik/02.png";
  burevestnik.push(current);
  current.src = "MATERIALS/cities/burevestnik/03.png";
  burevestnik.push(current);
  current.src = "MATERIALS/cities/burevestnik/04.png";
  burevestnik.push(current);
  current.src = "MATERIALS/cities/burevestnik/05.png";
  burevestnik.push(current);
  current.src = "MATERIALS/cities/burevestnik/06.png";
  burevestnik.push(current);

  var skbk = new Array();
  current.src = "MATERIALS/cities/skbk/01.png";
  skbk.push(current);
  current.src = "MATERIALS/cities/skbk/02.png";
  skbk.push(current);
  current.src = "MATERIALS/cities/skbk/03.png";
  skbk.push(current);
  current.src = "MATERIALS/cities/skbk/04.png";
  skbk.push(current);
  current.src = "MATERIALS/cities/skbk/05.png";
  skbk.push(current);
  current.src = "MATERIALS/cities/skbk/06.png";
  skbk.push(current);

  for (i = 0; i < cities.length; i++) {
    $('<span-point class="point"></span-point>').appendTo("div-map").css({
      top: cities[i].top,
      left: cities[i].left
    }).data('city', cities[i]);
  }

  $('span-point').mouseover(function () {
    var city_data=$(this).data('city');
      $('<div-info class="info_panel">' + city_data.name + '</div-info>').appendTo('div-map');
      $('.info_panel').css({
        top: city_data.top,
        left: city_data.left
    });
  }).mouseleave(function () {
    $('.info_panel').remove();
  });

  var counter = 0;

  //по 3 секунды каждая, не более 5 штук единоразово, НЕ НАСЛАИВАЯСЬ
  for (i = 0; i < armalit.length; i++) {
    $('<span-popup class="popup"></span-popup>').appendTo("div-map").css({
      top: 5,
      left: 5
    }).data('image', armalit[i]);
    counter++;
  }
});
