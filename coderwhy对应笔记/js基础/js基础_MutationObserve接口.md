# 14.3 MutationObserve接口

MutationObserve接口可以在DOM被修改时异步执行回调，用MutationObserve可以观察整个文档，DOM树的一部分，或者某个元素，甚至是元素属性，文本等



## 3.1 基本使用

MutationObserve的实例需要调用构造函数并传入一个回调函数才能使用‘

```javascript
    let mutation = new MutationObserver(() => { console.log('hello world') })
```



### 3.1.1 observer方法

创建的MutationObserve实例并没有关联任何DOM结构，需要使用observer方法对DOM结构进行观察，这个方法接收两个参数，第一个是要观察的DOM结构，第二个是一个MutationObserveInit对象，这个对象存放着键值对，用于控制观察哪些方面的变化。

```JavaScript
注意： 对观察对象的子代的修改或者添加是不会触发回调，对非MutationObserveInit配置为true的行为的修改也不会触发回调
```

```JavaScript
    let mutation = new MutationObserver(() => { console.log('body has changed') })
    mutation.observe(document.body, { attributes: true })
    document.body.setAttribute('class', 'foo')
    console.log('触发回调')
    document.body.appendChild(document.createTextNode('Hello World'))//未触发回调
```

![image-20230126161308913](C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20230126161308913.png)



### 3.1.2 回调与MutationRecord

目前所知道的MutationObserveInit可以观察的内容是attributes,attributesOldValue,characterData,childList,启动对他们的观察, 所得到的信息会反馈到MutationRecord中

MutationRecord是一个传入回调函数的数据对象,里面包含观察的DOM对象修改的数据.

参考的对象节点一般会多次触发观察的行为,这时候这些数据会依次传入到MutationRecord的数组中

```JavaScript
    let mutation = new MutationObserver((MutationRecord) => { console.log(MutationRecord) })
    mutation.observe(document.body, { attributes: true, attributeOldValue: true })
    // 触发事件
    document.body.setAttribute('foo', 'bar')
    document.body.setAttribute('foo', 'baz')
    document.body.setAttribute('foo', 'qux')
```

![image-20230126164207645](C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20230126164207645.png)



MutationRecord实例上的一些属性：

* target： 表示被观测的目标节点
* type： 表示目标节点发生变化的类型
* oldValue： 只有attributeOldValue或者characterDataOldValue为true且有值发生改变时会触发，保留上次的值
* attributesName： 对应attributes类型的变化，这里保存着被修改的属性的名字，其他变化会把这个值设置为null
* attributesNameSpace： 对应了使用了命名空间的attribute类型的变化，这里保存了被修改睡醒的名字，其他变化这个值设置为null
* 对应childlist类型的变化
  * addNodes：返回包含变化中添加节点的NodeList
  * removeNodes：返回包含变化中删除节点的NodeList
  * nextSibling：返回变化节点前面节点的一个同胞Node
  * previousSibling：返回变化节点后面节点的一个同胞Node



### 3.1.3 disconnect方法

正常情况下，被观测的对象如果不被垃圾回收会收走，是不会停止观察的，但是可以使用disconnect方法，这个方法会阻止当前观察器继续观察对象，而且还会清空已经列入任务队列中异步执行的回调函数

```javascript
    let discover = new MutationObserver((MutationRecord => { console.log(MutationRecord) }))
    discover.observe(document.body, { attributes: true })
    // 开始观察
    document.body.setAttribute('class', 'myBody')
    // 取消观察
    discover.disconnect()
    document.body.setAttribute('id', 'body')
```

这时候没有结果，因为异步队列中的回调函数被取消了

想要在disconnect方法执行之前的结果，可以用setTimeout的方法调用disconnect，这样等前面的回调执行完在执行disconnect就可以了

```JavaScript
  let discover = new MutationObserver((MutationRecord => { console.log(MutationRecord) }))
    discover.observe(document.body, { attributes: true })
    // 开始观察
    document.body.setAttribute('class', 'myBody')
    // 取消观察，异步执行
    setTimeout(() => {
      discover.disconnect()
      document.body.setAttribute('id', 'body')
    }, 0)
```

![image-20230126171913734](C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20230126171913734.png)

执行了调用disconnect之前的回调函数



### 3.1.4 复用MutationObserver

MutationObserver观察器不是只会观察一个目标，他实际上可以观察多个目标，观察多个目标时的target值是不同的

```JavaScript
    let observer = new MutationObserver((MutationRecords) => {
      MutationRecords.forEach((x) => {
        console.log(x.target)
      })

    })
    let box1 = document.querySelector('.box1')
    let box2 = document.querySelector('.box2')
    observer.observe(box1, { attributes: true })
    observer.observe(box2, { attributes: true })
    // 执行观测
    box1.setAttribute('id', 'box1')
    box2.setAttribute('id', 'box2')
```

![image-20230126195303051](C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20230126195303051.png)



但是对于disconnect方法，他会切断观察器与每个对象的链接

```javascript
    let observer = new MutationObserver((MutationRecords) => {
      MutationRecords.forEach((x) => {
        console.log(x.target)
      })

    })
    let box1 = document.querySelector('.box1')
    let box2 = document.querySelector('.box2')
    observer.observe(box1, { attributes: true })
    observer.observe(box2, { attributes: true })
    // 执行观测
    box1.setAttribute('id', 'box1')
    box2.setAttribute('id', 'box2')

    observer.disconnect()//无内容输出
```



### 3.1.5 重用MutationObserver

使用disconnect方法虽然会切断MutationObserve与关联对象之间的联系，但是不代表这个观察器被销毁，所以说这个观察器还可以在对新的对象进行观察

```JavaScript
    let observer = new MutationObserver((MutationRecord) => { console.log(MutationRecord) })
    observer.observe(document.body, { attributes: true })

    document.body.setAttribute('class', 'foo')
    setTimeout(() => {
      observer.disconnect();
      document.body.setAttribute('id', 'body');
    }, 0)
    setTimeout(() => {
      observer.observe(document.body, { attributes: true })
      document.body.setAttribute('id', 'body')

    }, 0);
```

这里就是先创建并对body进行观察，后再异步取消了这种联系，在异步恢复与body的联系



## 3.2 MutationObserveInit与观察范围

MutationObserveInit用于控制目标对象的观察范围

下面列出MutationObserveInit对象的属性

* subtree：表示除了目标节点，是否观察子树。如果为true，那么观察目标节点以及整个子树，默认为false
* attributes：表示是否观察目标节点的属性变化，默认为false
* attributeFilter：字符串数组，表示要观察哪些属性变化，默认观察所有属性
* attributeoldvalue：表示MutationObserver是否记录修改之前的值
* characterData：表示修改字符数据是否触发变化事件
* characterOldValue：表示MutationObserver是否记录修改之前的字符数据
* childList：表示修改目标节点的子节点是否触发事件



```
注意： 无论是直接触发还是间接触发，characterData，attribute，childList必须有一个为true，否则无法调用observe方法，因为没有属性为true就没有观测范围，无法触发回调
```



### 3.2.1 观察属性

主要是在MutationRecordInit中把attribute设置为true，就可以观测目标对象的属性了，只是用attributeFilter或者attributeOldValue也可以触发attributes为true，另外，使用attributeFilter可以设置观测哪些属性，默认观察 所有属性

```JavaScript
    let observer = new MutationObserver((MutationRecord) => { console.log(MutationRecord) })
    observer.observe(document.body, { attributeFilter: ['class'] })

    document.body.setAttribute('class', 'foo')//[MutationRecord]
    document.body.setAttribute('id', 'body')
```

这里只观察body的class属性是否发生修改或者创建，删除



### 3.2.2 观察字符数据

MutationRecord可以观察目标对象的文本（Text，comment，ProcessingInstruction)中的添加，修改，删除

按照书上的内容照抄都打印不出来结果，在MDN上也没用查到具体信息，不过在stackOverflow中有发现

```html
<div id='some-id' contenteditable='true'>Modify content</div>
```

```java
// select the target node
var target = document.querySelector('#some-id').childNodes[0];

// create an observer instance
var observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    console.log(mutation.type);
  });    
});
 
// configuration of the observer:
var config = { attributes: true, childList: false, characterData: true };
 
// pass in the target node, as well as the observer options
observer.observe(target, config);
```

``contenteditable``这个属性可以让客户修改内容，当内容被秀爱的时候，会触发事件



### 3.2.3 观察子节点‘

在MutationObserverInit对象中使用childList为true。可以观察目标对象的子节点是否发生变化，包括添加子节点，删除和修改（修改会触发两次，因为修改从技术上是添加和删除）

```JavaScript
    let observer = new MutationObserver((MutationRecord) => { console.log(MutationRecord) })
    document.body.appendChild(document.createElement('div'))
    document.body.appendChild(document.createElement('span'))
    setTimeout(() => {//这里使用setTimeout，因为发现appendChild可能是异步的
      observer.observe(document.body, { childList: true })
      // 发生修改
      document.body.insertBefore(document.body.lastChild, document.body.firstChild)
    }, 0);
```

![image-20230127141940865](C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20230127141940865.png)



### 3.2.4 观察子树

MutationObserver不仅可以观察某一个目标，而且可以观察这个目标的子树是否发生变化，另外，被观察节点中子树节点被移除子树，依旧可以观察到这种变化

```JavaScript
    let box = document.getElementById('box')
    let item = document.getElementById('item')
    let content = document.getElementById('content')
    let observer = new MutationObserver((MutationRecord) => { console.log(MutationRecord) })
    observer.observe(box, { attributes: true, subtree: true })
    // 尝试在box中创建新的子节点
    box.appendChild(document.createElement('h1'))//没有反应
    //给box设置新的属性
    box.setAttribute('class', 'foo')//有反应
    // 给item设置新的属性
    item.setAttribute('class', 'bar')//有反应
    //将item移动到content内
    content.appendChild(item)
    // 正面content有而box没有
    console.log(box.childNodes)
    console.log(content.childNodes)
    // 再次在item内设置新的属性
    item.setAttribute('name','matt')//有反应
```

说明subTree监听的也是设置过的attributes，不会监听没有设置的childList



## 3.3 异步回调与记录队列

MutationObserve是基于性能考虑而设计的，他的核心是异步回调与记录队列模型

为了在大量事件变化发生时不会影响性能，每次变化的信息都会保存在MutationRecord实例中，然后添加到记录队列，对每个MutationObserve实例来说，都会有唯一的记录队列，是所有DOM变化的有序列表



### 3.3.1 记录队列

每次MutationRecord实例添加到记录队列中，**仅当之前已没有已排期的微任务回调时**，才会将观察者注册的回调作为微任务调度到任务队列中，这样可以保证记录队列的内容不会被回调处理两次

```
注意： 区分记录队列与任务队列，记录队列是存放MutationRecord实例数组的地方， 任务队列是执行回调函数的地方
```

回调会依次处理记录队列中的每一个实例，在处理完成后，MutationRecord就用不到了，因此记录队列也会清空，其内容会被丢弃



### 3.3.2 takeRecord方法

调用MutationObserve实例的takeRecord方法，可以清空记录队列，取出并返回所有MutationRecord实例

```JavaScript
    let observer = new MutationObserver((MutationRecord) => { console.log(MutationRecord) })
    observer.observe(document.body, { attributes: true })
    document.body.className = 'foo'
    document.body.className = 'bar'
    document.body.className = 'baz'

    console.log(observer.takeRecords())
    console.log(observer.takeRecords())
```

![image-20230127145447873](C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20230127145447873.png)

这个希望断开与观察目标的联系，但又希望处理由于调用disconnect而被抛弃的记录队列中MutationRecord实例时比较有用



## 3.4 性能，内存与垃圾回收

为MutationObserve设计的记录队列，可以保证当事件被爆发式的触发但不会显著降低浏览器性能。

使用MutationObserver是为了解决MutationEvent带来的严重的性能问题，但这不意味着使用MutationObserve是没有代价的，理解什么时候避免出现这种情况就很重要。

### 3.4.1 MutationObserve的引用

MutationObserve实例与观察对象之间的引用是不对称的，也就是说，MutationObserve实例对观察对象有弱引用，所以当观察对象销毁时，MutationObserve实例不会被销毁，但是观察对象对MutationObserve实例是强引用，也就是说其中一个目标对象被销毁，那么MutationObserve实例也会被销毁

### 3.4.2 MutationRecord的引用

MutationRecord实例保存着至少一个已有DOM的引用，如果变化是childList类型，那么还会多保存一些节点的引用。记录队列和回调函数的默认行为是消耗光整个MutationRecord实例，并让MutationRecord被垃圾回收。

如果想保留一个观察者的信息，直接保存MutationRecord实例会联系那些节点的引用，因而会妨碍垃圾回收机制。如果想尽快释放内存，建议将每个MutationRecord中有用的信息单独保存在一个对象中，最后抛弃MutationRecord





```
注意： DOM编程基本没什么问题，在涉及<script>和<style>标签时会有一点兼容性问题，因为这些元素包含脚本和样式信息，所以浏览器会将他们与其他元素区别对待
注意： DOM操作在JavaScript操作中代价是比较大的，尤其是NodeList对象，这类对象是实时更新的，意味着每一次更细都会执行一次查询，实践中要减少DOM操作数量
```































