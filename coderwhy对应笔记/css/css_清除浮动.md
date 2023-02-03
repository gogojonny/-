# 清除浮动

#### 为什么需要清除浮动

* 浮动元素会脱离文档流,  有高度但不会告诉父元素,  如果子元素全是浮动元素,  那么父元素高度就为0
* 父元素后面尝尝还需要设置新的元素,  不清除浮动就会被浮动元素盖住新设置的元素

![image-20221124203934897](C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20221124203934897.png)

绿色的元素就是新设置的,  但是因为他的上一个元素没有清除浮动,  导致被浮动元素盖住



#### 如何清除浮动元素

通常需要在一个div中设置clear:both; 指这个元素的顶部位于前面所有浮动元素的下面,如果clear的值为left,  那就位于float为left元素的下面,  同理right就在right元素下面,  both就哪个更靠下就位于哪个下面

```html
      <div style="clear: both;"></div>
```



但这样需要给每一个要清除浮动的元素都设置这个元素,  这样显然有很多重复的代码,  而且不符合样式的问题由样式来解决的规范,  最好的做法是利用伪元素

```css
    /* 通用性写法 */
    .clear-fix::after {
      content: '';
      display: block;
      clear: both;

      /* 考虑兼容性 */
      visibility: hidden;
      height: 0px;
    }
```



这个是通用解决清除浮动的常用代码

