# text-align详解

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    .box{
      background-color: red;
      height: 500px;
      text-align: center;

    }
    .content{
      background-color: yellow;
      height: 200px;
      width: 200px;
      /* display: inline-block; */
      margin: 0 auto;
    }
  </style>
</head>
<body>
  <div class="box">
    <!-- <span>hei</span> -->
    <!-- <p>ha</p> -->
    <!-- <img src="../coderwhy/" alt=""> -->
    <div class="content"></div>
  </div>
</body>
</html>

```

text-align属性专门对行内元素或者行内块元素生效，对块级元素无法生效，例如对div用text-align的方式设置居中是不能生效的，但是对于文字，图片，或者p标签都可以生效。

另外，如果想让行内元素水平居中，可以使用margin：0 auto，的方式。