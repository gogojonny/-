# arr判断方法

一共四种方法

* Object.prototype.toString.call(arr),这种方法似乎可以检测很多类型,不仅仅是数组
* Array.isArray(arr),经典判断是否是数组的方法
* Array.prototype.isPrototypeOf(arr),小众的使用Array原型方法来判断数组
* log(arr instanceof Array),也是利用原型判断数组

```JavaScript
let arr = [1, 2, 3, 4, 5];
console.log(typeof arr); //不能检测是不是数组
console.log(Array.isArray(arr));
console.log(arr instanceof Array);
let judge = Object.prototype.toString.call(arr);
console.log(judge);
let judge2 = Array.prototype.isPrototypeOf(arr);
console.log(judge2);
```

![image-20221018091251190](C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20221018091251190.png)