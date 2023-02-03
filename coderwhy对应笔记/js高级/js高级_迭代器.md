# 迭代器

#### 迭代器的基本格式

* 迭代器实现了迭代器机制,这种机制必须满足以下条件才能被叫做迭代器
* 迭代器对象内有一个next方法
* 这个next方法返回值是一个对象,可以是``{ done: false, value: arr[i++] }``或者``{ done: true }``

```JavaScript
 let arr = [1, 2, 3]
  let i = 0
  let arrIterator = {
    next: function () {
      if (i < arr.length) {
        return { done: false, value: arr[i++] }
      } else {
        return { done: true }
      }
    }
  }

  console.log(arrIterator.next());
  console.log(arrIterator.next());
  console.log(arrIterator.next());
  console.log(arrIterator.next());
```

![image-20221106171447448](C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20221106171447448.png)



上一个迭代器只是单独实现了一个对象的迭代,如果想对多个对象进行迭代,可以使用一个函数来构造每个对象的迭代器

```JavaScript
 let arr = ['foo', 'bar', 'baz']
  let nums = [1, 2, 3, 4, 5]

  // 迭代器给数组解耦合
  function createIterator(array) {
    let index = 0;
    return {
      next: function () {
        if (index < array.length) {
          return { done: false, value: array[index++] }
        } else {
          return { done: true }
        }
      }
    }
  }

  let arrIterator=createIterator(arr)
  console.log(arrIterator.next());
  console.log(arrIterator.next());
  console.log(arrIterator.next());
  console.log(arrIterator.next());

  let numsIterator=createIterator(nums)
  console.log(numsIterator.next());
  console.log(numsIterator.next());
  console.log(numsIterator.next());
  console.log(numsIterator.next());
```

![image-20221106171834157](C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20221106171834157.png)



#### 迭代器对象



正常来说,一个对象是不能被for...of循环迭代的,但是当我们给它设置迭代器的时候,就可以使用迭代

一种方式是迭代对象内的某一属性

```JavaScript
let obj = {
    friends: ['kobe', 'curry', 'james'],
    // 设置可迭代对象需要一个[Symbol.iterator]()函数,这个函数返回一个迭代器,这样这个对象就变成可迭代对象了
    [Symbol.iterator]() {
      let index = 0;
      return {
        next() {
          if (index < obj.friends.length) {
            return { done: false, value: obj.friends[index++] }
          } else {
            return { done: true }
          }
        }
      }
    }
  }

 // 正常来说,obj不是一个可迭代对象,除非将它设置为一个可迭代对象
  for(let value of obj){
    console.log(value);
  }
```

![image-20221106172130327](C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20221106172130327.png)

另一种是迭代对象的属性键或者属性值,甚至属性键和值都可以迭代

```JavaScript
  // 迭代器的实现定义了遍历可迭代对象的方法
  let foo = {
    name: 'foo',
    age: 19,
    address: 'china',
    [Symbol.iterator]() {
      let index = 0;
      // 按照实现不同,遍历不同的内容
      let keys = Object.keys(foo);
      let values = Object.values(foo)
      let entries = Object.entries(foo)

      let iterator = {
        next: () => {
          if (index < keys.length) {
            return { done: false, value: keys[index++] }
          } else {
            return { done: true }
          }
        }
      }
      return iterator
    }
  }

  for (let key of foo) {
    console.log(key);
  }
```

![image-20221108220804604](C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20221108220804604.png)

根据``[Symbol.iterator]()``的实现不同,  可以迭代不同的内容。

#### JavaScript中的可迭代对象

在JavaScript中有很多天然的可迭代对象，例如数组，集合，map，arguments，字符串之类的。实际上这种天然的可迭代对象内部都实现了``[Symbol.iterator]()`` 可以调用这些可迭代对象的迭代器构造函数，来获取迭代器

```JavaScript
  //数组是一个天生的可迭代对象,自身内部实现了迭代器
  let nums=[1,2,3,4,5]
  // 获取数组内部的迭代器生成函数
  let numsIterator=nums[Symbol.iterator]()
  console.log(numsIterator);
  console.log(numsIterator.next());
  console.log(numsIterator.next());
  console.log(numsIterator.next());
  console.log(numsIterator.next());
  console.log(numsIterator.next());
  console.log(numsIterator.next());
```

![image-20221108221453045](C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20221108221453045.png)

#### 可迭代对象的应用

可迭代对象可以应用在yield*,...操作符,解构.创建map,weakMap,set,weakSet等。还有for...of语法,在一些方法中,例如promise.all(),promise.race()当创建方法时指定可以填入iterator就可以应用可迭代对象

```JavaScript
  let arr = [0, 1, 2, 3, 4]
  // 利用数组内的迭代器将值拆出来并传递给log
  console.log(...arr);
  // from接收一个可迭代对象，所以from并不局限于数组
  let nums = Array.from(arr)
  console.log(nums);
  let obj = {
    name: 'foo',
    age: 18,
    address: 'china'
  }
  // 对象解构破例可以使用对象解构，但是不能用...来解构非可迭代对象
  let { name, age } = obj
  console.log(name, age);
  // Found non-callable @@iterator
  console.log(...obj);
```

![image-20221108222117487](C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20221108222117487.png)

当是一个可迭代对象时，就可以使用...来解构对象

```javascript
  let foo = {
    name: 'bar',
    age: 20,
    address: 'uk',
    [Symbol.iterator]() {
      let index = 0;
      let values = Object.values(foo)
      return {
        next: () => {
          if (index < values.length) {
            return { done: false, value: values[index++] }
          } else {
            return { done: true }
          }
        }
      }
    }
  }

  let { name, age, address } = foo
  let [c, d] = foo
  console.log(name,age,address);
  console.log(c, d);
  //设置了迭代器
  console.log(...foo);
```

![image-20221108222305598](C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20221108222305598.png)



#### 迭代器类

创建一个对象我们通常会先创造他的类,如果想让这个类的所有对象都具有可迭代功能,就需要在类上添加一个[symbol.iterator],这样创建的对象会按照原型找到这个类方法,需要注意,类中的next需要用箭头函数,来获取正确的this

```JavaScript
 class Person {
    constructor(name, age, height, friends) {
      this.name = name;
      this.age = age;
      this.height = height
      this.friends = friends
    }

    [Symbol.iterator]() {
      let index = 0;
      return {
        next: () => {
          if (index < this.friends.length) {
            return { done: false, value: this.friends[index++] }
          } else {
            return { done: true }
          }
        }
      }
    }
  }

  let p1 = new Person('foo', 10, 1.20, ['bar', 'baz', 'rdx'])
  let p2 = new Person('bar', 20, 1.80, ['foo', 'baz', 'rdx'])
  for(let friend of p1){
    console.log(friend);
  }
```

#### 迭代器可以监听迭代中断

在迭代器内设置return方法,当迭代器中断例如for...of循环中途break,或者return,throw,或者解构没有解构完,都会调用这个return方法

#### 生成器替代迭代器

在我们创建迭代器对象时,往往需要在类中定义[symbol.iterator]()这样的迭代器函数,如果用生成器来代替迭代器,那么就会很方便

```JavaScript
    // 以往写获取数组迭代器的方法很复杂,但是迭代器可以完美代替这部分的代码
    class Foo {
      constructor(friends) {
        this.friends = friends
      }
      [Symbol.iterator]() {
        let index = 0;
        return {
          next: () => {
            if (index < this.friends.length) {
              return { done: false, value:                               this.friends[index++] }
            } else {
              return { done: true }
            }
          }
        }
      }
    }
    let foo = new Foo(['bar', 'baz', 'rdx'])
    for (let friend of foo) {
      console.log(friend);
    }
```

![image-20221110103730589](C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20221110103730589.png)

用生成器代替迭代器

```JavaScript
    // 重构后的Foo
    class Foo {
      constructor(friends) {
        this.friends = friends
      }
      *[Symbol.iterator]() {
        for (let i = 0; i < this.friends.length; i++) {
          yield this.friends[i]
        }
      }
    }

    let foo = new Foo(['bar', 'baz', 'rdx'])
    for (let friend of foo) {
      console.log(friend);
    }
```

![image-20221110103818004](C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20221110103818004.png)

可以观察到,结果是相同的，但是迭代器函数却少了很多。其实本质上这两部分的输出是相同的，在for。。。of循环中，会调用foo的【symbol.iterator】，两段代码返回的都是迭代器（生成器也叫特殊的迭代器），同样会调用迭代器中的next方法，而且两段代码返回的都是含有done属性和value属性的对象。

然而还没完，还可以继续重构，利用yield*这个语法糖，后面跟一个可迭代对象

```JavaScript
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

![image-20221110110000083](C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20221110110000083.png)

