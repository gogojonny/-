#### 目录

* 将script放在body中内容的最后的两点原因
* 原因分析：JavaScript阻塞HTML解析
* 对于有defer属性的脚本，将script放在页面底部依然是最佳选择
* JavaScript代码编写建议



#### 将script放在body中内容的最后的两点原因

1, 避免JavaScript操作DOM失效
2, 在解析JavaScript代码之前，将页面的内容完全呈现在浏览器中，用户会因为浏览器显示空白页面的时间缩短而感到打开页面的速度变快了
下面，对这两点原因进行说明。

#### 原因分析：JavaScript阻塞HTML解析

下面这张图来自HTML规范，图中清晰地描述了外部JavaScript对HTML解析的阻塞（内联脚本没有加载脚本这一环节，而是直接执行）。

图中，
parser：解析
fetch：获取资源
execution：执行

![img](https://img-blog.csdnimg.cn/2019110914383628.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQyNTMyMTI4,size_16,color_FFFFFF,t_70)



可以看到，解析JavaScript代码时（不管是嵌入式代码还是没有defer或async属性的外部JavaScript），页面的处理会暂时停止，此时浏览器窗口将是一片空白。也就是说，<script>标签会阻塞HTML的解析。

#### 阻塞过程：

浏览器遇到<script>标签时，会唤醒JavaScript解释器，暂停HTML的解析，等到CSSOM构建完成（如果有的话），开始执行JavaScript脚本，JavaScript执行完毕后继续解析HTML。也就是说，浏览器会等待JavaScript资源下载完毕并执行完毕后才会继续解析HTML。

这时，我们就会发现一个矛盾**。JavaScript是无法操作位于它下方的DOM的，**因为此时DOM还没有构建出来。因此最好将<script>放在<body>之后，也就是等到所有的HTML都解析完成之后，再进行JavaScript的相关操作。而CSS会阻塞JavaScript的执行，因此CSS资源应优先于JavaScript资源被引入。

ps：由于JavaScript在操作DOM时，可能会引起浏览器的回流（reflow）或重绘（repaint），影响页面渲染性能，因此应该尽可能避免用JavaScript操作DOM。

#### 对于有defer属性的脚本，将script放在页面底部依然是最佳选择

下面这张图来自Can I use…

![image-20230106180558154](C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20230106180558154.png)



从图中，我们可以知道：

1, defer属性只适用于外部脚本文件
2, 当有多个延迟脚本时（也就是下面的情况），虽然HTML5规范要求脚本按照他们出现的先后顺序执行（也就是第一个延迟脚本先于第二个延迟脚本执行，而两个脚本都会先于DOMContentLoaded事件执行），但现实中，延迟脚本不一定会按照顺序执行，也不一定会在DOMContentLoaded事件触发前执行，因此最好只有一个延迟脚本
3, 不支持defer属性的浏览器会忽略这个属性，像平常一样处理这个脚本（上图红色部分均不支持该属性，但可以看到支持它的浏览器已达到97.82%，该属性还是很普遍的）。为了使该属性完美地发挥作用，把延迟脚本放在页面底部依然是最佳选择

<script type='text/javascript' src='example1.js' defer></script>
<script type='text/javascript' src='example2.js' defer></script>



#### JavaScript代码编写建议

最后，根据以上描述，对于javaScript代码编写给出几点建议：

1, 把全部JavaScript引入放到body元素中页面内容的后面
2, 最好只包含一个延迟脚本
3 ,将延迟脚本也放在页面底部
4, 将样式文件放在JavaScript之前（将css放在头部）
————————————————
版权声明：本文为CSDN博主「張猴子」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/qq_42532128/article/details/102979020