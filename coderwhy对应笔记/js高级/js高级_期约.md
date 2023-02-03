# 期约



## Promise.then

### 基本使用

promise.then会接收执行器中resolve的参数，如果参数还是个期约的话，不会立即返回这个期约，而是等待这个期约状态改变，并返回改变后的解决值。此外，这个新的promise会决定之前promise的状态。

```JavaScript

let p = new Promise((resolve,reject)=>{
setTimeout(resolve("第二个resolve"),2000)
})

let promise = new Promise((resolve, reject) => {
  resolve(p);
});

promise.then((value)=>{
      console.log(value);
})

```

![image-20221016170150894](C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20221016170150894.png)如果在resolve传入的参数中有包括then方法，会去调用这个then方法，并根据这个then方法的结果决定promise的状态，then方法需要一个resolve和reject用于确定promise会变成什么状态，有点类似于用then写的执行器

```JavaScript
let promise = new Promise((resolve, reject) => {
  //resolve期待一个thenable对象
  resolve({
    then: function (resolve) {
      let a=resolve;
      
      a("hello")
    },
  });
});

promise.then((value) => {
  console.log(value);
});
```

![image-20221016173120766](C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20221016173120766.png)



### then与catch回调的一些细节

期约状态改变会通知所有的then和catch,每一个都会执行

```javascript
//期约状态改变会通知所有的then和catch
let p=new Promise((resolve,reject)=>{
      resolve("hello")
})

p.then((value)=>{
      console.log(value);
})
p.then((value)=>{
      console.log(value);
})
p.then((value)=>{
      console.log(value);
})
p.then((value)=>{
      console.log(value);
})
```

![image-20221016175150145](C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20221016175150145.png)



当期约状态改变为reject时,promise也会通知then,如果没有在then内写入onReject函数,就会报错显示未捕获到错误

```JavaScript
let p = new Promise((resolve, reject) => {
  reject("err");
});

p.then(value=>{
      console.log(value);
})

p.catch(err=>{
      console.log(err);
})
p.catch(err=>{
      console.log(err);
})
p.catch(err=>{
      console.log(err);
})
p.catch(err=>{
      console.log(err);
})
```

![image-20221016175328623](C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20221016175328623.png)

如果在没有写onReject函数的后面跟随catch方法,就可以重新捕获到这个错误,这也是为什么有promise.then().catch()方法可以使用的原因

```JavaScript
p.then((value) => {
  console.log(value);
}).catch((err) => {
  console.log(err);
});
```

![image-20221016175401113](C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20221016175401113.png)