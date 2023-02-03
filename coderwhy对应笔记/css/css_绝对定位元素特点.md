# 绝对定位元素特点

### 什么是绝对定位元素

| 元素     | 脱离标准流 | 定位元素 | 绝对定位元素 | 定位方法             |
| -------- | ---------- | -------- | ------------ | -------------------- |
| static   | 否         | 否       | 否           |                      |
| relative | 否         | 是       | 否           | 相对于自己原来的位置 |
| absolute | 是         | 是       | 是           | 相对于定位的祖先元素 |
| fixed    | 是         | 是       | 是           | 相对于视口           |

说明设置为absolute/fixed的元素为绝对定位元素



### 绝对定位元素的特点

```html
  <div class="box">
    <div class="content">
      <span>我是span元素</span>
    </div>
  </div>
```



* 当一个元素是绝对定位元素时,他就可以随意设置自己的宽度和高度,不管是不是一个块级元素

```css
    .content {
      width: 500px;
      height: 500px;
      background-color: greenyellow;
      position: relative;
    }

    span {
      position: absolute;
      top: 0;
      right: 0;
      width: 150px;
      height: 100px;
      background-color: red;
      color: white;
    }
```

这里span没有设置display为块级或行内块级,  但是宽度和高度的设置依然有效





* 绝对定位元素如果不设置宽高,那么就会被内容撑起来

```html
  <div>我是div元素</div>
```

```css
div{
      position: absolute;
      background-color: red;
    }
```

![image-20221123113553351](C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20221123113553351.png)

将div设置为绝对定位元素后,  div元素脱离标准流,  而且不在独占一行

  

* 绝对定位元素脱离标准流
  * 不在从上到下,  从左到右的定位
  * 不在乎元素曾经是块级元素, 行内元素,  还是行内块级元素



* 绝对定位元素不会向父元素汇报自己的宽高

```html
<div class="box">
  <span>我是span</span>
</div>
```

```css
 .box{
      background-color: red;
      position: relative;
    }
    span{
      position: absolute;
      width: 150px;
      height: 100px;
    }
```

![image-20221123114002916](C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20221123114002916.png)

这里div是由span撑起来的

由于设置为绝对定位元素不会向父元素汇报宽高,  所以父元素默认没有高度, 所以div的红色背景并没有显示



* 脱标元素内部还是按照标准流





* 与标准流不同, 绝对定位元素的父子元素尺寸计算公式如下:

  * 祖先定位元素宽度=绝对定位元素宽度+left+right+margin-left+margin-right   
  * 祖先定位元素高度=绝对定位元素高度+top+bottom+margin-top+margin-bottom   

  因此可以操控left和right来控制绝对定位元素大小,例如

  ```html
    <div class="box">
      <div class="item">我是div</div>
    </div>
  ```

  ```css
      .item {
        position: absolute;
        /* 利用绝对定位盒子计算公式, 让盒子覆盖父盒子 */
        /* 800=width+left+right+ml+mr ,让left,right,ml和mr都为0,就可以默认让盒子宽度占满盒子*/
        left: 0;
        right: 0;
        margin: 0 0;
        height: 100px;
        background-color: red;
      }
  ```

  ![image-20221123142632707](C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20221123142632707.png)

  这样虽然没有设置定位元素大小,  但是top=0,right=0,  margin也等于0,

  那么父元素宽度就等于子元素宽度,  也就会让盒子宽度占满一行, 利用这个公式还可以让盒子覆盖整个父元素,同样可以写出兼容性非常高的盒子居中

  ##### 绝对定位中的盒子居中:

  ```css
      .item {
        position: absolute;
        width: 100px;
        height: 100px;
        margin: auto auto;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        background-color: red;
      }
  ```

  利用公式,  发现父元素宽度分给了固定的盒子和两侧margin边距,  实现和传统居中对齐方式类似的对齐效果

  

