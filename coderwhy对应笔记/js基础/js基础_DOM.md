# DOM

DOM文档对象模型（Document Object Model）是HTML和XML文档的编程接口，DOM表示由多层节点构成的文档，开发者可以添加修改和删除页面的各个部分。

```
注意: 在IE8以及更低版本的浏览器中,DOM是通过COM实现的,所以在低版本IE浏览器中,DOM的行为与原生JavaScript的行为不同
```

## 1 节点层级

HTML和XML文档通过DOM生成一种有节点构成的层级结构,每隔节点都有自己的类型,不同类型之间有不同的特性,数据和方法,而且与其他类型存在一定的关系,这种关系构成层级结构,形成了一种以某一根节点构成的树状结构

![image-20230123191603963](C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20230123191603963.png)

* Document节点: 每个文档的根节点
* html: 根节点唯一的子元素, 被称为**文档元素**, 每个文档只有一个文档元素
* html有两个节点,都是元素节点,除了元素节点外,还有属性节点,文本节点,注释节点等等

### 1.1 Node类型

Domlevel1描述了一种Node接口,所有的DOM节点都必须实现这个接口,在JavaScript中Node接口被实现为Node类型.  也就是说,所有的节点都继承了Node类型,因此**所有的类型都实现了相同的基本属性和方法**

每个节点都有一个nodeType属性,这个属性代表这个节点的类型.  每个类型都定义在Node类型上的12个数值常量表示

* Node.ELELMENT_NODE(1)
* Node.ATTRIBUTE_NODE(2)
* Node.TEXT_NODE(3)
* Node.CDATA_SECTION_NODE(4)
* Node.ENTITY_REFERENCE_NODE(5)(实体,)
* Node.ENTITY_NODE(6)
* Node.PROCESSING_INSTRUCTION_NODE(7)
* Node.COMMENT_NODE(8)
* Node.DOCUMENT_NODE(9)
* Node.DOCUMENT_TYPE_NODE(10)
* Node.DOCUMENT_FRAGMENT_NODE(11)( 碎片)
* Node.NOTATION_NODE(12)(记号)



```
浏览器不支持所有类型，最常用的是元素类型和文本类型
```

```html
 <p>hello world</p>

  <script>
    let p = document.querySelector('p')
    if (p.nodeType == Node.ELEMENT_NODE) {
      console.log('p是一个元素节点')
    }

  </script>
```

![image-20230123194022540](C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20230123194022540.png)

这里通过nodeType属性检测p这个节点是否是element类型



#### 1.1.1 nodeName与nodeValue

nodeName与nodeValue保存着节点的信息，在使用这两个属性时，最好先提前检测节点的类型

```JavaScript
 let p=document.querySelector('p')
    if(p.nodeType===Node.ELEMENT_NODE){
      let name=p.nodeName
      let value=p.nodeValue
      console.log(name,value)
    }

```

![image-20230123194526660](C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20230123194526660.png)

对于元素节点,nodeName的值始终是元素的标签名,nodeValue的值是null'



#### 1.1.2 节点关系

文档中所有节点都与其他节点有关系,这种关系类似于家族关系,  就像html标签是head和body的父元素,而body和head元素之间是兄弟关系

每个节点都有一个childNode属性,其中包含了nodeList实例,nodeList是一个类数组对象**,用于存储按位置存储的有序节点**, nodeList独特的地方是他其实是一个对DOM结构的查询, 因此DOM结构的变化会自动的在NodeList中反映出来,  也就是说,nodelist是一个实时反映的对象,而不是第一次访问时所获得的快照

下面展示了使用中括号语法和使用item()来获取nodeList中的元素

```html
 <p>hello world</p>

  <script>
   
    let p = document.querySelector('p')
    let firstChild = p.childNodes[0]
    let secondChild = p.childNodes.item(1)
    let childNum = p.childNodes.length
    console.log(firstChild,secondChild,childNum)
  </script>
```

![image-20230123195733433](C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20230123195733433.png)

```
注意: 这里的结果只是这一时刻的结果,因为nodeLit这个对象是实时的,所以一旦节点改变,这个对象也会跟着改变
```

nodeList也可以使用Array.prototype.slice方法将这个类数组对象转为数组，也可以使用Array.from来静态修改为数组。



每个节点还有一个parentNode的属性，指向其DOM树中的父元素。在文档中，某个节点的childNode中所有的节点的parentNode都是这个节点，另外可以通过perviousSibling和nextSibling来在这些节点之间导航，且第一个节点的perviousSibling为null，最后一个节点的nextSIbling也为null。

![image-20230123201029652](C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20230123201029652.png)

```html
<div>
    <h1>
      <p>hello world</p>
    </h1>
    <div></div>
    <section></section>
  </div>
  <script>

    let div = document.querySelector('div');
    console.log(div.childNodes)

    for (let i = 0; i < div.childNodes.length; i++) {

      console.log(div.childNodes[i].parentNode === div);
    }

  </script>
```

![image-20230123201806916](C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20230123201806916.png)

```
注意: 在这里,回车符和注释都算是节点
```

每个节点之间都有firstChild和lastChild属性,这个属性是childNode的第一个元素和最后一个元素

![image-20230123202735605](C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20230123202735605.png)

利用节点之间的关系,  可以访问到节点数中几乎任何节点,还有hasChildNode方法可以判断节点是否有子节点

```JavaScript
let div = document.querySelector('div');
console.log(div.hasChildNodes)
```

还有ownerDocument属性,表示当前节点所属文档,这样可以快速查询当前节点所在的文档了

```JavaScript
    let div = document.querySelector('div');
    console.log(div.ownerDocument)
```

![image-20230123203310137](C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20230123203310137.png)

```
注意: 虽然所有节点都继承了Node,但并非所有节点都有子节点.
```



#### 1.1.3 操作节点

* **将节点插入到nodeList末尾**

  因为所有节点关系都是只读的,所以不能通过节点关系来修改某个节点,但是提供了一些方法来操作节点,其中最常用的是appendChild方法，这个方法会在某一个节点的nodeList的最后添加一个节点，这样做会同时更新nodeList以及新节点前面那个节点的nextSibling属性的值，这个方法会返回新添加的节点

  ```JavaScript
  	let div = document.querySelector('div');
      let childDiv = document.createElement('div')
      let newNode = div.appendChild(childDiv)
      console.log(div.childNodes)
      console.log(newNode===childDiv)
  ```

  ![image-20230123204210085](C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20230123204210085.png)

  

* **移动某个节点到nodeList末尾**

  由于一个节点在文档中**不会同时出现在两个或者更多地方**，所以如果将一个已有节点传入appendChild，那么这个节点的位置也会改变，例如将一个元素的第一个子节点传入appendChild，那么这个节点就会变成最后一个子节点

  ```JavaScript
      let div = document.querySelector('div');
      let p = document.querySelector('p')
      div.appendChild(p)
      console.log(div.lastChild)
  ```

  ![image-20230123204619228](C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20230123204619228.png)

  

  * 

* **将节点插入到某个固定位置**

  如果不想把节点插入到nodeList末尾，可以使用insertBefore方法，这个方法接收两个参数，会将节点插入到第二个参数，也就是指定节点的前面，如果这个指定节点是null，那么就和appendChild方法类似

  ```html
   <div>
      <h1>
        <p>hello world</p>
      </h1>
      <div id="childDiv"></div>
      <section></section>
    </div>
    <script>
  
      let div = document.querySelector('div');
      let p = document.querySelector('p')
      let childDiv = document.querySelector('#childDiv')
      let returnNode = div.insertBefore(p, childDiv)
      console.log(returnNode === p)
      console.log(childDiv.previousSibling)
  
    </script>
  ```

  ![image-20230123205520871](C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20230123205520871.png)

  appendChild与insertBefore方法不会删除任何节点

  

* **替换某个节点**

  replaceChild方法接受两个参数，要替换的节点和要插入的节点，要替换的节点会在文档树中删除并将这个节点返回

  ```JavaScript
      let div = document.querySelector('div');
      let childDiv = document.querySelector('#childDiv');
      let h3 = document.createElement('h3')
      let returnNode = div.replaceChild(h3, childDiv);
      console.log(returnNode);
      console.log(div.childNodes)
  ```

  ![image-20230123210750397](C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20230123210750397.png)

  从技术上来说，这个被替换的节点仍然被同一个文档所有，但文档中已经没有他的位置了

* **删除某一个节点**

  使用removeChild方法，接收被删除的节点并返回该节点

  ```JavaScript
  	let div = document.querySelector('div');
      let childDiv = document.querySelector('#childDiv');
      let removeNode=div.removeChild(childDiv)
      console.log(div.childNodes)
  ```

  ![image-20230124141337959](C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20230124141337959.png)

  



以上四种方法实际上都需要先拿到父节点,  有些节点并没有子节点,在这写节点上调用子节点的方法会导致抛出错误



#### 1.1.4 其他方法

所有节点都有一个cloneNode的方法，这个方法会复制调用这个方法的节点，  且这个方法**接收一个布尔值，用于确定是否进行深复制**，复制出来的节点在没有放入节点树时被叫做**孤儿节点**，可以使用appendChild，insertBefore，或replaceChild方法将节点放入节点树

```
cloneNode方法接收布尔值
// true：进行深复制，复制整个子dom树
// false：浅复制，只复制这个节点
```

```JavaScript
  <ul>
    <li>item1</li>
    <li>item2</li>
    <li>item3</li>
  </ul>

  <script>

    let ul = document.querySelector('ul')
    let deepList = ul.cloneNode(true)
    console.log(deepList.childNodes.length)

    let shallowList = ul.cloneNode(false)
    console.log(shallowList.childNodes.length)
```

![image-20230124142407751](C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20230124142407751.png)



```
注意： cloneNode方法不会复制添加到DOM节点上的JavaScript属性，只会复制html属性以及选择性复制子节点，
在ie8之前会复制JavaScript属性，但这是一个bug
```



最后一个方法时normalize方法，他会对指定的节点子代进行检查，如果发现存在并不包含文本的文本节点或者文本节点之间互为同胞关系，那么就会删除空文本节点。并且如果遇到互为同胞关系的节点合并为一个文本节点。



### 1.2 Document类型



* Document类型是JavaScript中**表示文档节点的类型**
* 文档对象document是HTMLDocument的实例，表示整个HTML页面![image-20230124144115591](C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20230124144115591.png)
* document是window对象的属性，因此是一个全局对象



Document类型有以下特征：

* nodeType等于9
* nodeName值为‘#document’
* nodeValue值为null
* parentNode值为null
* ownerDocument值为null
* **子节点可以是DocumentType（最多一个），Element（最多一个），ProcessingInstruction或Comment类型**

document对象可以获取文档底层信息以及操作外观结构



#### 1.2.1 文档子节点

DOM规范规定document节点的子节点可以是DocumentType，Elemnet，ProcessingInstruction，Comment， 同时提供了便捷访问Element子节点的办法，

使用documentElement属性可以快速获取document节点的Element节点，也就是,<html>标签

```javascript
    let html=document.documentElement
    console.log(html)
```

另外还有一个body属性可以快速获取到body节点

```JavaScript
let body = docuemnt.body;
```

Document类型另一种可能的子节点是DocumentType。也就是<!docType>，可以通过docType属性来获取。

在html标签外的注释因浏览器不同可能会有差异，在这里使用Chrome浏览器，最后一段注释被删除了

```html
<!DOCTYPE html>
<!-- hello world -->
<html lang="en">

<head>
</head>

<body>
  <script>
    console.log(document.childNodes)
  </script>
</body>

</html>
<!-- hello world -->
```

![image-20230124150505366](C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20230124150505366.png)





#### 1.2.2 文档信息

在document对象中，存在Document没有的属性，这些属性提供浏览器加载的网页信息，例如title属性，这个属性的值是<title>标签包裹的值

通常会放到标签页的标题栏.通过这个属性可以修改页面标题栏的标题. 不过不会修改titel元素

```JavaScript
    document.title='new Document';
```

除此之外还有URL,指定文档的完整URL,domain,包含页面的域名, referrer指定当前页面的来源页,如果当前页面没有来源,那么这个属性的值为空字符串

![image-20230124153654036](C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20230124153654036.png)

**这些信息可以在请求的HTTP头部信息中获取**



##### domain的应用(已废弃!!!)

domain是文档信息四个属性中唯一可以修改的,出于安全性考虑,domain的修改也是受到了限制,例如www.baidu.com可以修改为baidu.com,修改不可以使用除URL之外的内容做修改

**domain在内嵌窗格**中也十分有用. 在一个页面中使用iframe内嵌窗格,每个内嵌窗格来自不同的域名,出于安全性考虑,不同窗格之间无法通过JavaScript进行通信, 但是如果在各自的窗格内修改domain属性为同一个值,那么即使不同的域名窗格也可以进行通信了

浏览器对domain还有一个限制,那就是这个属性一旦放松就不能收紧了,也就是说,当domain一旦修改,就不能再改回来了

```JavaScript
document.domain='baidu.com';
document.domain='google.com'//这样会产生错误，因为domain再次修改了
```



#### 1.2.3 定位元素

一般来说,使用DOM的目的是获取对应的元素并进行操作,获取元素的方法有getElementById和getElementByTagName,这两个方法可以获取到对应id和对应标签名的元素,需要注意的是,在一个文档中只有唯一的id,所以请不要尝试在两个标签上设置同名id值,  另外,如果获取失败就会返回null

getElementByTagName会返回所有同标签名的元素,通过生成一个HTMLCollection类数组对象并将这些元素包裹起来的形式.  HTMLCollection也是一个实时改变的对象,和nodeList类似,也可以使用item方法返回对应索引的值

```JavaScript
<img src="" alt=""><img src="" alt=""><img src="" alt=""><img src="" alt=""><img src="#" alt="">
  <script>
    let imgs = document.getElementsByTagName('img')
    console.log(imgs.length)
    console.log(imgs.item(4))
```

![image-20230124162938207](C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20230124162938207.png)

与nodeList不同的是，HTMLCollection还有一个nameItem的方法，这个方法会将包含指定name值的元素返回，同时HTMLCollection也可以使用中括号语法，如果中括号内是数字，就会默认调用item方法，如果是字符串，就会调用namedItem方法

```JavaScript
  <img src="" alt=""><img src="" alt=""><img src="" alt=""><img src="" alt=""><img src="#" alt="" name="special">
  <script>
    let imgs = document.getElementsByTagName('img')
    let specialImg1 = imgs.namedItem('special')
    let specialImg2 = imgs['special']
    let specialImg3 = imgs[4]
    console.log(specialImg1)
    console.log(specialImg2)
    console.log(specialImg3)
```

![image-20230124163810131](C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20230124163810131.png)



可以使用document.getElementByTagName(*)来获取页面上的所有属性,顺序就是他们在页面中出现的顺序



第三种获取元素的方法时getElementByName,这个方法会返回给定name的所有元素,这个最常用于单选按钮,因为单选按钮必须拥有相同的name属性才能确保把值发送给服务器

```JavaScript
  <ul>
    <li><input type="radio" name="color" id="redColor"> <label for="redColor">red</label> </li>
    <li><input type="radio" name="color" id="greenColor"> <label for="greenColor">green</label></li>
    <li><input type="radio" name="color" id="blueColor"> <label for="blueColor">blue</label></li>
  </ul>
  <script>
    let btns=document.getElementsByName('color')
    console.log(btns)
```

![image-20230124164702292](C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20230124164702292.png)



这个方法也会返回HTMLCollection，但是namedItem属性会始终是第一个元素



#### 1.2.4 特殊集合

document对象中还有一些特殊集合，这些集合也是HTMLCollection的实例，他们是访问文档中公共部分的快捷方式。

* document.anchors:  文档中所有带name属性的a标签
* document.applets：  所有applet元素（已弃用！！！）
* document.forms：所有form元素
* document.images：所有img元素
* document.links：所有带href的a元素

这些特殊集合始终在HTMLCollection上，而且与所有HTMLCollection对象一样实时更新且可用item和namedItem属性以及中括号语法



#### 1.2.5 DOM兼容性检测

主要是用一种hasFeature方法，但目前这种方法已经废弃，这个方法所有返回结果都是true



#### 1.2.6 文档写入

document对象保留了一些古老的能力。也就是向页面中输出内容，这个能力对应四种方法，write，writeln，open和close，write和writeln都接受一个字符串，不同的是ln代表着换行

```JavaScript
  <p>the current date and time is: </p>
  <script>
    document.write(`<strong>${new Date().toString()}</strong>`)
```

![image-20230124171842635](C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20230124171842635.png)

write和writeln最常用在**动态包含外部资源**，如JavaScript文件

```JavaScript
  <script>
    document.write("<script type=\"text/javascript\"src=\"test.js\">" + "<\/script>");
  </script>
//要注意这里最后的script标签要带\ ,也就是<\/script>,否则在字符串中的script会匹配第一个script标签,从而剩余一个script结尾标签导致出错
```



需要注意的是.如果write推迟到页面加载完成之后在执行,那么就会**重写整个页面**

```JavaScript
<p>this content will not get to see because overwritten
  </p>
  <script>
    window.onload = function () {
      document.write("<script type=\"text/javascript\"src=\"test.js\">" + "<\/script>");
    }
  </script>
```

window.onload会在页面加载完成之后执行,这时wirte会重写整个页面

open和close方法分别会打开和关闭网页输出流



### 1.3 Element类型

Elemnet类型的节点具有以下特征:

* nodeType等于1
* nodeName'的值等于标签名
* nodeValue值为null
* parentNode值为document或者element对象
* 子节点可以是Element,Text,Comment,ProcessingInstruction,CDATASection,EntityReference类型



使用nodeName或者TagName属性可以获取元素的标签名 ,在HTML中,  元素的标签名都是大写的,例如div的标签名是DIV



#### 1.3.1 HTML元素

所有html元素都通过HTMLElemnt类型来表示,包括其直接实例和间接实例,HTMLElement继承了Element类型并增加了一些属性,这些属性对应了html元素的标准属性

* id : 文档中的唯一标识符
* title: 包含元素的额外信息
* lang: 元素内容的语言代码
* dir: 语言的书写方向
* className: 相当于class属性,用于指定元素的类,因为class是JavaScript的关键字,所以不能直接使用class

这些属性是可以修改的!!

```JavaScript
 <div id="myDiv" class="box" title="none" dir="ltr" lang="UTF-8"></div>
  <script>
    let div = document.querySelector('div');
    console.log(div.id)
    console.log(div.className)
    console.log(div.title)
    console.log(div.dir)
    console.log(div.lang)

    div.id = 'yourDiv'
    div.className = 'content'
    console.log(div.id)
    console.log(div.className)
```

![image-20230124180728526](C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20230124180728526.png)

所有的html元素都是HTMLElememt的类或者子类的实例..



#### 1.3.2 取得属性

属性可以给元素附加更多信息,DOM中有关获取属性的操作有getAttribute,setAttribute和removeAttribute属性

给getAttribute属性传值时注意class就用class而不是className,另外属性不区分大小写，自定义属性以data-*的方式定义

```JavaScript
<div id="myDiv" class="box" title="none" data-ownProperty="hello world"></div>
  <script>
    let div = document.querySelector('div');
    console.log(div.getAttribute('class'))
    console.log(div.getAttribute('data-ownProperty'))
```

![image-20230124195832175](C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20230124195832175.png)

对于非自定义属性,在DOM对象中可以访问得到,可以使用Dom属性方法访问,也可以使用getAttribute方法来获取,通常情况下这两个方法取得的值是一样的,但是两个属性除外

* style属性

  * 通过DOM属性访问,返回一个CSSStyleDEclaration对象

  * 通过getAttribute方法访问,返回css字符串

  * ```JavaScript
    <div style="width: 100px;height: 100px;"></div>
      <script>
        let div = document.querySelector('div');
        console.log(div.getAttribute('style'));
        console.log(div.style);
    ```

  * ![image-20230124200626145](C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20230124200626145.png)

* 事件处理程序作为属性,比如onclick,之类的事件处理程序

  * 使用getAttribute时,会返回字符串形式的源代码

  * 使用onclick属性获取时,会得到JavaScript函数

  * ```JavaScript
    <div style="width: 100px;height: 100px;background-color: red;" onclick="alert('hello')"></div>
      <script>
        let div = document.querySelector('div');
        console.log(div.getAttribute('onclick'));
        console.log(div.onclick);
    ```

  * ![image-20230124201052006](C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20230124201052006.png)



#### 1.3.3 设置属性

setAttribute方法接收两个参数,属性名和属性值,  如果属性已经存在,那么就替换属性值.    setAttribute可以设定HTML属性,  也适用于自定义属性

因为元素属性也是DOM对象属性,所以支持给DOM对象定义属性,这样属性也会出现在元素中 ,  需要注意的是, 给DOM对象添加属性如果是自定义的属性(不是指data-),那么对于这个自定义属性getAttribute返回值会变成null

```JavaScript
let div = document.querySelector('div');
    div.dataset.bgcolor='red';
    console.log(div.getAttribute('data-bgcolor'));//说明data-是DOM属性
    div.font='weight';
    console.log(div.getAttribute('font'))//DOM中没有font属性
```

![image-20230124201807268](C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20230124201807268.png)



最后一个removeAttribute,直接把属性移除



#### 1.3.4  attribute属性

Element类型是唯一一个使用attribute属性的类型,attribute属性包含一个nameNodeMap的实例.  在Element类型的实例中,所有的属性都会保存在这个nameNodeMap中,以一个Attr节点的形式存在.  另外.nameNodeMap对象和nodeList类似,也是实时的对象

nameNodeMap包含下列方法:

* getnameItem(name):  返回nodeName等于name的节点
* removeNameItem（name):  删除含有对应name 的节点
* setNameItem(node):   向列表中添加node节点, 以其nodeName为索引
* item(pos):  返回索引位置pos处的节点

attribute属性中每个节点的nodeName就是属性名,nodeValue就是属性值, 可以通过中括号语法获取或者修改属性

```JavaScript
<div id="myDiv" class="theDiv"></div>
  <script>
    let div = document.querySelector('div');
    // 获取id值
    let id = div.attributes.getNamedItem('id').nodeValue;
    let className = div.attributes['class'].nodeValue
    console.log(id, className);
    div.attributes['class'].nodeValue = 'box'
    console.log(div.attributes['class'].nodeValue )
```

![image-20230124203839577](C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20230124203839577.png)



removeNameItem方法也是会删除属性,但与removeAttribute不同,这个方法会返回被删除的属性

```JavaScript
<div id="myDiv" class="theDiv"></div>
  <script>
    let div = document.querySelector('div');
    let oldAttr = div.attributes.removeNamedItem('class');
    console.log(oldAttr);
```

![image-20230124204349212](C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20230124204349212.png)

```
注意: Attribute最常用的情况是需要迭代元素上所有属性的时候
```





#### 1.3.5 创建元素

创建元素的方法是document.createElement方法,   注意创建好元素后,需要appendChild或者insertBefore将新创建的属性添加到DOM树中。

另外，用这种方法创建的元素，其ownerDocument属性值是当前document



#### 1.3.6 元素后代（*）

元素可以有任意多个后代，元素自身也可以是别的元素的后代 ，一般元素的子元素都可以在childNode属性中查到，但是依据浏览器的不同，可能会出现对于回车符也当做一个空文本节点， 所以当对节点做某些操作时，需要检测一下节点的类型，然后在进行操作

```JavaScript
<ul>
    <li>item1</li>
    <li>item2</li>
    <li>item3</li>
  </ul>
  <script>

    let ul = document.querySelector('ul');

    function typeCheck(el) {
      for (let i = 0; i < el.childNodes.length; i++) {
        if (el.childNodes[i].nodeType === 1) {
          console.log(`第${i}个节点是元素`)
        }
      }
    }

    typeCheck(ul)
```

![image-20230124210522075](C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20230124210522075.png)

这里**normalize方法是去不掉**这个回车文本节点的



如果想获取某一元素中后代的所有元素,包括子代的子代,那么可以单独在这个元素上调用getElementByTagName(*)

```JavaScript
<ul>
    <li>item1</li>
    <li>item2</li>
    <li>item3</li>
  </ul>
  <script>

    let ul = document.querySelector('ul');
    let lis=ul.getElementsByTagName('li')
    console.log(lis)
```

![image-20230124212511015](C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20230124212511015.png)



### 1.4 Text类型

text类型的节点具有以下特征:

* nodeType等于3
* nodeName等于'#text'
* nodeValue的值是文本
* parentNode的值为Element对象
* 不支持子节点

获取或者修改文本内容可以使用nodeValue或者data的值二选一,使用其中任何一个修改文本都会对另一个产生影响

文本节点暴露以下方法:\

* appendData(text): 从文本后面添加新的文本
* deleteData(offset,count): 从位置offset开始删除count个字符
* insertData(offset,text):  在位置offset插入text
* replaceData(offset,count,text),从offset开始,查count个字符,用text替代
* splitData(offset):  从offset处分为两个文本节点
* substringData（offset，count）提取从offset到offset+count的文本

除此之外还可以用length获取文本长度，与nodeValue.length或者data.length结果一致



默认一个元素应该只有一个文本节点，一个空格也会被认为是一个文本节点

```JavaScript
注意： 在设置文本节点时，哟一些字符会被转为实体编码，也就是小于号，大于号和引号会被转义（保留！！）
```



####    1.4.1 创建文本节点

使用document.createTextNode方法创建文本节点，创建出来的节点的ownerDocument属性是document

一般来说，一个元素只包含一个文本节点，但是也可以让一个元素包含多个文本节点，只需要在一个元素上多appeng几个文本节点就可以了



#### 1.4.2 规范化文本节点

还是使用normalize（）方法会将两个相邻的文本节点合并为一个文本节点，但是不相邻的文本节点不会出现这样的合并

```JavaScript
 <div>hello <div></div> world </div>
  <script>

    let div = document.querySelector('div')
    console.log(div.childNodes)
    div.normalize()
    console.log(div.childNodes)
```

![image-20230124220205927](C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20230124220205927.png)



#### 1.4.3 拆分文本节点

拆分文本最常用于提取数据的DOM解析技术

使用splittext方法，返回拆分后剩下的文本

```JavaScript
<div>hello world </div>
  <script>

    let div = document.querySelector('div')
    let newNode=div.firstChild.splitText(5)
    console.log(div.firstChild.nodeValue)
    console.log(newNode.nodeValue)
    console.log(div.childNodes.length)
```

![image-20230124220656434](C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20230124220656434.png)



### 1.5 Comment类型

DOM中的注解通过comment类型表示，具有以下特征：

* nodeType等于8
* nodeName等于‘#name’
* nodeValue等于注释内容
* parentNode的值为element或者document
* 不支持子节点

Comment类型与text类型继承同一个基类， 除splittext方法外其他所有方法与text类型相同

注释节点可以通过nodeValue来访问或者data来访问

浏览器不承认</html>后面的注释，这点需要注意，无法访问该标签后面的节点



### 1.6 CDATASection类型

这个与XML有关，暂时不学



### 1.7 DocumentType类型

Documenttype类型的节点包含文档的文档信息，具有以下特征

* nodeType等于10
* nodeName等于文档类型的名称
* nodeValue等于null
* parentNode值为Document对象
* 不支持子节点

![image-20230124222605126](C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20230124222605126.png)

对于支持 DocumentType类型的浏览器， DocumentType对象保存在document.doctype中

​	

### 1.8 DocumentFragment类型

DocumentFragment类型是一个轻量级的document对象

DocumentFragment类型的实例不会加入DOM树，因此也不会对DOM产生什么影响

DocumentFragment类型性能并不如直接将元素加入到DOM中性能高，但是优点是可读性好

DocumentFragment类型的特点：

* nodeType等于11
* nodeName等于‘#document-fargment’
* nodeValue等于null
* parentNode等于null，说明这个类型的实例不属于文档
* 子节点是document可以加入的任何节点



DocumentFragment类型像一个要被添加到文本节点的仓库，可以先在仓库中创建基本节点结构再用appendChild方法添加到对应节点上去



创建DocumentFragment类型：

document.createDocumentFragment()

在DocumentFragment中添加节点：

使用appendChild或者insertBefore方法

```JavaScript
<ul></ul>
  <script>
    let ul = document.querySelector('ul')
    let documentFragment = document.createDocumentFragment()
    for (let i = 0; i < 3; i++) {
      let li = document.createElement('li')
      let text = document.createTextNode(`item${i + 1}`)
      li.appendChild(text)
      documentFragment.appendChild(li)
    }
    ul.appendChild(documentFragment)
```

![image-20230124230818124](C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20230124230818124.png)

### 1.9 Attr类型

元素数据在DOM中用Attr类表示，Attr类型构造函数和原型在所有浏览器中都可以访问

Attr类型的特点：

* nodeType等于2
* nodeName值为属性名
* nodeValue值为属性值
* parentNode值为null
* 在HTML中不支持子节点

属性节点虽然是节点，但是却不认为是DOM树中的一部分，且Attr节点很少被引用，大多数使用getAttribute，setAttribute。removeAttribute



Attr对象有三个属性name，value，special，前两个属性与nodeName和nodeValue一样，第三个属性是一个布尔值，表示属性使用的是默认值还是被指定的值

这个节点没啥用





​                                                                  

































































