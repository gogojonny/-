# 对象属性监听

通过Object.defineProperty来监听obj的name属性,当出现重新修改值或者想要获取值的时候,都可以被监听到并作出函数内的行为.

```JavaScript
 <h1 class="name"></h1>

  <script>

    let obj = {
      name: "foo",
      age: 27,
      sex: "male"
    }

    // 通过Object.defineProperty来监听obj的name属性,当出现重新修改值或者想要获取值的时候,都可以被监听到并作出函数内的行为.
    Object.defineProperty(obj, "name", {

      set: function (newVal) {
        name = newVal;
        q.textContent = obj.name;
      },
      get: function () {
        return name;
      }
    })

    let q = document.querySelector(".name");
    q.textContent = obj.name;

    obj.name = "matt";
    q.textContent = obj.name;

    obj.name = "kobe";
    q.textContent = obj.name;
    // 设置监听后即使不输入 textcontent也可以修改h1,因为在修改name后会在监听中作出修改.
    obj.name = "james";

  </script>
```

还可以给每一个属性设置监听

```JavaScript
 <h1 class="name"></h1>
  <h1 class="age"></h1>
  <h1 class="sex"></h1>

  <script>

    let obj = {
      name: "foo",
      age: 27,
      sex: "male"
    }

    // 通过设置监听器给每一个属性加上监听功能
    let h1name = document.querySelector(".name");
    let h1age = document.querySelector(".age");
    let h1sex = document.querySelector(".sex");

    let keys = Object.keys(obj)
    let keysSelectors = new Map()//使用map存储 属性-监听器 的键值对
    keysSelectors.set("name", h1name)
    keysSelectors.set("age", h1age)
    keysSelectors.set("sex", h1sex)

//让代码实现响应式
    keys.forEach(key => {
      let value = obj[key]

      Object.defineProperty(obj, key, {
        set: function (newVal) {
          value = newVal;
          keysSelectors.get(key).textContent = newVal

        },
        get: function () {
          return value;
        }
      })
    })
    h1name.textContent = obj.name;
    h1age.textContent = obj.age;
    h1sex.textContent = obj.sex;

    obj.name = "matt"
  </script>
```

![image-20221005082432038](C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20221005082432038.png)

使用defineProperty的方法依旧是有很多缺点的,首先他不是专门用来监听属性的,其次这种监听只能监听属性的修改与读取,如果删除,或者其他复杂操作是无法用这种方式监听的.这个时候代理就是一种很好的选择



比较重要的一点是这种方法做监听实现了一种==响应式==,也就是代码会随后面实时更改