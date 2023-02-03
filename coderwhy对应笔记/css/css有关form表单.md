# form表单

action内部填入要导航的网站,method决定导航方法,get方法在url内填入queryString,post方法则是将数据放入post体内部 ,  target决定打开页面的方法,  和a元素的target一致

```html
<form action="https://www.baidu.com/s" method="get target="_blank"
    <input type="text" name="wd" id="">
    <input type="submit" name="" id="">
  </form>
```

![image-20221119154510769](C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20221119154510769.png)

#### value与placeholder的区别

value可以作为input的默认值,  直接发送给服务器

placeholder就是顾名思义,  拿一些文本占地方的,  可以敲入一些文本,这些占用文本会立即消失



#### 什么是outline,  与border的区别

outline是在选中时,  input默认出现的一个粗边框,  设置为0可以阻止在选中时出现这个边框

border是无论是否选中都会出现的边框
