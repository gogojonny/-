# :nth-child(an+b)

:nth-child结构伪类,会按照后面的(an+b)的结果选择哪些兄弟元素获取样式

a和b都是整数,且不能改变顺序,可按照以下五种方式来给对应元素添加样式

* 选择第几个元素
* 选择倒数第几个元素
* 选择前几个元素
* 选择倒数后几个元素
* 选择按照an+b得带的数值

#### nth-child

* ```css
     /* :nth-child(an+b) 这个 CSS 伪类首先找到所有当前元素的兄弟元素 */
      /* 选择第几个元素 */
      .old li:nth-child(1) {
        color: red;
      }
  
      /* 选择倒数第几个元素 */
      .old li:nth-last-child(1) {
        color: blue;
      }
  
      /* 选择前几个 */
      /* n是指自然数, 如果只填入n就是选择第0,1,2,3....个,但是如果是-n,就代表是负数,负数不会处理,后面填入几,就代表选多少个 */
      .old li:nth-child(-n+3) {
        font-size: 20px;
      }
  
      /* 选择后几个 */
      /* nth-last-child表示从后向前选 */
      .old li:nth-last-child(-n+3) {
        font-size: 20px;
      }
  
      /* 按照一定规律选择 */
      /* 由于n代表选择0,1,2...,那么2n代表选择0,2,4...,同理2n+1代表选择1,3,5...,这么说通过对n进行操作可以按照规律来选择 */
      /* 选择所有偶数项 */
      .new li:nth-child(2n) {
        color: green;
      }
  
      /* 选择所有奇数相 */
      .new li:nth-child(2n+1) {
        color: yellow;
      }
  
      /* 选择所有n的平方的项 */
      /* 在css中没有办法提供选择n的平方的项,因为这个接口是an+b形式的 */
    </style>
  ```



```html

<body>
  <ul class="old">
    <li>列表1</li>
    <li>列表2</li>
    <li>列表3</li>
    <li>列表4</li>
    <li>列表5</li>
    <li>列表6</li>
    <li>列表7</li>
    <li>列表8</li>
    <li>列表9</li>
    <li>列表10</li>
  </ul>

  <ul class="new">
    <li>新列表1</li>
    <li>新列表2</li>
    <li>新列表3</li>
    <li>新列表4</li>
    <li>新列表5</li>
    <li>新列表6</li>
    <li>新列表7</li>
    <li>新列表8</li>
    <li>新列表9</li>
    <li>新列表10</li>
  </ul>
```

nth-child的真正理解:

nth-child会选择冒号前面元素的所有兄弟元素,  并做一个排序,, 按照排序如果对应序号的元素是冒号前面的元素,就给这个元素添加样式,如果冒号前面的元素不是序号元素,就不会添加样式.

#### nth-of-type

与nth-child对标的是nth-of-type,相对于nth-child更简单一些,  他会选择冒号前面所有标签并排序,括号中的参数是第几个该标签元素或前几个该标签元素

```css
 ul>li:nth-of-type(6) {
      color: red;
    }
```



这些伪类还有一些简洁的伪类用于替代这些伪类

例如first-child, last-child, first-of-type, last-of-type, only-child, only-of-type

```css
    /* ul>li:nth-of-type(6) {
      color: red;
    } */
    /* first-child, last-child, first-of-type, last-of-type, only-child, only-of-type尝试 */
    /* first-child与nth-child(1)相同 */
    ul li:first-child{
      color: red;
    }
    /* last-child与nth-last-child(1)相同 */
    ul li:last-child{
      color: green;
    }

    /*first-of-type  */
    ul li:first-of-type{
      font-size: 20px;
    }

    /* last-of-type */
    ul li:last-of-type{
      font-size: 20px;
    }

    /* only-child, 冒号前面的元素的父元素只有一个子元素,而且是该元素, 冒号前面没有元素就任意元素 */
    ul li:only-child{
      color: yellow;
    }

    /* only-of-type ,冒号前面的元素的父元素仅仅拥有一个该元素,父元素可以有多个元素 */
    ul :only-of-type{
      font-weight: bold;
    }
```





:root 代表html元素

:empty 代表没有内容的标签