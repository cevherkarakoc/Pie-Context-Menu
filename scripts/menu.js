
var NS = "http://www.w3.org/2000/svg";
var menuablesClass = "menuable";
var menuButtonCount = 3;

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
    var text="Button "
    for(var i=0;i<menuButtonCount;i++)
        createMenuButton(i,text+i);
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
    menu.style.left = (windowWidth - menuWidth) + "px";
  } else {
    menu.style.left = (menuPosition.x-menuWidth/2) + "px";
  }

  if ( (windowHeight - menuPosition.y) < menuHeight ) {
    menu.style.top = (windowHeight - menuHeight) + "px";
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

function createMenuButton(index,text){
    var menu_button_G = document.createElementNS(NS,"g");
    menu_button_G.setAttribute("transform", "translate(110,110)");

    var menu_button = document.createElementNS(NS,"circle");
    menu_button.setAttribute("r", 70);

    var color = "rgba(238, 236, 246,1)";  
    menu_button.setAttribute("stroke", color);  

    var size = (200/menuButtonCount)+0.5+"%";
    var rot = -180+((360/menuButtonCount)*index);

    menu_button.setAttribute("stroke-dasharray", size + " 200%");
    menu_button.setAttribute("transform", "rotate("+rot +",0,0)");
    
    menu_button.setAttribute("onmouseover"
          ,"this.nextSibling.setAttribute('fill','rgba(40,33,37,1)')");
    
    menu_button.setAttribute("onmouseout"
          ,"this.nextSibling.setAttribute('fill','rgba(0,0,0,0)')");
    

    var title = document.createElementNS(NS, "text");
    title.textContent = text;
    title.setAttribute("x", "-35");
    title.setAttribute("y", "7");
    title.setAttribute("fill", "rgba(0,0,0,0)");
    title.setAttribute("font-size", "18");

    
    menu_button_G.appendChild(menu_button);
    menu_button_G.appendChild(title);
    menu_svg.appendChild(menu_button_G);
}