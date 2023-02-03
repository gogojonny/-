# css兄弟选择器

##### 兄弟选择器会选择当前元素下面的兄弟,如果使用``+``就是选择+后面最近的兄弟,使用+后面的内容如果不紧邻就不会显示.   如果使用~就选择~后面的所有兄弟

临近兄弟选择器``.content+div``

所有兄弟选择器``.content~div``

```JavaScript
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    /* 兄弟选择器: +选择下面的兄弟,不选择自己 ,使用+只选择一个紧邻的兄弟*/
    .content+div {
      color: red;
    }

    /* 也是选择下面的兄弟,使用~会选择下面所以兄弟 */
    .content~div {
      font-size: 20px;
    }
  </style>
</head>

<body>
  <div class="home">
    <div class="box">哈哈哈</div>
    <div class="content">嘿嘿嘿</div>
    <div>呵呵呵</div>
    <div>吼吼吼</div>
  </div>

</body>

</html>
```

![image-20221024184029580](C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20221024184029580.png)