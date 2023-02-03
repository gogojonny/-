# a元素的使用

## a元素的由来

a是HTML语言标签。 a标签定义超链接，用于从一个页面链接到另一个页面。 a元素最重要的属性是 href 属性，它指定链接的目标。 在 HTML 中标签<a></a> 或者大写字母A 。 其中的a（或者 A） 是 **anchor** 的缩写 。

anchor:船锚

## a元素的属性

* href:
  * href属性全称为Hypertext Reference(引用,指针)
  * href的值指向对应标签页,例如
* target
  * target属性决定链接的打开方式,一般分为在`当前标签页`打开和在`新的标签页`打开

### target

#### target的值

一般为两类,分别是` "_self"`和` "_blank"`,默认值是` "_self"`,其他值也有,不过不重要

##### 设置为self

```html
  <a href="http://www.baidu.com/" target="_self">百度</a>

```

上面代码执行后会在当前页打开对应的网址,如下图:

<img src="C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20220918223653153.png" alt="image-20220918223653153"  />

##### 设置为blank

如果设置为` "_blank"`,则在新的标签页打开:

```html
  <a href="http://www.baidu.com/" target="_blank">百度</a>

```

![image-20220918224008929](C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20220918224008929.png)

` "_blank"`中blank有空白的意思,意思是这个链接要先创建一个新的空白页,然后再打开这个链接.

##### 其他target值

除了` "_self"` ` "_blank"` 外,还有`"_parent"`和`"_top"`元素,不过这里这两个元素都要和iframe配合使用,所以可以点击[链接](D:\前端学习\红宝书\coderwhy对应笔记\html_iframe元素的使用.md)来查看相关的使用

### href

href属性不仅可以打开外链,也可以打开本地的文件

#### 用href属性打开外链:

```html
<a href="http://www.baidu.com/" target="_self">百度</a>
```

href属性打开外链的实际过程:

利用外链链接到百度服务器--->返回静态资源(实际上返回index.html这个文件,css,js等文件等加载html遇到的时候再开始返回)

#### 用href打开本地文件:

```html
  <a href="../html+css项目/index.html" target="_blank">本地文件</a>
```

和导入图片的方法相同,利用相对路径.

#### 用href下载文件

href不仅可以打开链接,甚至可以下载文件,例如下载一个zip包:

```html
  <a href="qq.zip">下载qq</a>

```

#### 用href进行邮件发送

```html
  <a href="mailto:3538228277@qq.com">发送邮箱到这个qq邮箱</a>
```

之后会出现邮箱选项:

![image-20220919223737010](C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20220919223737010.png)





## a元素本页面的锚点链接

有时候我们需要在本页面上有一个目录,点击目录可以快速到达对应的内容,这个特效a元素的href刚好满足,

想达到这个效果一共需要两步,

**第一步**:在href中添加要跳转内容的id

```html
<a href="#theme01">标题一</a>
<a href="#theme02">标题二</a>
<a href="#theme03">标题三</a>
```

**第二部**:在要跳转内容的标签中加入对应id

```
  <h2 id="theme01">标题一</h2>
  <h2 id="theme02">标题二</h2>
  <h2 id="theme03">标题三</h2>
```









