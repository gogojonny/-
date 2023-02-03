

# iframe元素的使用

## iframe的作用与功能

可以在自己的html页面中嵌套其他的html界面,例如下面就是嵌套淘宝的html

```html
  <iframe src="http://www.taobao.com" width="800" height="600" frameborder="0"></iframe>

```

目前是微前端的一种解决办法,但似乎不是最佳实例.

## iframe的属性

### src属性

用于添加网址,在当前页面上嵌入该网址内容

```html
  <iframe src="http://www.taobao.com" width="800" height="600" frameborder="0"></iframe>

```

此处就是嵌入淘宝到当前页面

### frameboard属性

```html
  <iframe src="http://www.taobao.com" width="800" height="600" frameborder="0"></iframe>

```

`frameboard`属性只有两个值,一个是0,一个是1,0代表嵌入的内容不会有边框,1代表嵌入的内容有边框,这个值设置为其他数字时候无效



## iframe与a元素的联合使用

我们知道,a元素的target属性决定新网址的打开方法,`"_self"`和`"_blank"`就不在赘述,但target属性还有`"_parent"`和`"_top"`值,这两个值与iframe息息相关.

当我们在当前页面嵌套其他页面,且这个页面包含一个target设置为`"_parent"`值的a元素时候:

```html
  <iframe src="./other/a元素与iframe的联合使用.html" frameborder="1"></iframe>
```

```html
在  ./other/a元素与iframe的联合使用.html  下
<a href="http://www.baidu.com/" target="_parent">百度一下</a>

```

---



当我们打开a链接的时候,其网址会跳到我们调用a元素的网页:

![image-20220920151853174](C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20220920151853174.png)

点击该网址后:

<img src="C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20220920151959661.png" alt="image-20220920151959661" style="zoom:50%;" />

---

而如果我们只是将a的target值设置为`"_self"`,那么只会在当前iframe范围内显示:

```html
  <a href="http://www.taobao.com/" target="_self">百度一下</a>

```



![image-20220920152325810](C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20220920152325810.png)

---

同样的例子,如果我们把a元素的target属性设置为`"_top"`那么这个页面就会在整个嵌套的**最顶端 ** *(可能不止嵌套了一个页面)*显示.















