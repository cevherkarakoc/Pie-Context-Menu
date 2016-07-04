
var NS = "http://www.w3.org/2000/svg";
var menuablesClass = "menuable";
var menuButtonCount = 6;

var menu = document.querySelector("#context-menu");
var menu_svg = document.querySelector("#context-menu-svg");
var menuState = 0;
var active = "context-menu--active";

var menuWidth;
var menuHeight;
var windowWidth;
var windowHeight;

init();

function init() {
    contextListener();

    for(var i=0;i<menuButtonCount;i++)
        createMenuButton(i);
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
  
  menuWidth = menu.offsetWidth ;
  menuHeight = menu.offsetHeight ;

  windowWidth = window.innerWidth;
  windowHeight = window.innerHeight;

  if ( (windowWidth -  menuPosition.x) < menuWidth ) {
    menu.style.left = (windowWidth - 1.5*menuWidth) + "px";
  } else {
    menu.style.left = (menuPosition.x-menuWidth/2) + "px";
  }

  if ( (windowHeight - menuPosition.y) < menuHeight ) {
    menu.style.top = (windowHeight - 1.5*menuHeight) + "px";
  } else {
    menu.style.top = (menuPosition.y-menuHeight/2) + "px";
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

function createMenuButton(text){
    var menu_button = document.createElementNS(NS,"circle");
    menu_button.setAttribute("r", 70);
    menu_button.setAttribute("cx",  110);
    menu_button.setAttribute("cy",  110);

    var color = Math.round((Math.random()*600)+300);  
    menu_button.setAttribute("stroke",  "#"+color);  

    var size = 200/menuButtonCount+"%";
    var space = (200/menuButtonCount*(text))+"%";
    console.log(space);
    menu_button.setAttribute("stroke-dasharray"
                      ,"0% "+ space + " " + size + " 200%");

    menu_svg.appendChild(menu_button)
}