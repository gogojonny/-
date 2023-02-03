# Element.setAttribute()

Element.setAttribute()通常给元素设置属性,两个参数必须是字符串.

下面代码中在button中由于第二个参数传入的不是字符串,所以在浏览器中代码变成了下面图片的形式,onclick属性值变成了undefined,但是将第二个参数改为字符串,就可以完美解决这个问题,解决方案如下

`` button.setAttribute('onclick',' sayHello()')``

```JavaScript
<body>

  <div id="box">我也是div</div>

  <input type="button" value="button" id="button" >
  <script>
    let div = document.getElementById('box')
    div.setAttribute('style', 'height:300px;')
    // 反复使用会覆盖同名属性
    div.setAttribute('style', 'background-color:red;')
    let str = div.getAttribute('style')
    console.log(typeof str);//string 说明传入的第二个参数是字符串

    let button = document.getElementById('button')
    button.setAttribute('onclick', sayHello())//按钮变得无法点击,因为传入的sayhello变为字符串,所以在input中的onclick会变成undefined
    function sayHello() {
      alert('hello')
    }


  </script>
</body>
```



![image-20221025233137980](C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20221025233137980.png)

