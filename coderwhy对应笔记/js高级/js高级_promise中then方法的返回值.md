# promise中then方法的返回值

##### then方法的返回值

当我们第一次调用then方法时,很明显res是我们使用resolve('aaaa')返回的aaaaa,但是紧接着调用then的时候,发现res的值是bbbb,也就是第一次调用then方法的返回值,链式调用第三个then的时候,由于上一个then没有return任何内容,所以res为undefined,看得出来,在第一次调用then的时候,res和resolve的参数有关,紧接着调用then的时候,和第一次的then的返回值有关,第三次由于第二次没有返回值所以res为undefined,说明res也和then的返回值有关.

另一方面,我们知道then方法返回的值实际上是期约,而不是我们在then的执行函数中的返回值(bbbbb),实际在内部,then会先new一个新的promise,并且把执行函数的返回值作为resolve的参数(reject的参数)返回,这样下一次调用then时,res理所应当的拿到新的promise里resolve的参数值并作为自己的值



##### then方法返回期约的决议时刻

当执行函数有返回值或者执行函数内部出错的时候会确定返回的期约的状态





```JavaScript
 <script>
    // promise链式调用时then的返回值
    let promise = new Promise((resolve) => {
      resolve('aaaaa')
    })

    // 链式调用
    promise.then((res) => {
      console.log('这是promise调用的第二个then方法:', res);
      return 'bbbb'
    }).then(res => {
      console.log(res);

    }).then(res => {
      console.log(res);
    })

    // promise的第二个then方法
    promise.then(res => {
      console.log('这是promise调用的第二个then方法:', res);
    })
  </script>
```

![image-20221025213638561](C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20221025213638561.png)



##### then的返回值是新建的期约或者一个thenable对象的时候

我们已知then方法返回的期约状态是由执行函数决定,如果执行函数返回一个新的期约,那么就会类似于出现这种情况``resolve(new Promise)``,这个时候期约的状态就由传入的期约决定,在这里传入的期约要在三秒后才会执行resolve,所以,第二个then方法也会在三秒后执行.

当返回一个thenable的对象的时候,返回值由这个对象中的then方法决定.then方法中可以是一个resolve也可以是一个reject.

```JavaScript
<script>
    // 当then的return结果是一个新的期约或者一个thenable的对象时
    let promise = new Promise((resolve) => {
      resolve('aaaaa')
    })

    // 创建新的期约
    let newPromise = new Promise((resolve) => {
      setTimeout(() => {
        resolve('bbbbb')

      }, 3000);
    })

    promise.then(res => {
      console.log('第一次调用then:', res);
      return newPromise

    }).then(res => {
      console.log('三秒后');
      console.log('第二次调用then:', res);
      // 返回一个thenable的对象
      return {
        then: function (resolve) {
          resolve('thenable')
        }
      }
    }).then(res => {
      console.log('第三次调用then:', res);
    })
  </script>
```



![image-20221025215813123](C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20221025215813123.png)

