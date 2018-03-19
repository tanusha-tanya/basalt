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
$('.slider').slick({
  prevArrow:'<svg role="img" width="40" height="20" class="arrowleft"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow"> </use></svg>',
  nextArrow:'<svg role="img" width="40" height="20" class="arrowright"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow"> </use></svg>',
  appendArrows:$('.slider-arrows')
});
