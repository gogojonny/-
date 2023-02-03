# 15 DOM扩展

DOM扩展是指在原有的基础上进行扩展来实现更多高的功能

DOM扩展的两个标准：SelectorAPI和HTML5

## 1 SelectorAPI

Selectors API Level1的核心方法是querySelector和querySelectorAll。在兼容的浏览器中，DOcument类型和Element类型上都会暴露这两个方法

### 1.1 querySelector（）

querySelector最大的特点是可以使用css选择符来进行搜索，返回匹配该模式的第一个后代元素，如果没有票匹配就返回null

```javascript
  <div class="box">
    <div class="item"></div>
  </div>
  <div class="content"></div>


  <script>
    let box = document.querySelector('.box')
    let item = document.querySelector('.item')
    let cup = document.querySelector('.cup')
    console.log(box, item, cup)

```

![image-20230127171231453](C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20230127171231453.png)

在Document中使用这个方法会从文档开始搜索，在元素中使用这个方法会从该元素开始搜索

### 1.2 querySelectorAll

和querySelector一样，querySelectorAll接收css选择符参数，但是不同的是，这个方法返回所有匹配css选择符的元素，并返回一个静态的NodeList，

也就是说，这个NodeList不会动态的改变自己的值。

```JavaScript
  <a href="#"></a>
  <a href="#" class="link"></a>
  <a href="#" class="foo"></a>
  <script>
    let as = document.querySelectorAll('a')
    //后创造的元素没有加入到querySelectorAll的NodeList中，因为这里的NodeList是一个静态对象
    document.body.appendChild(document.createElement('a'))
    console.log(as)
```

![image-20230127172332202](C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20230127172332202.png)



如果css选择符语法有错误或者碰到不支持的选择符，这个方法会抛出错误



**各个获取元素方法一览表**

![image-20230129194909537](C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20230129194909537.png)



### 1.3 matches（）

这个方法接收一个css选择符，这个方法用于判断对象是否是参数指定的对象，如果元素匹配该选择符就返回true，否则返回false

使用这个方法可以判断某个元素是否会被querySelector返回

```JavaScript
  <a href="#" class="link"></a>
  <a href="#" class="foo"></a>
  <script>
    let a = document.querySelector('a.link')
    if (a.matches('a')) {
      console.log(true)
    }
    if (a.matches('.link')) {
      console.log(true)
    }
    if (a.matches('.foo')) {
      console.log(true)
    }
```

![image-20230127172829195](C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20230127172829195.png)





## 2 元素遍历

IE9之前的版本不会把元素之间的空格当做空白文本节点，但是IE9以后以及目前流行的浏览器会

```JavaScript
  <div> <h1></h1> <h2></h2> </div>
<script>
  let div=document.querySelector('div')
  console.log(div.childNodes)//NodeList(5) [text, h1, text, h2, text]
```

后来W3C通过新的Element.Traversal规范定义了一组新的API

* childElementCount： 返回子元素数量
* firstElementChild： 返回第一个子元素
* lastElementChild： 返回最后一个子元素
* nextElementSibling： 指向后一个同胞类型的子元素
* previousElementSibling： 指向前一个同胞类型的子元素



## 3 HTML5

HTML5与以前的HTML有很大的不同，HTML5规范包含了与标记相关的大量JavaScriptAPI定义。其中有的API与DOM重合



### 3.1 css类扩展

自HTML4时期，class属性用的越来越多，自然的，JavaScript与css的交互也越来越多，包括动态修改类名，以及根据给定的一组类名查询元素

HTML5添加了许多特性以方便使用css类



#### 3.1.1 getElementByClassName

getElementByClassName方法可以在document对象和html元素上使用，并且这个方法不是基于原有的DOM功能来实现的，而是原生实现，且性能更好

该方法接收一个参数，即包含一个或多个类名的字符串，返回类名中包含相应元素的Nodelist，如果提供多个类名，则顺序无关紧要

```JavaScript 
  <ul class="firstUl">
    <li class="item"><a href="#"></a></li>
    <li class="item"><a href="#"></a></li>
    <li class="item"><a href="#"></a></li>
    <li class="item"><a href="#"></a></li>
    <li class="item"><a href="#"></a></li>
  </ul>
  <ul class="secondUl">
    <li class="item"><a href="#"></a></li>
    <li class="item"><a href="#"></a></li>
    <li class="item"><a href="#"></a></li>
    <li class="item"><a href="#"></a></li>
    <li class="item"><a href="#"></a></li>
  </ul>
  <script>
    let items = document.getElementsByClassName('item')
    console.log(items)
    // let firstUlItems = document.getElementsByTagName('ul')[0].getElementsByClassName('item')
    // console.log(firstUlItems)
    // let firstUlItems = document.getElementsByClassName('firstUl').getElementsByClassName('item')//这样写是不行的，因为getEBCN的对象要么是document对象，要么是html元素，也就是用getEBTN
    // console.log(firstUlItems)
    let firstUlItems = document.querySelector('.firstUl').getElementsByClassName('item')//这样可以
    console.log(firstUlItems)
    // 当然以上写法还可以这样
    // let firstUlItems = document.querySelectorAll('.firstUl .item')
    // console.log(firstUlItems)
```

![image-20230128123511503](C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20230128123511503.png)

```
注意： 由于返回的是NodeList，所以这个方法面临着和getEBTN等返回NodeList一样的问题
```



#### 3.1.2 classList属性

要操作类名，可以通过className属性操作，但是className属性是一个字符串，所以每次操作后都需要重新设置这个值才能生效。

HTML5通过给所有元素添加classList属性来简化对类名的操作，classList是一个新的集合类型DOMTokenList的实例，与其他DOM集合类型一样，DOMTokenList也有length和item（），此外还添加了以下方法

* add(value) : 向类名中添加指定的字符串值value，如果存在则什么都不做
* contains（value）：返回布尔值，判断这个value是否存在
* remove（value）：移除value
* toggle（value）：如果类名列表中存在value，就移除value。如果列表中不存在value，就添加value

```javascript
  <div class="box"></div>
  <script>
    let box = document.querySelector('.box')
    console.log(box.classList)//DOMTokenList ['box', value: 'box']
    box.classList.add('content')
    console.log(box.classList)//DOMTokenList(2) ['box', 'content', value: 'box content']
    box.classList.remove('box')
    console.log(box.classList)//DOMTokenList ['content', value: 'content']
    box.classList.toggle('content')
    console.log(box.classList)//DOMTokenList [value: '']
    console.log(box.classList.contains('box'))//false
```



### 3.2 焦点管理

HTML5增加了辅助焦点管理功能，首先是Document.activeElement始终包含当前拥有焦点的元素。页面加载时，可以通过用户输入让某个元素自动获得焦点

（按Tab键或者使用focus方法）

```JavaScript
    let button = document.querySelector('button')
    button.focus()
    console.log(document.activeElement === button)//true
```

默认情况下，document.activeElememnt在页面刚加载完之后会设置为document.body。而在页面完全加载之前，document.activeElement的值变为null



其次是document.hasfocus（）方法，表示当前文档是否有焦点。

确定文档是否有焦点，就可以帮助确定是否用户在操作界面了

这些操作对于无障碍web页面的使用是非常重要的



### 3.3 HTMLDocument扩展

HTML5扩展了HTMLDocument类型，增加了更多的功能，下面介绍的大部分浏览器都已经支持



#### 3.3.1 readyState属性

readyState属性有两个可能的值

* loading：表示文档正在加载
* complete：表示文档加载完成



实际开发中，最好将readyState当做一个指示器，一盘DAU你文档是否加载完毕



#### 3.3.2 compatMode属性

自从IE6提供了以标准或混杂模式渲染页面的能力后，检测页面渲染模式成为一个必要要素。

在标准模式下，compatMode值为CSS1Compat

再混杂模式下，compatMode值为BackCompat

```JavaScript
    if (document.compatMode === 'CSS1Compat') {
      console.log('stantar mode')
    } else {
      console.log('quirks mode')
    }
```



#### 3.3.3 head属性

作为对 document.body的补充，HTML5增加了document.head属性，指向文档的head元素



### 3.4 字符集属性

HTML5增加了几个与文档字符集相关的属性，其中，characterSet属性表示文档实际使用的字符集，也可以用来指定新字符集。这个属性的默认值是UTF-16，但也可以使用meat元素或者响应头，以及新增的characterSet属性来修改

```JavaScript 
    console.log(document.characterSet)
    document.characterSet = 'UTF-8'
```



### 3.5 自定义数据类型

HTML5允许给元素指定非标准的属性，但是要使用data前缀来高速浏览器，这个属性不包含渲染信息，也不包含元素的语义信息。 除了前缀，对自定义属性的

命名是没有要求的，下面是一个例子

```html
<div class="box" data-appid="12345"></div>
```

定义了自定义属性的元素，可以通过元素的dataset属性来访问。 dataset属性是一个DOMStringMap的实例，包含一组键值对的映射

![image-20230128142219293](C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20230128142219293.png)

自定义属性非常适合需要给元素附加某些数据的时候，比如连接追踪和在聚合应用程序中标识页面不同的部分



### 3.6 插入标记

在DOM中插入大量节点是一件很麻烦的事，如果能插入一个字符串会更简单，在HTML5中实现了这个功能



#### 3.6.1 innerHTML属性

在读取innerHTML时，会返回元素所有后代HTML字符串，包括元素，注释，和文本节点。在写入innerHTML时，会根据提供的字符串以新的子树代替元素中包含的所有节点

```html
  <div>
    <p>this is a para</p>
    <ul>
      <li>item1</li>
      <li>item2</li>
      <li>item3</li>
    </ul>
  </div>
  <script>
    let div = document.querySelector('div')
    console.log(div.innerHTML)
  </script>
```

![image-20230128142955317](C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20230128142955317.png)

根据浏览器实现的不同，返回的字符串也不会相同，有的标签可能都是大写，有的会包含空格和缩进

在写入模式下，赋给innerHTML属性的值会被解析成DOM子树并代替这个元素之前的子树。

因为浏览器会解析设置的值，所以给innerHTML设置包含HTML的字符串时，结果会不太一样。

```
注意： 设置innerHTML会导致浏览器将字符串解析为相应的DOM树，这意味着设置innerHTML属性后马上在读取出来会得到不同的字符串。这是因为返回的字符串是将原始字符串对应的DOM树数列化的结果???
```





#### 3.6.2 旧IE中的innerHTML

在所有现代浏览器中，通过innerHTML插入的script标签是不会执行的，但是在IE8之前的版本，只要插入的script标签指定了defer属性，且之前script标签是受控元素，那就也可以是执行的。

script标签与style标签或注释一样，都是非受控元素，对于浏览器，非受控元素再页面上是看不见的，也就是说IE会把innerHTML中从非受控元素开始的内容都删除掉。

```JavaScript
    let div = document.querySelector('div')
    div.innerHTML =` <script>console.log('hello');</script>` ;//无法执行，整个字符串都被清空了
```

为了达到目的，必须在script标签前面加上一个受控元素，例如文本节点，或者没有结束标签的元素（input）

innerHTML中script标签如何才能执行：（对于旧版IE）

* 首先，srcipt标签是受控元素，前面要加上受控元素例如input标签或者文本节点
* 其次，需要在script标签内添加defer属性
* 最后script的结尾标签需要加上反引号

```JavaScript
    div.innerHTML = ` _<script defer>console.log('hello');<\/script>`
```

在IE中，使用style标签也会有类似的问题



#### 3.6.3 outerHTML属性

读取outerHTML属性时，会返回调用他的元素以及后代所有元素的HTML字符串，在写入outerHTML时，调用他的元素会被传入的HTML字符串解析为DOM子树取代

与innerHTML不同，outerHTML的特点是包括调用该属性的元素，所以无论是写入还是读取，都会涉及到调用的元素



#### 3.6.4 insertAdjacentHTML与insertAdjacentText方法（adjacent：邻近的）

这两个方法接收两个参数，要插入标记的位置和要插入标记的内容，第一个值必须是下面值其中之一

* beforebegin：插入当前元素的前面，作为一个同胞节点
* afterbegin： 插入当前元素内部，作为一个新的子节点并放到第一个子节点前面
* beforeend：插入到当前元素内部，作为新的子节点或放在最后一个子节点后面
* afterend： 插入到当前元素后面，并作为一个同胞节点

```JavaScript
  <div><p>我是p元素</p></div>
  <script>
    let htmlStr = `<p>hello world</p>`;
    let str = 'hello';
    let div = document.querySelector('div')
    //div前面加上兄弟元素
    div.insertAdjacentHTML('beforebegin', htmlStr)
    div.insertAdjacentText('beforebegin', str)
    // div后面加上兄弟元素
    div.insertAdjacentHTML('afterend', htmlStr)
    div.insertAdjacentText('afterend', str)

    // div内加上最后一个元素
    div.insertAdjacentHTML('beforeend', htmlStr)
    div.insertAdjacentText('beforeend', str)
    // div内部加上第一个子元素
    div.insertAdjacentHTML('afterbegin', htmlStr)
    div.insertAdjacentText('afterbegin', str)

```

![image-20230128160605798](C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20230128160605798.png)



#### 3.6.5 内存与性能问题

使用之前介绍的方法移除或者替换子元素可能带来性能或内存问题（removechild，replacechild，或者innerHTMLouterHTML等等），因为被移除的元素如果添加过事件处理程序或者其他JavaScript对象，那么他们之间的关系将被保留在内存中。如果频繁进行这样的操作，那么很有可能导致内存占用会持续攀升。

因此，在使用innerHTML，outerHTML，insertAdjacentHTML之前，最好先手动删除要替换的元素上关联的事件处理程序和JavaScript对象。



当然使用这些属性自有其方便之处，特别是innerHTML，因为如果要插入大量html元素，使用innerHTML可以减少大量操作，另外HTML解析器会解析设置给innerHTML的值，由于解析器在浏览器中是底层代码，比JavaScript快得多，（不过也不能频繁调用innerHTML，因为解析器的构建与解构也会有代价）

最好的办法是将要设置的字符串一次性传入innerHTML中



#### 3.6.6 跨站点脚本

目前来说所有浏览器都以不允许innerHTML解析script标签，但是仍有许多恶意用户利用innerHTML搞破坏，例如使用onclick之类的属性

```
注意： 如果要是用用户提供的信息，则不建议使用innerHTML，与使用innerHTML的方便相比，防止XSS攻击更头疼，此时一定啊哟隔离插入的数据，在插入页面前必须毫不犹豫使用相关库进行转义
```



### 3.7 scrollIntoView方法

这个方法存在于所有html元素之上，可以滚动浏览器窗口或者容器元素以便包含元素进入视口

这个方法的参数如下：

* alignToTop：一个布尔值
  * true：窗口滚动后元素顶部与视口顶部对齐
  * false： 窗口滚动后元素底部与视口底部对齐
* scrollIntoViewOptions（可选）
  * behavior：定义过度动画 值可以是smooth和auto，默认为auto
  * block：定义垂直方向对齐，可取值为start，center，end和nearest
  * inline：定义水平方向对齐，可取值为start，center，end和nearest
* 不传参数： alignToTop为true



## 4 专有扩展

专有扩展扩展原来DOM没有的属性，在某些浏览器上使用



### 4.1 children属性

IE9之前的版本与其他浏览器在处理空白文本节点上出现了差异导致了children属性的出现，children是一个HTMLCollection，只包含元素element类型的子节点，如果元素的子节点全是element类型，那么children与childlist结果应该是一样的



### 4.2 contains方法

DOM中经常要判断一个元素是否是另一个元素的后代。

```JavaScript
    let div = document.querySelector('div')
    console.log(document.body.contains(div));
```



另外，在DOM Level 3的compareDocumentPosition方法也可以判断节点之间的关系，这个方法返回节点关系的位掩码

| 掩码 | 节点关系                           |
| ---- | ---------------------------------- |
| 0x1  | 断点（传入节点不存在文档中）       |
| 0x2  | 领先（传入的节点位于参考节点之前   |
| 0x4  | 随后（传入的节点位于参考节点之后   |
| 0x8  | 包含（传入的节点是参考节点的祖先   |
| 0x10 | 被包含（传入的节点是参考节点的后代 |

```html
  <div></div>
  <script>
    let div = document.querySelector('div')
    let result = document.body.compareDocumentPosition(div)
    console.log(!!(result & 0x4));//true
    console.log(!!(result & 0x10));//true
    console.log(result);//20
  </script>
```

以上代码执行后返回的值是20，因为div既在body之后，又被body包含

双感叹号表示转为布尔类型



### 4.3 插入标记

HTML5将IE发明的innerHTML和outerHTML纳入标准，但是还有两个没有纳入标准，就是innerText和outerText。

####  4.3.1 innerText属性

这个属性对应元素中包含的所有文本内容，无论文本内容是在哪个层级。在读取时，innerText会按照深度优先顺序将所有文本拼接，在写入时，innerText会移除元素所有后代并插入这个文本值

目前这个属性已经得到所有浏览器支持，与textContent属性相比，这个属性应该作为取得和设置文本内容的首选方法使用

```JavaScript
  <div>
    <ul>
      <li>item1</li>
      <li>item2</li>
      <li>item3</li>
    </ul>

  </div>
  <script>
    let div = document.querySelector('div')
    div.innerText = 'hello world'
```

直接编写html代码依旧会按照字符串解析

```JavaScript
    let div = document.querySelector('div')
    div.innerText = `<h1>hello</h1>`
```

![image-20230130110708966](C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20230130110708966.png)



#### 4.3.2 outerText属性

outerText与innerText是类似的，只不过作用范围包括调用它的节点

这个属性是非标准的属性，而且也没有被标准化的前景



### 4.4 滚动

考虑到scrollIntoView是唯一一个所有浏览器都支持的方法，所以只用它就可以了

































