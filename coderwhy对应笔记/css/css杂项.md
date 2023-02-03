# 杂项



#### 行内元素也可以设置padding和border

效果是让边框下降

原因是行内元素padding不会占据内容的空间,  设置padding后会让盒子变大而不会让内容位移

```css
 a{
      text-decoration: none;
      color: #333;
      /* 行内元素也可以设置padding和border */
      padding: 3px 0;
      border-bottom: 1px solid #000;
    }
    span{
      padding: 3px 0;
      border-bottom: 1px solid red;
    }
```

```html
  <a href="#">我是a</a>

  <span>我是span</span>
```

![image-20221203094840169](C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20221203094840169.png)

