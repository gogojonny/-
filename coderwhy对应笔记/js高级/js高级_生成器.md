# 生成器

#### 生成器函数与普通函数的区别

​    1.生成器函数的标志是在function后面添加一个字符:*

   2.生成器函数可以通过yield关键字来控制函数的执行

   3.生成器函数会返回一个迭代器,这个迭代器被叫做生成器

```JavaScript
    // 生成器函数function后面跟*
    function* foo() {
      console.log(111);
      console.log(222);
      yield
      console.log(333);
      console.log(444);
      yield
      console.log(555);
      console.log(666);
    }
    let generator = foo()
    // 通过生成器的next方法执行函数
    generator.next()//在第一个yield处停止,紧跟yield后面的代码也会执行
    generator.next();
    generator.next()
```

![image-20221109214933859](C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20221109214933859.png)



#### 生成器中next方法传入参数与返回值

生成器函数返回的生成器可以调用next方法,这个生成器是一个特殊的迭代器,所以生成器调用next方法也会有返回值

​    1.返回值也是{done:false,value:undefine}的形式,value值是由yield后面的内容决定

​    2.生成器的next方法可以传入参数,这是与迭代器很大的区别,传入的参数需要在yield前面定义形参,用形参来接收,且因为第一次调用时不可能使用yield,所以第一次调用next方法不能传入参数,如果必须传入参数,就需要在调用生成器函数的时候传入

​    3.yield可以看做一个特殊的return,yield后面的是调用next方法的返回值的一部分,前面就比较特殊,定义形参用于接收next传入的参数.  另外如果生成器函数是因为yield而暂停的,那么返回的done为false,否则为true

```JavaScript
    生成器函数function后面加*
    function* foo() {
      console.log('生成器内部代码', 111);
      console.log('生成器内部代码', 222);
      yield 'aaa'
      console.log('生成器内部代码', 333);
      console.log('生成器内部代码', 444);
      yield 'bbb'
      console.log('生成器内部代码', 555);
      console.log('生成器内部代码', 666);
      return 'ccc'
    }
    // 利用生成器函数生成生成器
    let generator = foo()
    console.log(generator.next());
    console.log(generator.next());
    console.log(generator.next());
```

![image-20221109215042377](C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20221109215042377.png)

```JavaScript
生成器函数function前加*
    function* bar(first) {
      console.log('生成器内部代码', 111, first);
      console.log('生成器内部代码', 222, first);
      // 在yield前定义形参用于接收next传入的参数,接收第二次传入的参数,返回第一次调用的值
      let a = yield 'aaa'
      console.log('生成器内部代码', 333, a);
      console.log('生成器内部代码', 444, a);
      let name2 = yield 'bbb'
      console.log('生成器内部代码', 555, name2);
      console.log('生成器内部代码', 666, name2);
      return 'ccc'
    }

    let generator2 = bar('第一次传入的参数')
    // 第一次调用next没法传入参数,因为没有形参可以接收参数
    console.log(generator2.next());
    console.log(generator2.next('a'));
    console.log(generator2.next('name2'));
```

![image-20221109215117069](C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20221109215117069.png)

#### 生成器的直接结束

```JavaScript
    // 生成器中调用return方法或者throw方法可以直接让done返回true,并且后续next都不会执行
    function* foo() {
      console.log(111);
      console.log(222);
      try {
        let value = yield 'aaa'
        console.log(333, value);
        console.log(444, value);

      } catch (e) {
        console.log(e);
      }

      let value = yield 'bbb'
      console.log(555, value);
      console.log(666, value);
    }

    let generator = foo()
    console.log(generator.next());
    // 调用return方法,将参数直接返回,并让后续next失效
    // console.log(generator.return('a'));
    // throw方法也可以干掉后面next,如果被捕获就把done设置为false,并继续执行,throw方法也会返回{done:boolen,value:value}
    console.log(generator.throw(new Error('next2 throw err')));
    console.log(generator.next('b'));
```

![image-20221109215240361](C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20221109215240361.png)

#### 生成器yield*语法糖

yield*后面跟可迭代对象,可以实现最小化代码达到创造可迭代对象的目的

```javascript
    // 再次重构Foo,利用yield语法糖
    class Foo {
      constructor(name, age, height, friends) {
        this.name = name;
        this, age = age;
        this.height = height;
        this.friends = friends
      }

      *[Symbol.iterator]() {
        yield* Object.entries(this)
      }

    }


    let foo = new Foo('foo', 19, 1.80, ['bar', 'baz', 'rdx'])
    for (let attr of foo) {
      console.log(attr);
    }
```

![image-20221110110321863](C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20221110110321863.png)
