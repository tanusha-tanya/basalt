$(document).ready(function() {
  var string = '<div class="header-contacts"><div class="header-tel"><a href="tel:+73414547115"><svg role="img" width="30" height="30" class="phone"><use xlink:href="#telephone"></use></svg><span class="num">+7 (34145) <span class="weight">47-115</span></span></a></div><div class="header-text"><p><svg role="img" width="15" height="15"><use xlink:href="#local"></use></svg><span>Адрес: </span><a href="mailto:sigmau@mail.ru">г. Воткинск, ул. Мира, 1а</a></p><p><svg role="img" width="15" height="15"><use xlink:href="#email"> </use></svg><span>E-mail: </span><a href="mailto:sigmau@mail.ru">sigmau@mail.ru</a></p></div></div>'
$("#my-menu").mmenu();
$(".mm-panel:first-child" ).append(string);
var productcat
$(".product-name").on("click", function(){
  productcat = this.closest(".productcat-item");
  if($(productcat).hasClass("productcat-active")){
    $(productcat).removeClass("productcat-active");
  }
  else{
    $(".productcat-item").removeClass("productcat-active");
    productcat.classList.add("productcat-active");
  }
});
var menuHide = function(){
  $("#my-menu").hide();
  $("body").removeClass("noScroll");
  $("#menuOpen").removeClass("open");
}
$("#menuOpen").on("click", function(){
  if($("#menuOpen").hasClass("open")){
    menuHide()
  }
  else{
    $("#my-menu").show();
    $("body").addClass("noScroll");
    $("#menuOpen").addClass("open");
  }
});

  $(".scroll-container").mCustomScrollbar({
    axis:"x",
    theme: "my-theme",
    scrollButtons:{ enable: true }
    });
$('.slider').slick({
  prevArrow:'<svg role="img" width="40" height="20" class="arrowleft"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow"> </use></svg>',
  nextArrow:'<svg role="img" width="40" height="20" class="arrowright"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow"> </use></svg>',
  appendArrows:$('.slider-arrows'),
  infinite:false
});
$('.productslider').slick({
  dots: true,
  arrows: false,
  mobileFirst: true,
  responsive: [
    {
      breakpoint: 1200,
      dots: false,
      arrows: true,
      prevArrow:'<svg role="img" width="40" height="20" class="arrowleft"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow"> </use></svg>',
      nextArrow:'<svg role="img" width="40" height="20" class="arrowright"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow"> </use></svg>',
      appendArrows:$('.slider-arrows'),
      infinite:false
    }
 ]
});
var certificateSlider = function(){
  $('.certificate-slider').slick({
  dots: true,
  arrows: false,
  centerMode: true,
  slidesToShow: 1,
  mobileFirst: true,
  responsive: [
    {
      breakpoint: 600,
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: false
    },
    {
      breakpoint: 1200,
      settings: "unslick"
    }
  ]
})
}
$('.open-img').magnificPopup({
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		image: {
			verticalFit: true
		},
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function(element) {
				return element.find('img');
			}
		}
	});
$('.openform').magnificPopup({
  type: 'ajax'
});
var tab = document.getElementsByClassName('tabs-btn');
var tabContent = document.getElementsByClassName('tabs-inner');
for (var i=0 ; i<tab.length; i++) {
  tab[i].addEventListener('click', function(el){
  for (var i=0 ; i<tab.length; i++){
    tab[i].classList.remove('tabs-btn__active')
  };
  for (var i=0 ; i<tab.length; i++){
    tabContent[i].classList.remove('tabs-inner__current')
  };
  var that = el.target.classList;
  var dataIndex = el.target.dataset.index;
  var currentTab = tabContent[dataIndex].classList;
  that.add('tabs-btn__active');
  currentTab.add('tabs-inner__current');
  certificateSlider();
  });
}
$(".share-btn").on("click", function(){
  var conteiner = $('.share-btn').closest(".share-container");
  conteiner.toggleClass('share-open')
});
AOS.init({
  disable: window.innerWidth < 1200
});
 $('.up').on("click", function(){
   $('html, body').animate({scrollTop:0}, 'slow');
 });
 $(window).resize(function() {
   if ($(window).width() > 1200)
   menuHide()
 });
});
ymaps.ready(init);
    var myMap,
        placemark,
        object,
        coords,
        place;
function init(){
  myMap = new ymaps.Map ("map", {
  center: [57.05336757, 53.98733850],
    zoom: 16
  });
    $('.object').on("click", function(){
      object = this;
      coords = object.getAttribute('data-coords'),
      place = coords.split(',');
      placemark = new ymaps.Placemark(place, { hintContent: 'Центральный офис', balloonContent: 'г. Воткинск, ул. Мира 1а' });
      myMap.geoObjects.add(placemark)
    });
};
