# css交集选择器与并集选择器

#### 交集选择器

交集选择器是将几个需要满足要求的选择器紧挨在一起,实现选择出满足所有选择器的元素

例如``div.box``

或者``div.box#content``选择满足三者的元素

```JavaScript
<style>
    /* 交集选择器: 标签名与类名紧挨在一起,进而选择既满足div标签又满足类的元素 */
    div.box {
      color: red;
      font-size: 20px;
    }
  </style>
</head>

<body>
  <!-- 交集选择器 -->
  <div class="box">哈哈哈</div>
  <p class="box">嘿嘿嘿</p>

</body>
```

![image-20221024185957196](C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20221024185957196.png)

#### 并集选择器

并集选择器: 用逗号分割,只要满足一条就赋予样式

```JavaScript
 <style>
   /* 并集选择器: 用逗号分割,只要满足一条就赋予样式 */
    div,
    p,
    span,
    h4 {
      color: red;
      font-size: 20px;
    }
  </style>
</head>
<body>
  <div>呵呵呵</div>
  <p>嗨嗨嗨</p>
  <span>吼吼吼</span>
  <h4>哼哼哼</h4>

</body>
```



![image-20221024190622941](C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20221024190622941.png)

