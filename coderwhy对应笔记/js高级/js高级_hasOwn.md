# Object.hasOwn

objcet.hasOwn与hasOwnProperty有着相同的作用,不过hasOwn更多的修补了hasOwnProperty的缺点

```JavaScript
let o = {
      name: "foo",
      age: 20,
      __proto__: {
        address: "216"
      }

    }
// 正常Object.hasOwn方法与hasOwnProperty一样，hasOwn更多的修补了hasOwnProperty的缺点
    console.log(o.hasOwnProperty("name"));
    console.log(o.hasOwnProperty("age"));
    console.log(o.hasOwnProperty("address"));
    console.log("----------");
    console.log(Object.hasOwn(o, "name"));
    console.log(Object.hasOwn(o, "age"));
    console.log(Object.hasOwn(o,"address"));
```

![image-20221004204418863](C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20221004204418863.png)

## 修复的缺点1,可能在对象内定义hasOwnProperty同名方法

如果在对象内部定义了hasOwnProperty的方法,那么就不会执行这个对象Object原型上的hasOwnProperty方法,这时候Object.hasOwn就可以完美替代这个方法.

```JavaScript
 let o = {
      name: "foo",
      age: 20,
      __proto__: {
        address: "216"
      },
      hasOwnProperty: function(e){
        return "abc"
      }

    }
// 正常Object.hasOwn方法与hasOwnProperty一样，hasOwn更多的修补了hasOwnProperty的缺点
    console.log(o.hasOwnProperty("name"));
    console.log(o.hasOwnProperty("age"));
    console.log(o.hasOwnProperty("address"));
    console.log("----------");
    console.log(Object.hasOwn(o, "name"));
    console.log(Object.hasOwn(o, "age"));
    console.log(Object.hasOwn(o,"address"));
```

![image-20221004204647381](C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20221004204647381.png)

## 修复对象原型没有hasOwnProperty这个方法的情况

使用Object.creat方法会创造一个原型为传入参数的对象.如果这个对象的原型是null,那么就无法找到hasOwnProperty这个方法

```JavaScript
let o=Object.create(null)
    o.name="foo";
    o.age=29;
    
    // console.log(o.hasOwnProperty("name"));
    // console.log(o.hasOwnProperty("age"));
    // console.log(o.hasOwnProperty("address"));
    console.log("----------");
    console.log(Object.hasOwn(o, "name"));
    console.log(Object.hasOwn(o, "age"));
    console.log(Object.hasOwn(o,"address"));
```

![image-20221004204950552](C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20221004204950552.png)