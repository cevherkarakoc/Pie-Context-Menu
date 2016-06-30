
var menuablesClass = "menuable";

var menu = document.querySelector("#context-menu");
var menuState = 0;
var active = "context-menu--active";

var menuWidth;
var menuHeight;
var windowWidth;
var windowHeight;

init();

function init() {
    contextListener();
}

function contextListener() {
  document.addEventListener( "contextmenu", function(e) {
    if ( containsClass( e, menuablesClass ) ) {
      e.preventDefault();
      openMenu();
      positionMenu(e);
    } else {
      closeMenu();
    }
  });
}

function closeMenu() {
  if ( menuState !== 0 ) {
    menuState = 0;
    menu.classList.remove(active);
  }
}

function openMenu() {
  if ( menuState !== 1 ) {
    menuState = 1;
    menu.classList.add(active);
  }
}

function positionMenu(e) {
  menuPosition = getPosition(e);
  
  menuWidth = menu.offsetWidth + 4;
  menuHeight = menu.offsetHeight + 4;

  windowWidth = window.innerWidth;
  windowHeight = window.innerHeight;

  if ( (windowWidth -  menuPosition.x) < menuWidth ) {
    menu.style.left = (windowWidth - menuWidth-100) + "px";
  } else {
    menu.style.left = (menuPosition.x-100) + "px";
  }

  if ( (windowHeight - menuPosition.y) < menuHeight+100 ) {
    menu.style.top = (windowHeight - menuHeight) + "px";
  } else {
    menu.style.top = (menuPosition.y-100) + "px";
  }


}



function containsClass( e, className ) {
  var el = e.srcElement || e.target;

  if ( el.classList.contains(className) ) {
    return el;
  } else {
    while ( el = el.parentNode ) {
      if ( el.classList && el.classList.contains(className) ) {
        return el;
      }
    }
  }

  return false;
}

function getPosition(e) {
  var posx = 0;
  var posy = 0;

  if (!e) var e = window.event;

  if (e.pageX || e.pageY) {
    posx = e.pageX;
    posy = e.pageY;
  } else if (e.clientX || e.clientY) {
    posx = e.clientX + document.body.scrollLeft + 
                       document.documentElement.scrollLeft;
    posy = e.clientY + document.body.scrollTop + 
                       document.documentElement.scrollTop;
  }

  return {
    x: posx,
    y: posy
  }
}