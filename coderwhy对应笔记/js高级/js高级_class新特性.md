# class新特性

class在新版本添加了许多新特性,不过有些特性目前还没有流行

## 实例属性

其中对象的属性一般要构造器来创建,但是现在可以直接创建了,还有一个约定俗成的私有属性写法

```JavaScript
 class Person{
      //正常实例属性可以通过constructor构造器来创建
      constructor(name,age){
        this.name=name;
        this.age=age;
        this.address="618";
      }

      //除此之外还可以直接添加
      height=190;
      weight="65kg";

      //如果不想让外部访问实例属性,可以在属性名之前加_
      _private="private";//但是实际上可以访问到,不过约定俗成带有_的就不要去外部访问他
    }

    let p=new Person("matt",26)
    console.log(p.height);
    console.log(p.weight);
    // 实际可以访问带_的实例属性
    console.log(p._private);
```

![image-20221004210932357](C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20221004210932357.png)



```JavaScript
 class Person{
      #private="private";
    }
    let p=new Person()
    // 访问private会出现undefined
    console.log(p.private);
    // 访问#private会直接报错
    console.log(p.#private);
   
```

![image-20221004211458107](C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20221004211458107.png)

## 类属性

除了实例属性外还有类属性,需要使用static关键词

```JavaScript
 class Person{
      constructor(name){
        this.name=name;
      }

      static address="618";
      // 同样加上#后依旧无法外部访问
      static #private="private";
    }
    let p=new Person("matt")
    console.log(p.address);
    console.log(Person.address);
    console.log(Person.private);
```

![image-20221004211959978](C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20221004211959978.png)

## 静态代码块

```JavaScript
 class Person{
      constructor(name){
        this.name=name;
      }

      static address="618";
      // 同样加上#后依旧无法外部访问
      static #private="private";

      //还有静态代码块,在声明class的时候就可以执行,一般可以用作初始化操作
      static{
        console.log("abc");
        console.log("def");
      }
    }
```

![image-20221004213220642](C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20221004213220642.png)

