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
