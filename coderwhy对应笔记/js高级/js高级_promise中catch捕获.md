# promise中的catch捕获

如果promise状态变为reject,会直接找到**最近的**catch并执行

当then中遇到如下情况时,返回的期约状态变为reject

* 在then的执行函数中throw错误
* 遇到yield
* return一个期约,且这个期约状态为reject



```JavaScript
<script>
    // 当期约状态为reject时,如果后面有定义catch,会直接找到该reject
    let promise = new Promise((resolve, reject) => {
      reject(new Error("err"))
    })

    promise.then(res => {
      console.log('调用的第一个then方法');
    }).then(res => {
      console.log('调用的第二个then方法');
    }).catch(err => {
      // 如果promise状态变为reject,会直接找到最近的catch并执行
      console.log('捕获到错误:', err);
    })
  </script>
```

![image-20221025223311355](C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20221025223311355.png)

