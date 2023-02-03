# array.map

如果有以下情形，则不该使用 `map`：

- 你不打算使用返回的新数组；或
- 你没有从回调函数中返回值。



```javascript
// 箭头函数
map((element) => { /* … */ })
map((element, index) => { /* … */ })
map((element, index, array) => { /* … */ })

// 回调函数
map(callbackFn)
map(callbackFn, thisArg)

// 内联回调函数
map(function(element) { /* … */ })
map(function(element, index) { /* … */ })
map(function(element, index, array){ /* … */ })
map(function(element, index, array) { /* … */ }, thisArg)

```





## [描述](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map#描述)

`map` 方法会给原数组中的每个元素都按顺序调用一次 `callbackFn` 函数。`callbackFn` 每次执行后的返回值（包括 [`undefined`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined)）组合起来形成一个新数组。 `callbackFn` 函数只会在有值的索引上被调用；那些从来没被赋过值或者使用 `delete` 删除的索引则不会被调用。



`map` 不修改调用它的原数组本身（当然可以在 `callbackFn` 执行时改变原数组）

`map` 方法处理数组元素的范围是在 `callbackFn` 方法第一次调用之前就已经确定了。调用 `map` 方法之后追加的数组元素不会被 `callbackFn` 访问。如果存在的数组元素改变了，那么传给 `callbackFn` 的值是 `map` 访问该元素时的值。在 `map` 函数调用后但在访问该元素前，该元素被删除的话，则无法被访问到。

根据规范中定义的算法，如果被 map 调用的数组是离散的，新数组将也是离散的保持相同的索引为空



## foreach的延伸

```javascript
// 箭头函数
forEach((element) => { /* … */ })
forEach((element, index) => { /* … */ })
forEach((element, index, array) => { /* … */ })

// 回调函数
forEach(callbackFn)
forEach(callbackFn, thisArg)

// 内联回调函数
forEach(function(element) { /* … */ })
forEach(function(element, index) { /* … */ })
forEach(function(element, index, array){ /* … */ })
forEach(function(element, index, array) { /* … */ }, thisArg)

```

`forEach()` 遍历的范围在第一次调用 `callbackFn` 前就会确定。调用 `forEach` 后添加到数组中的项不会被 `callbackFn` 访问到。如果已经存在的值被改变，则传递给 `callbackFn` 的值是 `forEach()` 遍历到他们那一刻的值。已删除的项不会被遍历到。如果已访问的元素在迭代时被删除了（例如使用 [`shift()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/shift)），之后的元素将被跳过



**有关迭代期间修改数组：**

`forEach()` 遍历的范围在第一次调用 `callbackFn` 前就会确定  这就话的意思是确定哪些索引将会被调用。 由于调用foreach的时候是拿原数组进行调用的，所以期间对原数组的修改会影响遍历的结果

```javascript
const words = ['one', 'two', 'three', 'four'];
words.forEach((word) => {
  console.log(word);
  if (word === 'two') {
    words.shift(); //'one' 将从数组中删除
  }
}); // one // two // four

console.log(words); // ['two', 'three', 'four']

```

这段代码由于使用shift将第一个one删除，导致four会前挪一位，从而three被跳过。



`forEach()` 为每个数组元素执行一次 `callbackFn` 函数；与 [`map()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map) 或者 [`reduce()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce) 不同的是，它总是返回 [`undefined`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined) 值，并且不可链式调用。

`forEach` 不会直接改变调用它的对象，但是那个对象可能会被 `callbackFn` 函数改变。

除了抛出异常以外，没有办法中止或跳出 `forEach()` 循环。如果你需要中止或跳出循环，`forEach()` 方法不是应当使用的工具。(译者注：只要条件允许，也可以使用 [`filter()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) 提前过滤出需要遍历的部分，再用 `forEach()` 处理。)



foreach不会直接处理类数组对象，但是可以先把类数组对象转为数组在使用foreach，例如使用下面这种方式

```javascript
var arr = Array.prototype.slice.call(arr-like);
```

或者使用原型

```JavaScript
Array.prototype.foreach(arr-like,func)
```







### map与foreach的异同点

**相同点：**

* 参数相同
* 都是遍历整个数组
* 除非抛出错误，否则不会停止
* 不会改变原数组
* 处理数组元素的范围是在 `callbackFn` 方法第一次调用之前就已经确定了（调用的索引被确定了）
* 都是调用原数组而不是数组的副本，因此在调用过程中如果出现修改，调用的值会以当时接收到的值为准

**不同点**：

* map会返回函数处理的结果，而foreach会返回undefined
* map会处理空值并保留原味，而foreach不会处理空值