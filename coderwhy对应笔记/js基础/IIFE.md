# IIFE

#### iife:立即执行函数的几本使用

```html
<script>
    //基本语法
    ; (function () {
      console.log('立即执行')
    })()

      // 使用场景
      // 立即执行函数拥有自己独立的作用域，外部作用域无法访问立即执行函数内的变量与函数。防止引入文件后出现变量混乱的问题。
      // ;的作用是防止前面没有写分号导致出现的错误。
      ; (function () {
        let newVar = 'foo'
        console.log(newVar)
      })()
    // 由于newVar在内部作用域，所以无法访问。
    // console.log(newVar)
  </script>
```



#### iife的扩展用法

// 如果想使用new.js中的message变量该怎么办

// 可以使用外部模组对象

在new.js中

```javascript
let outsideModel=(function(){
  let outsideModel={}
  let message='foo'
  console.log(message)
  outsideModel.message=message
  return outsideModel
})()
```

在utile.js中

```javascript
console.log(outsideModel.message)
```

这样虽然message被封到作用域内了，但是借助outsideModel依旧可以使用这个变量。

另外出现这种情况ES6有一种新的方法，那就是使用esModel





#### 一些早期应对var定义的变量时没限制作用域的场景

```html
  <input class="btn" type="button" value="按钮1">
  <input class="btn" type="button" value="按钮2">
  <input class="btn" type="button" value="按钮3">
  <input class="btn" type="button" value="按钮4">
  <script>

    // 早期应用场景
    var btnEls = document.querySelectorAll('.btn')

    for (var i = 0; i < btnEls.length; i++) {
      var btn = btnEls[i];
      // 为了使用这些数字，每次定义行为时都需要把对应的数字存到对应的作用域中，在点击时使用被存储的数字

      ; (function (m) {
        btn.onclick = function () {
          console.log('按下按钮', m + 1)
        }
      })(i)

    }
    //var是在函数作用域中，因此在for循环中可以使用，在for循环外也可以使用。
    console.log(i)
    console.log(btn)

  </script>
```





### 扩展

#### let与var的区别

let与var最大的区别就是作用域的区别

* let的作用域是块级作用域，比var的作用域小，而且只能在for循环内使用

* var的作用域是函数作用域，定义在函数中就只能在函数中使用，但是定义在块级作用域例如for循环中，就可以在for循环外使用，有些类似于这样

  ```javascript
  for(var i=0;i<10;i++){
      console.log(i)
  }
  //等价于
  var i;
  for(i=0;i<10;i++){
      consloe.log(i)
  }
  ```

另外的区别是，var可以在同一作用域重复声明，但是let不可以

