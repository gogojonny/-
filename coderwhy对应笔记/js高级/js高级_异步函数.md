# 异步函数

##### 异步函数的基本写法

let方式,定义方式，箭头函数，类中方法都可定义为异步函数

```JavaScript
// 异步函数的基本写法
    async function foo() {
    }
    foo()

    let bar = async function () { }

    let baz = async () => { }

    class Foo {
      async running() { }
    }
```

##### 异步函数的返回值

异步函数返回一个resolve的期约,如果在异步函数内部出现错误,就会包裹这个错误并返回一个reject的期约

```JavaScript
    async function foo() {
      console.log('hello');
      '123'.filters()
      console.log('world');
      // 因为返回的是一个resolve的期约,所以如果返回的是期约,那么就接替这个包装的期约,如果是一个thenable对象,就会执行里面的then()方法
      return 'hello world'

    }
    foo().then(value => {
      console.log(value);
    }).catch(err => {
      console.log(err);
    })
```

![image-20221114002633159](C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20221114002633159.png)