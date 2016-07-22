# Pie Context Menu

![alt text](../images/demo2.gif " Demo Gif " )

Pie CM, html sayfalar için yapılmış özelleştirilebilir, fonksiyonel bir açılır menüdür. (sağ tık menüsü)

[Örnek 1 - (Basic)](https://cevherkarakoc.github.io/Pie-Context-Menu/demos/demo1.html) | | 
[Örnek 2 - (Stylized)](https://cevherkarakoc.github.io/Pie-Context-Menu/demos/demo2.html) | | 
[Örnek 3 - (Responsive)](https://cevherkarakoc.github.io/Pie-Context-Menu/demos/demo3.html)

## Kurulum ##

### Bağımsız
`pie-cm.min.js` ve `pie-cm_core.min.cs` dosyalarını indirin.
Ardından HTML'in içine ekleyin.

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

## Kullanım ##
-----------

**1- HTML:**

* Sağ tıklanabilir elementleri ekleyin.
```html
<... class="menuable" ...> ITEM 1 </...>
<... class="menuable" ...> ITEM 2 </...>
```

**2- JavaScript:**


* Menüyü oluşturun
```javascript
var my_menu = new PieContextMenu({
    menuID:"my_menu",
    menuItemClass:"menuable",
    menuSize:220
});
```

* Menü düğmelerini ekleyin
```javascript
my_menu.addButton("Sil","fa-trash");
```

* Düğmeye 'event' dinleyicisi ekleyin
```javascript
my_menu.buttons[0].element.addEventListener("click",myFunc,false);
```

## Özelleştirme ##
-----------

![alt text](../images/colorful.PNG " Colorful Sample " )
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

## İşe yarar Metodlar ##
-----------

```javascript
my_menu.resize(300) // menüyü yeniden boyutlandırır;

my_menu.openMenu() // menüyü açar;
my_menu.closeMenu() // menüyü kapar;

my_menu.buttons[index].changeText("NEW TEXT");
my_menu.buttons[index].changeIcon("fa-new");


```

## Lisans ##
-----------
### GPLv3 ile lisanslıdır
![alt text](https://www.gnu.org/graphics/gplv3-127x51.png " GPLv3 " )