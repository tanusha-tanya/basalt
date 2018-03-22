var gamburger = document.querySelector('.gamburger'),
    header = document.querySelector('.header'),
    menuOpen = document.querySelector('.gamburger-menu'),
    isClose = true;
gamburger.addEventListener( "click" , function(){isClose? openMenu() : closenMenu()});

  function openMenu(){
    header.classList.add("gamburger-menu-open");
    menuOpen.style.animation = "openMenu 1s linear";
    isClose = false;
  };
  function closenMenu(){
    menuOpen.style.animation = "closeMenu 1s linear";
    header.classList.remove("gamburger-menu-open");
    isClose = true;
  }
$(window).on("load",function(){
  $(".scroll-container").mCustomScrollbar({
    axis:"x",
    theme: "3d-thick-dark"
    });
  });
$('.slider').slick({
  prevArrow:'<svg role="img" width="40" height="20" class="arrowleft"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow"> </use></svg>',
  nextArrow:'<svg role="img" width="40" height="20" class="arrowright"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow"> </use></svg>',
  appendArrows:$('.slider-arrows')
});
$('.productslider').slick({
  dots: true,
  arrows: false
});
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
});
$('img.open-img').zoomify();
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
  });
}
