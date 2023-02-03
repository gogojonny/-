# DOM2和DOM3



DOM1主要定义了HTML和XML文档的底层结构。DOM2和DOM3在这些结构基础上添加了一些交互能力。实际上，DOM2和DOM3是按照模块化的思路来定制的，每个模块之间有一定联系，但分被针对某个DOM子集

下面是这些模块

* DOM Core：在DOM1核心部分的基础上，为节点增加方法和属性
* DOM Views：定义基于样式信息的不同视图
* DOM Events：定义通过DOM实现文档交互
* DOM Style： 定义以编程方式访问和修改CSS样式的接口 
* DOM Tracersal and Range：新增遍历DOM文档及选择文档内容的接口
* DOM HTML：在DOM1 HTML的基础上，增加属性，方法和新街口
* DOM Mutation Observer：定义基于DOM变化出发回调的接口，这个模块是DOM4级模块，用于取代Mutation Event





## 1 DOM演进

DOM2和DOM3 Core模块的目的是扩展DOM API。满足XML的所有需求并提供个好的错误处理和特性检测



### 1.1 XML命名空间



### 1.2 其他变化



#### 1.2.1 DocumentType变化

在Documenttype中添加了三个属性，publicId，systemId，internalSubset，其中publicId和systemId主要用于在文档声明中有效，但是无法使用DOM API访问的数据。

internalSubset用于访问文档类型声明中可能包含的额外定义。

这三个属性在html中用的不多，但是xml中稍微常用一些

#### 1.2.2 Document的变化

Document类型的更新中唯一与命名空间无关的是importNode（），这个方法的目的是从其他文档中获取一个节点并导入到文档，以便插入到新文档中

这个方法接收两个参数，一个是导入的节点，另一个是布尔值，表示是否一同导入子树、

通常appendChild添加到子节点都会有ownerDocument属性，这个属性指向当前节点，如果子节点的ownerDocument属性不是指向当前节点，就会报错

使用importNode方法会返回一个新的节点，这个新节点的ownerDocuemnt应该是指向当前文档

这个方法在HTML中使用的并不多，在XML文档中使用的会更多一些。



DOM View 给Document类型添加了一个新的属性叫做defaultView属性，这个属性指向一个拥有当前文档的窗口。（或者窗格iframe）这个属性并没有说明什么时候可以使用这个窗口。 这个属性在IE8以及之前的浏览器不支持。



DOM Cores 还针对document.implementation对象增添了两个新的方法，createDocumentType和createDocument。前者用于创建DocumentType类型的新节点，接收三个参数，文档类型声明，publicId和systemId。  需要注意的是，已有文档的文档类型不可更改，因此这个方法只能在创建文档时才会用。

建立新文档需要使用createDocuemnt（）方法，接收三个参数，文档元素的namespaceURI，文档元素的标签名和文档类型



DOM2 HTML模块也为docuemnt.implementation对象添加了createHTMLDocument（）方法，使用这个方法可以创建完整的HTML文档，包括body和head标签，这个方法只接受一个参数，就是文档的标题（title标签的值）。

由此创建的HTML文档是HTMLDocument类型的实例，包含该类型的所有属性和方法



#### 1.2.3 Node的变化

DOM3新增加比较Node的方法，一个是isSameNode（）和isEqualNode（），这两个方法都接受一个节点参数，如果这个节点与参考节点相等，就返回true。

节点相同，表示有相同的引用，节点相等，表示节点的属性值相同，包括同样的类型，childNodes，attributes也相等

```JavaScript
    let div1 = document.createElement('div')
    div1.setAttribute('class', 'foo')
    let div2 = document.createElement('div')
    div2.setAttribute('class', 'foo')
    console.log(div1.isSameNode(div1));//true
    console.log(div1.isEqualNode(div2));//true
    console.log(div1.isSameNode(div2));//false
```



DOM3 也增加了给Node节点附加额外数据的方法。setUserData方法接收三个参数：键，值，处理函数，用于给节点添加数据。例如下面就是利用setUserData来设置数据（目前这个属性似乎不能用）



#### 1.2.4 内嵌窗格的变化

DOM2给HTMLframeElement添加了新的属性，叫做contentDocument，这个属性包含了子内嵌窗格中内容的document对象指针

```JavaScript
   let iframe = document.querySelector('iframe')
    console.log(iframe.contentDocument);
```

contentDocument属性是一个document实例，它和正常的document一样，可以使用任何的文档的属性和方法。

还有一个是contentWindow，返回响应窗格的window对象，里面有一个document属性。所有现代浏览器都支持这两个属性

```
注意： 跨源访问子内嵌窗格的document对象会受到安全限制。如果内嵌窗格中加载了不同域名的页面，或者使用了页面的不同协议，则访问其document对象会出现报错

```

## 2 样式

html中样式有三种定义方法，内嵌式，行内式，外链式。 DOM Style为这三种添加样式的方式都添加了API



### 2.1 存取元素样式

任何支持style属性的元素在JavaScript中都会有一个对应的style属性，这个属性是DOMStyleDeclaration类的实例。这个JavaScript中的style属性包含使用HTML style属性设置的样式信息，但是不包含从文档样式表或者外链式获得的信息。在HTML style中的样式信息在JavaScript中都有对应的属性，另外，因为样式有信息使用的是连字符，在JavaScript中就都用驼峰命名法来表示这些属性

| css属性          | JavaScript属性        |
| ---------------- | --------------------- |
| background-image | style.backgroundIamge |
| color            | styel.color           |
| display          | style.display         |
| font-family      | style.fontFamily      |

大多数属性都能转过来，但是float属性不能转，因为这个属性是JavaScript的保留字

在任何时候，只要通过JavaScript获取到元素，就可以使用JavaScript来给元素设置样式

```
注意： 在标准模式下，设置的样式都需要带上单位。例如style.width=‘100px；，如果不写单位，就会默认忽略这个样式的设定。在混杂模式下，如果没有设置单位就会按照默认单位，实践中，最好都加上单位
```



#### 2.1.1 DOM样式属性和方法

DOM2 Style也在style上定义了一些属性和方法

* cssText：表示css代码
* length：css属性数量
* parentRule：表示css信息的CSSRule对象
* getPropertyPriority（propertyName）：如果这个属性使用了！important，就返回“important”，否则返回空字符串
* getpropertyValue（propertyname):  返回属性propertyName的字符串值
* item（index）：返回索引值为index 的属性名
* removeProperty（propertyname): 从样式中删除propertyname
* setProperty(propertyname，propertyValue，priority) 设置一个新的属性，priority是important或者空字符串

通过cssText可以存取css样式代码，在读取模式下，cssText返回样式代码在浏览器中的表示。在写入模式下，给cssText赋值会重写整个css样式

getPropertyValue（）方法返回css属性值的字符串表示。

removeProperty（）方法会删除指定的css样式属性。使用这个方法意味着会使用该元素的默认属性



#### 2.1.2 计算样式



style对象中包含支持style属性的元素为这个属性设置样式信息，但不包含从其他样式表层叠继承同样影响这个元素的样式。

DOM2中为document.defaultView上新增了getComputedStyle方法，曾方法接受两个参数，第一个表示要取得的样式和伪元素字符串（如：after），如果不需要伪元素，就传入null。getComputedStyle方法返回一个CSSStyleDeclaration。包含元素的计算样式

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    div {
      width: 100px;
      height: 100px;
      background-color: blue;
    }
  </style>
</head>

<body>
  <div style="background-color: red; border: 1px solid #000;"></div>

  <script>
    let div = document.querySelector('div')
    let divStyle = document.defaultView.getComputedStyle(div, null)
    console.log(divStyle.height);
    console.log(divStyle.width);
    console.log(divStyle.border);
  </script>

</body>

</html>
```



使用这个方法可以获取元素在继承样式表中的样式信息。但是这个信息是只读的，不能通过返回的样式信息对象来修改属性值。另外，对象中border属性的值随着浏览器实现的不同而不同，有的浏览器可能是rgba的形式，有些可能是十六进制的值



### 2.2 操作样式表

CSSStyleSheet类型表示css样式表，包括使用<link>和<style>定义的样式表，需要注意这两个标签并不是CSSStyleSHeet类型的实例。CSSStyleSheet是一个通用样式表类型，可以表示以任何方式在HTML中定义的样式表。元素特定类型的实例允许修改属性，但是CSSStyleSheet类型的实例是一个只读对象

CSSStyleSheet继承自StyleSheet类型，下面是该类型所继承的属性：

* disable：表示样式表是否被禁用了，只有这个属性是可读写的
* href：如果是link元素包含的样式表，则返回样式表的URL，否则返回null
* media：样式表支持的媒体类型集合，也有length和item（）方法。
* ownerNode：指向拥有当前样式表的节点，在HTML中要么是link元素要么是style元素
* parentStyleSheet：如果当前样式表示通过@import导入的，这个属性指向导入它的节点
* title：ownerNode的title属性
* type：字符串，表示样式的类型。对于css样式表来说就是text/css

下面是CSSStyleSheet独有的属性：

* cssRules： 当前样式表包含的样式规则集合
* ownerRule：如果样式表是@import导入的，则指向导入规则
* deleteRule（index）：在指定位置删除cssRules规则
* insertRules（rule，index）：在指定位置向cssRules中插入规则



document.styleSheets表示文档中可用样式表集合，这个集合代表可用的样式表，用length属性可以获取文档共有多少可以获取的样式表。

除了使用上述方法外，还可以直接在style元素或者link元素中直接获取CSSStyleSheet对象



#### 2.2.1 css规则

CSSRule类型表示样式表中的一条规则，这个类型也是通用基类，很多类型都继承他，但其中最常用的是CSSStyleRule，以下是CSSRule对象上可用的属性

* cssText: 返回整条规则文本
* parentRule： 如果这条规则被其他规则包含，则指向包含规则
* parentStyleSheet：包含当前规则的样式表
* selectorText：返回规则的选择器
* style：返回CSSStyleDeclaration对象，可以设置和获取当前规则中的样式
* type：数值常量，表示规则类型，对于样式规则，他始终为1

cssText与style.cssText类似，但是不完全一样，首先，cssText会返回包含选择器和大括号的样式文本，但是后者只会返回样式信息。另外前者是一个只读属性，后者是可以修改的



多数情况下，只用style就可以解决问题

```css
    div.box {
      width: 100px;
      height: 100px;
      background-color: blue;
    }
```



```JavaScript
    let sheet = document.styleSheets[0]
    let rules = sheet.cssRules || sheet.rules
    let rule = rules[0]
    console.log(rule.cssText);
    console.log(rule.selectorText);
    console.log(rule.style.cssText);
    rule.style.height = '200px'
```



#### 2.2.2 创建规则

使用insertRule方法可以直接添规则，第一个是要添加的规则，第二个是所要添加的位置

```JavaScript
    sheet.insertRule(` body{
      display: flex;
      align-items: center;
      justify-content: center;
    }`, 0)
```

不建议这样直接添加，因为添加多的时候不适合维护，另外可以使用动态样式加载技术



#### 2.2.3 删除规则

使用sheet.deleteRules（index）可以删除规则，删除规则和添加规则不是web开发中的常见做法，因为可能会影响css层得的效果



### 2.3 元素尺寸

#### 2.3.1 偏移尺寸

偏移尺寸包含元素在屏幕上占用的视觉空间，包括所有内边距，滚动条，边框（但不包含外边距)

* offsetHeight: 元素垂直方向占用的尺寸，包括元素高度，水平滚动条和上下边框的高度
* offsetLeft： 元素左侧边框距离包含该元素的元素左边框内侧的距离
* offsetTop：元素上边框外侧距离包含该元素的元素的上边框内侧
* offsetWidth：元素整个宽度加上水平边框宽度



其中offsetLeft和offsetTop是相对于包含元素的，包含元素保存在offsetParent中，但是offsetParent不一定是parentNode

![image-20230130170851689](C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20230130170851689.png)

```JavaScript
    function getElementLeft(element) {
      let actualLeft = element.offsetLeft;
      let current = element.offsetParent;
      while (current != null) {
        actualLeft += current.offsetLeft
        current = current.offsetParent
      }

      return actualLeft
    }
document.body的offsetparent属性值为null
```

上述方法可以获取某一元素在整个页面的横坐标，也可以将left换位top实现得到纵坐标

```
注意：所有这些偏移属性都是只读的，每次调用都会进行重新计算，所以做好查询一次后放入到变量中，这样可以避免影响性能
```



#### 2.3.2 客户端尺寸

元素的客户端尺寸表示元素的内边距与内容占用的空间，客户端尺寸只有两个相关属性clientHeight和clientWidth。

客户端尺寸实际上就是元素占用的空间，所以不包含滚动条，这两个属性最常用于**检测浏览器的视口**（body元素的尺寸）

![image-20230130190741145](C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20230130190741145.png)

与偏移尺寸一样，客户端尺寸也是只读的，每次调用都会进行重新计算。



#### 2.3.3 滚动尺寸

滚动尺寸的相关属性：

* scrollheight：没有滚动条出现时，元素内容的总高度
* scrollleft： 内容区左侧的像素数，设置这个属性可以修改内容的位置
* scrollTop：内容区顶部的像素数，设置这个属性可以修改内容的位置
* scrollWidth： 没有滚动条出现时，元素内容的总宽度

![image-20230130192736654](C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20230130192736654.png)

其中scrollLeft和scrollTop是可以修改的，这两个属性值为0的时候代表内容处于左上角



#### 2.3.4 确定元素尺寸

在对应元素上使用getBoundingClientRect()方法，返回一个DOMRect对象，使用这个对象上的属性便可知道元素相对于视口的位置

![image-20230130193139465](C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20230130193139465.png)







## 3 遍历



DOM Tranversal和DOM Range模块定义了两个类型御用辅助顺序遍历DOM结构。这两个类型NodeIterator和treeWalker从某个起点开始实现对DOM结构的优先遍历 

![image-20230130194528909](C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20230130194528909.png)                                                                    

​                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               

DOM遍历是对DOM结构的深度优先遍历，至少允许向两个方向移动，以给定节点为根节点，不能再DOM中向上超过这个节点

如果文档是从document开始遍历的，那么会一直遍历知直到末尾，然后反向遍历直到document，Nodeiterator和treeWalker都是按这种方式遍历的



### 3.1 NodeIterator

NodeIterator是两个类型中比较简单的，可以通过document.createNodeiterator()方法来获取实例，需要接收以下四个参数



* ``root``：作为遍历节点的根节点

* `filter`: NodeFilter对象或函数，表示是否接受或跳过特定节点，filter对象只有一个方法accpetNode（），如果想要访问节点就返回NodeFilter.FILTER_ACCEPT，如果不想访问节点就使用NodeFilter.FILTER_SKIP;           filter也可以是一个函数，同样如果想访问节点就像acceptNode方法一样就返回NodeFilter.FILTER_ACCEPT，如果不想访问节点就使用NodeFilter.FILTER_SKIP; 

* `whatToShow` 可选

  是一个可选的无符号长整型（`unsigned long`），是由节点过滤器（[`NodeFilter`](https://www.w3.org/TR/DOM-Level-2-Traversal-Range/traversal.html#Traversal-NodeFilter)）中的常量属性定义的位掩码。这是筛选特定类型节点的便捷方式。其默认值是 `0xFFFFFFFF` ，代表 `SHOW_ALL` 常量。

  | 常量                                     | 数字值                            | 描述                                                         |
  | :--------------------------------------- | :-------------------------------- | :----------------------------------------------------------- |
  | `NodeFilter.SHOW_ALL`                    | `-1` (即`unsigned long` 的最大值) | 显示所有节点。                                               |
  | `NodeFilter.SHOW_COMMENT`                | `128`                             | 显示 [`Comment`](https://developer.mozilla.org/zh-CN/docs/Web/API/Comment) 节点。 |
  | `NodeFilter.SHOW_DOCUMENT`               | `256`                             | 显示 [`Document`](https://developer.mozilla.org/zh-CN/docs/Web/API/Document) 节点。 |
  | `NodeFilter.SHOW_DOCUMENT_FRAGMENT`      | `1024`                            | 显示 [`DocumentFragment`](https://developer.mozilla.org/zh-CN/docs/Web/API/DocumentFragment) 节点。 |
  | `NodeFilter.SHOW_DOCUMENT_TYPE`          | `512`                             | 显示 [`DocumentType`](https://developer.mozilla.org/zh-CN/docs/Web/API/DocumentType) 节点。 |
  | `NodeFilter.SHOW_ELEMENT`                | `1`                               | 显示 [`Element`](https://developer.mozilla.org/zh-CN/docs/Web/API/Element) 节点。 |
  | `NodeFilter.SHOW_PROCESSING_INSTRUCTION` | `64`                              | 显示 [`ProcessingInstruction` (en-US)](https://developer.mozilla.org/en-US/docs/Web/API/ProcessingInstruction) 节点。 |
  | `NodeFilter.SHOW_TEXT`                   | `4`                               | 显示 [`Text`](https://developer.mozilla.org/zh-CN/docs/Web/API/Text) 节点。 |

* entityReferenceExpansion： 表示是否扩展实体引用。在HTML中永远不扩展



创建一个简单遍历所有节点的NodeIterator

```JavaScript 
    let iteratorNode = document.createNodeIterator(document.documentElement, NodeFilter.SHOW_ALL, null, false)
```



NodeIterator有两个方法，previousNode和nextNode，分别在节点树中实现前进一步或者后退一步。在创建NodeIterator时有一个内部指针指向根节点，第一次调用nextNode方法时会返回根节点，在最后一个节点上使用nextNode会返回null，同样在根节点上使用previousNode也会返回null

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
    let nodeIterator = document.createNodeIterator(div, NodeFilter.SHOW_ELEMENT, null, false)

    // 获取根元素
    let node = nodeIterator.nextNode()
    while (node !== null) {
      console.log(node.tagName);
      node = nodeIterator.nextNode()

    }

    // 定义NodeFilter,只获取li元素
    function nodeFilter(node) {
      return node.tagName.toLowerCase() == 'li' ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT
    }

    let newNodeIterator = document.createNodeIterator(div, NodeFilter.SHOW_ELEMENT, nodeFilter, false)
    let newNode = newNodeIterator.nextNode()
    while (newNode !== null) {
      console.log(newNode.tagName);
      newNode = newNodeIterator.nextNode()
    }
```

![image-20230130212006327](C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20230130212006327.png)

### 3.2 treeWalker

treeWalker是NodeIterator的高级版，参数不变，但是新增了四个方法

* parentNode（）：遍历到当前节点的父节点
* firstChild（）：遍历到当前节点的第一个子节点
* lastChild（）：遍历到当前元素的最后一个子节点
* nextSbiling（）：遍历到当前元素的下一个同胞节点
* previousSibling（）：遍历到当前元素前一个同胞节点

在treeWalker中第一次使用nextNode（）方法不会在返回根节点

调用treeWalker使用document.createTreeWalker，参数和NodeIterator的一致。

不同的是NodeFilter在TreeWalker上还有一个返回值叫做FILTER_SKIP

* 在使用NodeIterator时，FILTER_SKIP与FILTER_REJECT一样
* 在使用TreeWalker时，FILTER_SKIP表示跳过当前节点并进行下一个节点的访问，而FILTER_REJECT表示跳过当前节点并且跳过当前节点的所有子节点

treeWalker相比于NodeIterator有更大的灵活性

treeWalker有一个currentNode（）方法，表示遍历过程中上一次返回的节点，可以通过修改这个属性来修改下一次遍历的起点

```javascript
    console.log(walker.currentNode);
```





## 4 范围

为了对页面实现更精细的控制，DOM2Traversal and Range 模块定义了范围接口。范围可以在文档中选择内容而不用考虑节点之间的限制，范围在常规DOM操作粒度不够时有作用



### 4.1 DOM范围

使用document.createRange（）方法创建一个范围实例。这个实例是与文档有关的，不能在其他文档中使用这个实例。

所有的range实例都是Range类型的，上面有一些属性

* startContainer：范围起点所在的节点
* startOffset：范围起点在startContainer中的偏移量，如果startContainer是文本或者注释节点，那么startOffset是指范围起点前跳过的字符数，否则表示第一个节点的索引
* endContainer：范围终点所在节点
* endOffset：代表范围结束为止在endContainer中的偏移量，如果是文本或者注释，就代表endContainer节点开头到range末尾的总字符个数，如果是节点，则endOffset指endContainer开头到range 的总节点个数

* commonAncestorContainer：文档中以startContainer与endContainer为后代的最深的节点。

这些属性会在范围放到文档中特定位置时获得相应的值



### 4.2 简单选择

使用selectNode（）或者selectNodeContents





































