# css中设置变量

css中可以设置变量,  然后通过var()函数来使用,例如下面

```html
<!DOCTYPE html>
<html lang="en">
<head>
  
  <style>
    :root{
      --main-color:#f00;
    }
    .box{
      color: var(--main-color);
    }
    .content{
      color: var(--main-color);
    }

  </style>
</head>
<body>
  <div class="box">我是box</div>
  <div class="centent">我是content</div>
  
</body>
</html>
```

一般在:root或者在html标签中定义变量,这样他的后代元素都可以使用这个变量,  定义变量的方法是使用--加变量名