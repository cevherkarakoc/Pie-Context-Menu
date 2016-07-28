# Pie Context Menu

![alt text](./images/demo2.gif " Demo Gif " )

Pie CM is a customizable and functional context menu (right-click menu) for HTML page.

[Demo 1 - (Basic)](https://rawgit.com/cevherkarakoc/Pie-Context-Menu/master/examples/example1.html) | | 
[Demo 2 - (Stylized)](https://rawgit.com/cevherkarakoc/Pie-Context-Menu/master/examples/example2.html) | | 
[Demo 3 - (Responsive)](https://rawgit.com/cevherkarakoc/Pie-Context-Menu/master/examples/example3.html) | | 
[Demo 4 - (Google Icons)](https://rawgit.com/cevherkarakoc/Pie-Context-Menu/master/examples/example4.html)

## Installation ##

### Standalone
Download `pie-cm.min.js` and `pie-cm_core.min.cs` files.
Include them in your HTML

```html
<script src="dist/pie-cm.min.js"></script>
<link href="dist/pie-cm_core.min.css" rel="stylesheet" />
```

### Bower
```
$ bower install pie-cm
```

```html
<script src="bower_components/dist/pie-cm.min.js"></script>
<link href="bower_components/dist/pie-cm_core.min.css" rel="stylesheet" />
```

## Usage ##
-----------

**1- HTML:**

* Add right clickable items
```html
<... class="menuable" ...> ITEM 1 </...>
<... class="menuable" ...> ITEM 2 </...>
```

**2- JavaScript:**



* Create Menu
```javascript
var my_menu = new PieContextMenu({
    menuID:"my_menu",
    menuItemClass:"menuable",
    menuSize:220
});
```

* Create Menu Button
```javascript
my_menu.addButton("Delete","\uf1f8");
```

* Add Event Listener to Button
```javascript
my_menu.buttons[0].element.addEventListener("click",myFunc,false);
```

## Customize ##
-----------

![alt text](./images/colorful.PNG " Colorful Sample " )
```css
.pie-context-menu circle.pcm_center{
    fill:#80BD9E;
}

.pie-context-menu circle.pcm_button{
    stroke:#FFB85F;
}
    
.pie-context-menu circle.pcm_button--hover{
    stroke: #FF7A5A;
}

.pie-context-menu text.pcm_title{
    fill:white;
}

.pie-context-menu text.pcm_icon{
    fill:white;
    font-size:32px;
    font-family:FontAwesome;
}

.pie-context-menu text.pcm_icon--hover{
    fill:#763626;
}
```

## Useful Methods ##
-----------

```javascript
my_menu.resize(300) //resize the menu;

my_menu.openMenu() //open the menu;
my_menu.closeMenu() //close the menu;

my_menu.buttons[index].changeText("NEW TEXT");
my_menu.buttons[index].changeIcon("\uf1ea");


```
## Contributors ##
* [cevherkarakoc](https://github.com/cevherkarakoc)
* [mister-walter](https://github.com/mister-walter)

## License ##
-----------
### Licensed under GPLv3
![alt text](https://www.gnu.org/graphics/gplv3-127x51.png " GPLv3 " )
