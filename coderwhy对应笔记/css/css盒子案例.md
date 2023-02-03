# css盒子案例

#### 需要重点学习的知识点:

* 加载网络图片时的注意
* 让多出的文字内容一行显示或者两行显示,并让多出的部分显示为...
* 显示svg图片的办法



#### 加载网络图片时的注意

加载网络图片时,有的网站不允许获取该资源,这样就会拿不到,解决办法就是在img标签中使用``referrerpolicy="no-referrer"``属性，这样就可以拿到要加载的图片了。



#### 让多出的文字内容一行显示或者两行显示,并让多出的部分显示为...

##### 让多出的内容一行显示

在需要进行单行显示的文本设置这样的样式

```css
      white-space: nowrap;
      /* 超出父元素的部分hidden起来 */
      overflow: hidden;
      /* 用...表示hidden的部分 */
      text-overflow: ellipsis;
```

这里首先让所有文本单行显示,然后将多余的内容隐藏起来,在用``text-overflow:ellipsis``将多出的内容用...表示

##### 让多出的内容多行显示

同样在需要多行显示的文本设置这样的样式

```css
      overflow: hidden;
      /* 用...表示hidden的部分 */
     
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
```

将``display``设置为``-webkit-box``,如果想设置为两行就``-webkit-line-clamp: 2;``,否则把2改为对应行数.  但光是这样还看不到效果,还需要``-webkit-box-orient: vertical;``,这样就可以显示为两行,当然需要``overflow:hidden``来让多余的内容显示为...，但是不需要``   text-overflow: ellipsis;``，weikit似乎可以自己把多余的部分转为...

**需要注意的点**

当你使用单行显示的时候,如果父元素设置的是inline-block之类可以把width设置为auto的元素,就会出现错误，因为把a设置为inline-block,width默认是auto,，也就是由子元素填充,子元素和父元素始终一样大，那多出的部分就hidden不起来,设置为100%后就可以把多余的部分hidden起来了,因为这时a的宽度为item的宽度。



#### 显示svg图片的办法

一种办法是直接在需要的位置插入svg,然后再通过样式来修改

另一种办法是设置伪元素

```css
    .item .info .title span::before{
      content: url(./images/up.svg);
      display: inline-block;
      width: 16px;
      position: relative;
      top: 2px;
    }
```

第三种办法是使用img标签

```css
<img src="./images/hot.svg" alt="">
```

