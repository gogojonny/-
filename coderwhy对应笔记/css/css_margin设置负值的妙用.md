# margin设置为负值的妙用

平常在做网页设计时,  经常需要将元素一行显示, 元素之间需要间隔,  这就需要margin,  为了居中显示,  都会处理一行中最后一个元素的margin值为0, 防止这个元素因为margin的原因掉到下一行,  下面列出一系列方法让元素不会掉落, 同样有最佳方案来处理这个问题



#### 处理单行元素设置的方案



方案一:

```css
/* 需要给每一个最后一行中的元素设置,很麻烦 */
    .item5{
      margin: 0;
    }
```



方案二

```css
/* 不能保证每一个行中都有5个元素,而且可能存在兼容性问题 */
    .item:nth-child(5n){
      margin: 0;
    }
```



方案三:

```css
 /* 直接修改盒子, 让盒子适应元素, 实际上元素就不在中心对称了  */
    .nav{
      width: 1200px;
    }
```



方案四(最佳方案):

```css
/* 在nav里套一个宽度为auto, margin为0, -10px的box */
    .box {
      margin: 0 -10px 0 0;
    }
```

```html
<div class="nav">
    <div class="box">
      <div class="item item1"></div>
      <div class="item item2"></div>
      <div class="item item3"></div>
      <div class="item item4"></div>
      <div class="item item5"></div>
      <div class="item item1"></div>
      <div class="item item2"></div>
      <div class="item item3"></div>
      <div class="item item4"></div>
      <div class="item item5"></div>
    </div>
  </div>
```



最佳方案最主要利用了有关继承父元素宽度的特点

![image-20221124160207517](C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20221124160207517.png)

拉大后的box刚好可以容纳这几个item以及item的margin, 不需要考虑最后一个元素的margin怎么处理,只需要关注差了多少就行

这种布局最大的好处就是不必担心一行内有多少个元素,只需要考虑元素尺寸与margin值就可以了, 有很强的兼容性,  另外代码复用性也很好,可以添加很多个类似的元素,例如下面这样

```html
<div class="nav">
    <div class="box">
      <div class="item item1"></div>
      <div class="item item2"></div>
      <div class="item item3"></div>
      <div class="item item4"></div>
      <div class="item item5"></div>
      <div class="item item1"></div>
      <div class="item item2"></div>
      <div class="item item3"></div>
      <div class="item item4"></div>
      <div class="item item5"></div>
       <div class="item item1"></div>
      <div class="item item2"></div>
      <div class="item item3"></div>
      <div class="item item4"></div>
      <div class="item item5"></div>
	   <div class="item item1"></div>
      <div class="item item2"></div>
      <div class="item item3"></div>
      <div class="item item4"></div>
      <div class="item item5"></div>
        ....
    </div>
  </div>
```





除了在兼容度好的margin元素设定时需要margin设置为负值,  在边框设计中仍需要通过margin设置为负值叠加两个边框,不会让两个边框变粗

![image-20221124173804084](C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20221124173804084.png)



#### 边框折叠实战应用

这里有些为了用技术而去用技术了

```css
.nav {
      width: 1100px;
      height: 680px;
      background-color: orange;
      margin: 0 auto;
    }
    .box{
      /* 修正margin-left设置为负值时的偏移 */
      margin-left: 1px;
    }

    .item {
      /* 设置margin-left为负值后会让几个元素总长度变小,加1像素修补失去叠加导致失去的像素 */
      width: 221px;
      height: 168px;
      background-color: green;
      float: left;
      border: 1px solid black;
      /* 让边框重叠在一起,让边框不会变粗 */
      margin-left: -1px;
      /* 确保元素宽度不受边框影响 */
      box-sizing: border-box;
    }
    .item:nth-child(1){
      /* 数学计算后总有一个像素无法去除, 所以手动修改第一个元素宽度来去掉这个多余的像素 */
      width: 220px;
    }
```

实际上感觉这样会更简单

```css
    .nav {
      width: 1100px;
      height: 680px;
      background-color: orange;
      margin: 0 auto;
    }

    .item {
      margin-top: 10px;
      width: 220px;
      height: 168px;
      background-color: green;
      border-top: 1px solid #000;
      border-bottom: 1px solid #000;
      border-left: 1px solid #000;
      box-sizing: border-box;
      float: left;
    }

    .item:nth-child(5) {
      border-right: 1px solid black;
    }
```

这是html代码

```html
 <div class="nav">
    <div class="box">
      <div class="item item1">1</div>
      <div class="item item2">2</div>
      <div class="item item3">3</div>
      <div class="item item4">4</div>
      <div class="item item5">5</div>
    </div>

  </div>
```

