

# 14.2 DOM编程



## 2.1 动态脚本

动态脚本就是一开始页面初始加载时不存在，之后又通过DOM包含脚本

有两种方法实现动态脚本

* 创建script标签并引入js脚本文件

  ```JavaScript
  let script = document.createElement('script')
      script.src='test.js'
      document.body.appendChild(script)
  ```

  

* 创建script标签并在内部增加脚本文本

  ```JavaScript
  let script = document.createElement('script')
      let textSrcipt = document.createTextNode('(function(){console.log("hello world")})()')
      script.appendChild(textSrcipt)
      document.body.appendChild(script)
  ```

  上面这种写法在早期ie中可能不支持，但是script有一个text属性，这样可以写出更好兼容性的代码

  ```JavaScript
      let script = document.createElement('script')
      let code = "(function(){console.log('hello world')})()"
      try {
        script.appendChild(document.createTextNode(code))
      } catch (err) {
        script.text = code
      }
      document.body.appendChild(script)
  ```
  
  这里IE浏览器不支持给script标签动态添加代码，但是创建的script对象有一个属性叫text，这个属性里面可以插入源代码                                                                                                                         

注意，使用innerHTML属性创建的<script>元素永远不会执行。 浏览器会创造这个元素并在内部添加代码，但是解析器会给这个script标签贴上永久不会执行的

的标签。只要是innerHTML创造的script元素，以后 也没办法强制执行。



## 2.2 动态样式

和动态脚本一样，动态样式也是页面初次加载时不存在，后面才加上去的

下面是动态样式添加函数

```JavaScript
   function loadStyle(url) {
      let link = document.createElement('link')
      link.href = url
      link.rel = 'stylesheet'
      link.type = "text/css"
      let head = document.getElementsByTagName('head')[0]
      head.appendChild(link)
    }
```

也可以使用创建style元素并向其中添加文本的方式添加动态样式。但是太麻烦所以不推荐



## 2.3 操作表格

创建这样一个表格在DOM编程中十分麻烦，因为会涉及到大量的创建和添加，为了解决这个问题，DOM给表格创建添加了大量的属性

 ```JavaScript
   <table border="1" width="500px">
     <thead>
       <th>编号</th>
       <th>姓名</th>
       <th>年龄</th>
     </thead>
     <tbody>
       <tr>
         <td>1</td>
         <td>小明</td>
         <td>10</td>
       </tr>
       <tr>
         <td>2</td>
         <td>小红</td>
         <td>8</td>
       </tr>
     </tbody>
   </table>
 ```

DOM编程表格时给了很多属性

在table内

* create、delete THead
* create、delete TBody
* create、delete TFoot
* create、delete Caption
* rows
* THead
* TBody
* TFoot

在tbody内

* rows
* insertRows
* deleteRows

在tr内

* cells
* insertCells
* deleteCells

有tbody的属性，但是没有thead的属性， 也就是说th要用createElement方法

自己写了一些初始化函数

```JavaScript
 function rowCreater(tbody, num) {
      console.log('rowCreate')
      for (let i = 0; i < num; i++) {
        tbody.insertRow(i)
      }
      return tbody
    }
    function cellCreater(row, num) {
      console.log('cellCreate')
      for (let i = 0; i < num; i++) {
        row.insertCell(i)
      }
      console.log(row.cells)
    }

    function tbodyInit(tbody, rowsNum, cellsNum) {
      console.log('tbodyInit')
      let trs = Array.from(rowCreater(tbody, rowsNum).rows);
      trs.forEach((row) => {
        cellCreater(row, cellsNum)
      })
      console.log(trs)
    }

    function rowAdd(row, arr) {
      if (row.cells.length < arr.length) {
        let newArr = arr.slice(0, row.cells.length)
        for (let i = 0; i < row.cells.length; i++) {
          row.cells[i].appendChild(document.createTextNode(newArr[i]))
        }
      } else {
        for (let i = 0; i < row.cells.length; i++) {
          row.cells[i].appendChild(document.createTextNode(arr[i]))
        }

      }
    }
```



## 2.4 使用NodeList

**理解NodeList对象和相关的NameNodeMap和HTMLCollection对象是理解DOM编程的关键**

他们是实时的对象,也就是说他们的值永远代表最新状态

因为对象是实时更新的,所以也会带来一定问题,例如下面这个不会停止的for循环

```JavaScript
let divs = document.getElementsByTagName('div')
    for (let i = 0; i < divs.length; i++) {
      let div = document.createElement('div')
      document.body.appendChild(div)
    }
```

因为对象是实时更新的,也就是每次执行完代码后,divs.length的长度都会加一,因为i每次执行完也会加一,所以在检查i<divs.length时，一直都是小于的，这样就不会改变结果

解决办法是把divs的长度储存起来

```JavaScript
let divs = document.getElementsByTagName('div')
    for (let i = 0,len=divs.length;i<len;i++){
      let div = document.createElement('div')
      document.body.appendChild(div)
    }
```

或者用i来储存divs的长度

```JavaScript
 let divs = document.getElementsByTagName('div')
    for (let i = divs.length - 1; i >= 0; i--) {
      let div = document.createElement('div')
      document.body.appendChild(div)
    }
```













































