# css高斯模糊

css高斯模糊在某些情况需要加蒙层,这时候可以这样设置

```html
<!DOCTYPE html>
<html lang="en">

<head>
 
  <style>
    .box {
      display: inline-block;
      position: relative;
      filter: blur(5px);
    }

    .box img {
      width: 800px;
      vertical-align: bottom;
    }

    .cover {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, .4);
    }
  </style>
</head>

<body>
  <div class="box">
    <img src="../images/mhxy.jpg" alt="">
    <div class="cover"></div>

  </div>

</body>

</html>
```

