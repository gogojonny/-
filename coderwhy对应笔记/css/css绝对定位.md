# css绝对定位

绝对定位会脱离标准流

绝对定位的top,left等元素是相对于其含有定位的祖先元素设定的,而不是父元素,下面的例子说明了这一点

''子绝父相''是一种编码经验,  因为相对定位不会脱离标准流,  所以常用相对定位作为祖先元素

```html
  <div class="box">
    <div class="container">
      <div class="item"></div>
    </div>
  </div>
```

![image-20221123103855558](C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20221123103855558.png)

```css
    .box {
      width: 800px;
      height: 800px;
      background-color: aqua;
      /* 绝对定位相对于其含有定位的祖先元素,如果没有祖先元素有定位属性,就默认视口为其定位的目标 */
      /* 祖先元素不一定非要是相对元素, 只要是定位元素就可以, 但是相对元素不会脱离标准流, 所以最常用 */
      position: relative;
    }

    .container {
      /* 虽然是.item的父元素, 但是由于没有定位属性, 所以不会以这个元素为定位目标 */
      width: 500px;
      height: 500px;
      background-color: greenyellow;
    }

    .item {
      width: 100px;
      height: 100px;
      background-color: red;
      position: absolute;
      top: 0;
      right: 0;
    }
```

