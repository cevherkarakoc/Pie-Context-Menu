"use strict";
 var SVG_NS = "http://www.w3.org/2000/svg";
var PieContextMenu=function (menu_id, menuablesClass,numberOfButton,menuSize) {
    this.menuablesClass = menuablesClass;
    this.numberOfButton = numberOfButton;

    this.menu;
    this.menu_id = menu_id;

    this.menu_svg;
    this.menu_svg_id= menu_id+"-svg";

    this.menuState = 0;
    this.active = "pie-context-menu--active";
    this.menuSize = menuSize;

    this.radius;
    this.stroke_width;
    this.font_size;

    this.init();
}

PieContextMenu.prototype.init = function() {
    this.menu = document.createElement("nav");
    this.menu_svg = document.createElementNS(SVG_NS,"svg");
    this.menu.appendChild(this.menu_svg);

    this.reset();
    this.create();

    this.contextListener();
    
}

PieContextMenu.prototype.create = function () {
    var menu_node = document.getElementById(this.menu_id);
    if(menu_node===null)
        document.body.appendChild(this.menu);
}

PieContextMenu.prototype.destroy = function () {
    var menu_node = document.getElementById(this.menu_id);
    if(menu_node!=null)
        document.body.removeChild(this.menu);
}

PieContextMenu.prototype.reset = function () {
    this.closeMenu();
    
    var paras = document.getElementsByClassName("pcm_group");

    while(paras[0]) {
        paras[0].parentNode.removeChild(paras[0]);
    }

    this.radius = this.menuSize/3;
    this.stroke_width = this.menuSize/4;
    this.font_size = Math.round(this.menuSize/12);

    this.menu.setAttribute("id",this.menu_id);
    this.menu.setAttribute("class","pie-context-menu");
    this.menu.setAttribute("width",this.menuSize);
    this.menu.setAttribute("height",this.menuSize);

    this.menu_svg.setAttribute("id",this.menu_svg_id);
    this.menu_svg.setAttribute("width",this.menuSize);
    this.menu_svg.setAttribute("height",this.menuSize);

    this.draw(); 
}

PieContextMenu.prototype.contextListener = function() {
    var that = this;
  document.addEventListener( "contextmenu", function(e) {
    if ( that.containsClass( e, that.menuablesClass ) ) {
      e.preventDefault();
      that.openMenu();
      that.positionMenu(e);
    } else {
      that.closeMenu();
    }
  });
}

PieContextMenu.prototype.closeMenu =function() {
  if ( this.menuState !== 0 ) {
    this.menuState = 0;
    this.menu.classList.remove(this.active);
  }
}

PieContextMenu.prototype.openMenu =function () {
   
  if ( this.menuState !== 1 ) {
    this.menuState = 1;
    this.menu.classList.add(this.active);
  }
}

PieContextMenu.prototype.positionMenu = function(e) {
  var menuPosition = this.getPosition(e);
  
  var menuWidth = this.menu.offsetWidth ;
  var menuHeight = this.menu.offsetHeight ;

  var windowWidth = window.innerWidth;
  var windowHeight = window.innerHeight;

  if ( (windowWidth -  menuPosition.x) < menuWidth ) {
    this.menu.style.left = (windowWidth - menuWidth) + "px";
  } else {
    this.menu.style.left = (menuPosition.x-menuWidth/2) + "px";
  }

  if ( (windowHeight - menuPosition.y) < menuHeight ) {
    this.menu.style.top = (windowHeight - menuHeight) + "px";
  } else {
    this.menu.style.top = (menuPosition.y-menuHeight/2) + "px";
  }


}

PieContextMenu.prototype.containsClass = function ( e, className ) {
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

PieContextMenu.prototype.getPosition = function (e) {
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

PieContextMenu.prototype.draw = function () {
    var center = document.createElementNS(SVG_NS,"circle");
    center.setAttribute("class", "pcm_center pcm_group");
    center.setAttribute("r", this.radius);
    center.setAttribute("transform",
      "translate("+this.menuSize/2+","+this.menuSize/2+")");  
    this.menu_svg.appendChild(center);

    var text="Button "
    for(var i=0;i<this.numberOfButton;i++)
        this.createMenuButton(i,text+i,'fa-clipboard ');
}

PieContextMenu.prototype.createMenuButton = function (index,text,icon){
    var radius = this.radius;
    var stroke_width = this.stroke_width;
    var font_size = Math.round(this.font_size);

    var menu_button_G = document.createElementNS(SVG_NS,"g");
    menu_button_G.setAttribute("id",this.menu_id+"_button_"+(index+1));
    menu_button_G.setAttribute("class","pcm_group");
    menu_button_G.setAttribute("transform", 
            "translate("+this.menuSize/2+","+this.menuSize/2+")");

    var menu_button = document.createElementNS(SVG_NS,"circle");
    menu_button.setAttribute("class","pcm_button");
    menu_button.setAttribute("r", radius);
    menu_button.setAttribute("stroke-width", stroke_width);  
    menu_button.setAttribute("fill", "rgba(0,0,0,0)");  

    var perimeter = Math.PI*2*radius;
    var size = (perimeter/this.numberOfButton)+(perimeter/500);
    var rot = -180+((360/this.numberOfButton)*index);

    menu_button.setAttribute("stroke-dasharray", size +" "+perimeter);
    menu_button.setAttribute("transform", "rotate("+rot +",0,0)");
    menu_button.setAttribute("onmouseover","menu_button_mouseover(this)");
    menu_button.setAttribute("onmouseout","menu_button_mouseout(this)");
    

    var button_title = document.createElementNS(SVG_NS, "text");
    button_title.textContent = text;
    button_title.setAttribute("class", "pcm_title");
    button_title.setAttribute("x", -radius/2);
    button_title.setAttribute("y", font_size/2);
    button_title.setAttribute("font-size", font_size);
    button_title.setAttribute("display", "none");
    
    var temp_i = document.createElement("i");
    temp_i.className = icon;
    document.body.appendChild(temp_i);
    var before = getComputedStyle(temp_i, ':before');
    var cont = before.content;
    cont = cont.substr(1);
    cont = cont.substr(0,cont.length-1);
    document.body.removeChild(temp_i);

    var button_icon = document.createElementNS(SVG_NS, "text");
    var iconRot = -1*(rot+(180/this.numberOfButton));
    var dot = polarToCartesian(radius,iconRot);
    button_icon.textContent = cont;
    button_icon.setAttribute("class","pcm_icon");
    button_icon.setAttribute("x", dot.x-(font_size/2));
    button_icon.setAttribute("y", -dot.y+(font_size/2));
    button_icon.setAttribute("font-family", "FontAwesome");
    button_icon.setAttribute("font-size",font_size);

    menu_button_G.appendChild(menu_button);
    menu_button_G.appendChild(button_title);
    menu_button_G.appendChild(button_icon);
   
    this.menu_svg.appendChild(menu_button_G);
}

PieContextMenu.prototype.resize = function (newSize) {
    this.menuSize = newSize;
    this.reset();
}

var polarToCartesian = function (r,alpha){
  var rad = alpha * (Math.PI/180)
  var dot={
    x:r*Math.cos(rad),
    y:r*Math.sin(rad)
  };
  return dot;
  
}

var menu_button_mouseover = function (menu_button){
    menu_button.nextSibling.setAttribute('display','inline');
    menu_button.nextSibling.nextSibling.classList.add("pcm_icon--hover");
}
var menu_button_mouseout = function (menu_button){
    menu_button.nextSibling.setAttribute('display','none');
    menu_button.nextSibling.nextSibling.classList.remove("pcm_icon--hover");
}
