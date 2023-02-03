# FinalizationRegistry

FinalizationRegistry是es12新出的监听对象是否被垃圾回收的机制,可以在对象被垃圾回收时做一些回调函数的事情

```JavaScript
let foo={name:"foo",age:20};

//声明一个实例
let finalRegister=new FinalizationRegistry((value)=>{
  console.log("对象已经被垃圾回收:",value);
})

finalRegister.register(foo,"foo")//将要监听的对象注册到实例中,第二个参数是传入回调函数的参数


foo=null;//当foo设置为null时,GC会把对象当做垃圾回收
```

![image-20221002101902679](C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20221002101902679.png)

在GC中,对一个对象的引用可以分为强引用和弱引用，如果想回收这个对象就需要把所有的强引用全部清除掉，否则这个对象会一直保留。相对应的还有一个弱引用，弱引用的目的就是拿取对象的值，如果这个对象被垃圾回收，那么弱引用就无法再次引用这个对象

```JavaScript
let foo = { name: "foo" };
let baz=foo;

//必须都使用null才能回收对象
foo=null;
baz=null;
```

```JavaScript
let foo = { name: "foo" };
let baz=foo;

let bar = new WeakRef(foo);//可以使用weakRef来做弱引用

```

**GC 在一个 JavaScript 引擎中的行为有可能在另一个 JavaScript 引擎中的行为大相径庭，或者甚至在同一类引擎，不同版本中 GC 的行为都有可能有较大的差距**。因此目前应该尽量避免使用这个弱引用



