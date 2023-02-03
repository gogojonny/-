# proxy做监听

proxy会创建源对象的一个代理,创建函数的第二个参数就是监听器,且这个监听器只对代理有效而对源对象无效,此后代理的各种操作只要在监听器上出现就会按照监听器上的程序来执行.

```JavaScript
 <script>
    let obj = {
      name: "foo",
      age: 28,
      sex: "male"
    }

    // 利用proxy做监听优点很多,可以监听对象的各种操作,删除,修改,增加等等
    let objProxy = new Proxy(obj, {
      set(target, key, newVal) {
        console.log(`修改了${key}`);
        target[key] = newVal
      },
      get(target, key) {
        console.log(`获取了${key}`);
        return target[key]
      }
    })
    // 对对象的监听改为对代理的监听
    console.log(objProxy.name);
    console.log(obj.name);

    obj.name="matt"//不会监听源对象
    objProxy.name="kobe"//会监听代理
    console.log(objProxy.name);
    console.log(obj.name);//不会监听源对象

    objProxy.address = "618"//可以添加源对象没有的属性,且依旧会被监听到

    console.log(obj.address);//源对象上也会出现这个对象
  </script>
```

![image-20221005091507451](C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20221005091507451.png)



另外与defineProperty相比,代理对象上**新添加的属性**也可以被监听到,而且这个新增加的属性也会出现在源对象上

