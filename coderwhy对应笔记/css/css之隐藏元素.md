# 如何隐藏css中的元素

* display:none  特点:设置后元素看不见,并且没有占用空间

```JavaScript
<style>
    .box1{
      display: none;
    }
  </style>
</head>
<body>

  <!-- 隐藏元素的几个方法 -->
  <!-- display:none  特点:设置后元素看不见,并且没有占用空间 -->
  <div class="box1">嗨嗨嗨</div>
  <div class="box2">来啦</div>
```

![image-20221028161423831](C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20221028161423831.png)

*  visibility:hidden  特点:设置后元素看不见,但是会占用空间 

```JavaScript
 <style>
    .box1{
      visibility: hidden;
    }
  </style>
</head>
<body>

  <!-- 隐藏元素的几个方法 -->
  <!-- display:none  特点:设置后元素看不见,并且没有占用空间 -->
 
  <!-- visibility:hidden  特点:设置后元素看不见,但是会占用空间 -->
  <div class="box1">嗨嗨嗨</div>
  <div class="box2">来啦</div>
```

![image-20221028161541723](C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20221028161541723.png)

可以发现,这里嗨嗨嗨占用了原来的空间,并且不可以选中

* opacity:0  特点:设置后元素看不见,但是有占用空间,不可以被选中

```JavaScript
 <style>
    .box2{
      opacity: 0;
    }
  </style>
</head>
<body>
  <!-- opacity:0  特点:设置后元素看不见,但是有占用空间 -->
  <div class="box1">嗨嗨嗨</div>
  <div class="box2">来啦</div>
  <div class="box3">虽然不是同一时间</div>
```

![image-20221028161822181](C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20221028161822181.png)



* color:rgba(0,0,0,0)  特点:元素完全透明,但是可以被选中,占用空间

```JavaScript
 <style>
    .box2{
      color: rgba(0, 0, 0, 0);
    }
  </style>
</head>
<body>
  <!-- opacity:0  特点:设置后元素看不见,但是有占用空间 -->
  
  <!-- color:rgba(0,0,0,0)  特点:元素完全透明,但是可以被选中,占用空间 -->
  <div class="box1">嗨嗨嗨</div>
  <div class="box2">来啦</div>
  <div class="box3">虽然不是同一时间</div>
```

![image-20221028161934964](C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20221028161934964.png)

虽然字体变透明了,但是还是可以被选中