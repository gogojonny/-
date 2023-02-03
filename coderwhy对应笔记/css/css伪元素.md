# css伪元素

伪元素选择器在某一元素后面加上``::伪元素名``的方式创建,是十分重要的元素选择器.



```JavaScript
 <style>
    div{
      width: 600px;
    }
    /* 将第一行加粗 */
    div::first-line{
      font-weight: 700;
    }
    /* 将第一个字变大 */
    div::first-letter{
      font-size: 30px;
    }
  </style>
</head>

<body>
<div>
  初步核算，前三季度国内生产总值870269亿元，按不变价格计算，同比增长3.0%，比上半年加快0.5个百分点。分产业看，第一产业增加值同比增长4.2%，第二产业增加值同比增长3.9%，第三产业增加值同比增长2.3%。分季度看，一季度国内生产总值同比增长4.8%，二季度增长0.4%，三季度增长3.9%。从环比看，三季度国内生产总值增长3.9%。
</div>
</body>
```

![image-20221024205957342](C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20221024205957342.png)

## 利用css伪元素分别添加热点图,方块,内容

伪元素中最常用的是::before和::after

```JavaScript
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    .before {
      font-weight: bold;
      color: orange;
    }

    .after {
      font-weight: bold;
      color: green;
    }

    .box2::before {
      content: "123";
      font-weight: bold;
      color: orange;
    }

    .box2::after {
      content: "321";
      font-weight: bold;
      color: green;
    }

    .box3::before {
      content: "1";
      font-weight: bold;
      color: red;
    }

    /* .box3::after{
      content: url(./svg.svg);
      font-size: 20px;
    } */
    .box4::before {
      content: "1";
      font-weight: bold;
      color: red;

    }
    .box4::after{
      content: "";
      display: inline-block;
      width: 8px;
      height: 8px;
      background-color: red;
      position: relative;
      left: 10px;
      top: -3px;
    }
  </style>
</head>

<body>
  <!-- 如果不添加伪元素,想在一段文本前后加入元素 -->
  <div class="box1">
    <span class="before">123</span>
    我是div1
    <span class="after">321</span>
  </div>

  <!-- 通过伪元素给一段文本添加样式 -->
  <div class="box2">
    我是div2
  </div>

  <!-- 通过伪元素添加图片 -->
  <div class="box3">
    我是div3
  </div>
  <!-- 通过伪元素添加一个块 -->
  <div class="box4">我是div4</div>

</body>

</html>
```

![image-20221025190059968](C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20221025190059968.png)

