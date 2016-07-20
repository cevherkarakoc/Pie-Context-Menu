# Pie Context Menu

![alt text](./images/demo2.gif " Demo Gif " )

## Usage ##
-----------

**1- HTML:**
* Download `pie-cm.min.js` and `pie-cm.min.cs` files.
Include them in your HTML

```html
<script src="./dist/pie-cm.min.js"></script>
<link href="./src/pie-cm.min.css" rel="stylesheet" />
```
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
my_menu.addButton("Delete","fa-trash");
```

* Add Event Listener to Button
```javascript
my_menu.buttons[0].element.addEventListener("click",myFunc,false);
```

## Customize ##
-----------

![alt text](./images/colorful.png " Colorful Sample " )
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
}

.pie-context-menu text.pcm_icon--hover{
    fill:#763626;
}
```

## Useful Methods ##
-----------

```javascript
my_menu.resize(300) //resize the menu;

my_menu.openMenu //open the menu;
my_menu.closeMenu //close the menu;

my_menu.buttons[index].changeText("NEW TEXT");
my_menu.buttons[index].changeIcon("fa-new");


```

## License ##
-----------
### Licensed under GPLv3
![alt text](https://www.gnu.org/graphics/gplv3-127x51.png " GPLv3 " )