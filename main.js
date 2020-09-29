$(document).ready(function(){
  var regions=[
      {
          "region_name": "Москва",
          "region_code": "MOS",
          "top": "57.5%",
          "left": "15.5%",
      },
      {
          "region_name": "Санкт-Петербург",
          "region_code": "LEN",
          "top": "44%",
          "left": "13%",
      },
      {
          "region_name": "Гатчина",
          "region_code": "LEN",
          "top": "44.5%",
          "left": "12%",
      },
      {
          "region_name": "Мурманск",
          "region_code": "MUR",
          "top": "36%",
          "left": "24%",
      },
      {
          "region_name": "Арсеньев",
          "region_code": "PRI",
          "top": "82.7%",
          "left": "88.75%",
      },
  ];

  for (i = 0; i < regions.length; i++) {
    $('#'+ regions[i].region_code).css({'fill': '#d2b48c'}).data('region', regions[i]);
    /*$('<div class="point"></div>').appendTo("div1").css({
      top: regions[i].top,
      left: regions[i].left
    });*/
  }

  $('.map g').mouseover(function (e) {
    var region_data=$(this).data('region');
      $('<div class="info_panel">' + region_data.region_name + '</div>').appendTo('body'); //smthng wrong
  }).mouseleave(function () {
    $('.info_panel').remove();
  }).mousemove(function(e) {
    var mouseX = e.pageX,
        mouseY = e.pageY;
    $('.info_panel').css({
      top: mouseY-50,
      left: mouseX - ($('.info_panel').width() / 2)
    });
  });
});
