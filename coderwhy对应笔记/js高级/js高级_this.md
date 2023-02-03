# this

#### this共有四种绑定规则

 绑定一：默认绑定；

 绑定二：隐式绑定；

 绑定三：显示绑定；

 绑定四：new绑定；



**this绑定是在代码执行到this时才会去确定值的**

### 在标准函数中，this引用的是把函数当成方法调用的上下文对象

```JavaScript
  // 在标准函数中，this引用的是把函数当成方法调用的上下文对象
    window.color='red';
    let o={
      color:'blue'
    }
    function sayColor(){
      console.log(this.color)
    }

    sayColor();
    // 在标准函数中，这时候this引用是一个对象，这个对象调用量这个标准函数（方法），所以这里的this指向window
    window.sayColor();

    o.sayColor=sayColor;
    // 把标准函数赋值给了o这个对象的sayColor属性，这时调用这个sayColor方法，this指向.前面的对象，所以this引用的是o
    o.sayColor();

```

```JavaScript
// 对于高阶函数
    function bar(){
      console.log(this)
    }
    function foo(fn){
      fn()
    }
    // 结果依旧是window
    foo(bar)
```



### 在箭头函数中，this引用的是定义箭头函数的上下文

```JavaScript

    window.color='red'
    let o={
      color:'blue'
    }
    // 在箭头函数中，this指向的是一个上下文，这个上下文是定义箭头函数的上下文，因为sayColor这个箭头函数定义在window这个上下文中，所以this指向window这个上下文，而且这个箭头函数会一直保留这个this指向
    let sayColor=()=>console.log(this.color)

    sayColor();
    // o中的sayColor属性的值被一个箭头函数赋予
    o.sayColor=sayColor
    // 箭头函数的this一直指向定义箭头函数的上下文，在这里也就是this一直指向window。所以o调用这个方法得到的是red。
    o.sayColor()
```

```JavaScript
 // 用let定义的变量不属于window对象的属性
    // let color='brown'
    window.color = 'blue'
    color = 'yellow'
    function sayColor1() {
      setTimeout(() => {
        console.log(this.color)
      }, 1000)
    }
    function sayColor2() {
      setTimeout(function () { console.log(this.color) }, 1000)
    }
    let o = {
      color: 'red',
      sayColor1: sayColor1,
      sayColor2: sayColor2
    }
    // sayColor1是一个普通函数，被赋予到o这个对象上当做方法，this指向.前面的o，sayColor里面定义了箭头函数，箭头函数的this指向定义他的作用域，所以指向了o
    o.sayColor1()
    // 由于setTimeout里面定义的是一个普通函数，1s后再次调用时已经是window在调用了，所以window是这个this的指向。
    //另一点说明，延迟回调函数第一个参数函数的调用者是window对象,在node.js中，this指向计时器对象
    o.sayColor2()
```



箭头函数附加:

箭头函数查找作用域, 是查找函数和代码块的作用域.  对象不构成作用域.

箭头函数本身没有this,  他的this是在上层作用域中查找,  就像查找一个变量一样,在对象中设置的属性不是变量,  自然对象中找不到this变量

![image-20230108221000327](C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20230108221000327.png)

![image-20230108221633223](C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20230108221633223.png)





### new绑定时的this

**什么是new绑定**

new绑定源于构造函数,  构造函数专门用于用简单方式构造复杂对象,且构造函数一般有两个约定:

1. 它们的命名以大写字母开头。
2. 它们只能由 `"new"` 操作符来执行。

```JavaScript
function User(name) {
  this.name = name;
  this.isAdmin = false;
}

let user = new User("Jack");

alert(user.name); // Jack
alert(user.isAdmin); // false
```

当一个函数被使用 `new` 操作符执行时，它按照以下步骤：

1. 一个新的空对象被创建并分配给 `this`。
2. 函数体执行。通常它会修改 `this`，为其添加新的属性。
3. 返回 `this` 的值。

换句话说，`new User(...)` 做的就是类似的事情：

```JavaScript
function User(name) {
  // this = {};（隐式创建）

  // 添加属性到 this
  this.name = name;
  this.isAdmin = false;

  // return this;（隐式返回）
}
```

所以 `new User("Jack")` 的结果是相同的对象：

```JavaScript
let user = {
  name: "Jack",
  isAdmin: false
};
```

从技术上讲，任何函数（除了箭头函数，它没有自己的 `this`）都可以用作构造器。即可以通过 `new` 来运行，它会执行上面的算法。“首字母大写”是一个共同的约定，以明确表示一个函数将被使用 `new` 来运行。



### 显式绑定

使用call,apply和bind的方式绑定

call,apply,bind的区别:

* call后面的参数是参数列表
* apply后面跟一个数组,数组里面放入参数
* bind后面放入默认添加到新函数中的值

```JavaScript
   // 显式绑定
    function sayHi(){
      console.log('hi',this.name)
    }
    let o={
      name:'foo'
    }

    sayHi.call(o)
    sayHi.apply(o)
    let fn=sayHi.bind(o)
    fn()
```





### 内置函数的绑定

有些时候，我们会调用JavaScript中的内置函数，或者第三方库中的内置函数。

通常这些内置函数的this绑定的对象需要经验

```JavaScript
 // 内置函数的绑定
    let btnEl=document.querySelector('button')
    btnEl.onclick=function(){
      console.log(this===btnEl)//true
    }

    btnEl.addEventListener('click',function(){
      console.log(this===btnEl)//true
    })

    setTimeout(function(){
      console.log(this)//window
    },1000)

    let arr=['abc','cba','nba']
    arr.forEach(function(item){
      console.log(this)

    },'obj')
```



### 绑定优先级

1 默认绑定

2 隐式绑定

3 显式绑定

4 call/apply绑定

5 bind绑定

6 new 构造函数的空对象

```JavaScript
 // 绑定优先级
    function foo() {
      console.log(this)
    }

    let obj = {
      name: 'obj',
      foo: foo
    }
    let o={
      name:'o'
    }
    let bar={
      name:'bar'
    }

    obj.foo()
    // 说明call/apply优先级高于隐式绑定
    obj.foo.call(o)
    obj.foo.apply(o)
    // 同样bind优先级高于隐式绑定
    let fn=obj.foo.bind(bar)
    fn()
    // 说明bind优先级高于call、apply
    fn.call(o)
    fn.apply(o)

    new obj.foo()
    // 说明new优先级高于bind
    new fn()
    console.log('first')
    // new 不能与call、apply连用
    let newvar=new obj.foo.call(o)
```

