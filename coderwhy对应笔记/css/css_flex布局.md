# flex布局

#### flex布局的历史

flex布局在css许久未解决元素居中问题时出世,  解决了css居中布局的难题,  

flex在目前移动端和px端都非常火热,  flex布局十分灵活



#### flex布局的基本概念

如果想使用flex布局,  需要在某一元素上设置display为flex或者inline-flex,  前者会将元素设定为block版的flex布局,  而后者会将这个元素设定为inline版的flex布局,  

如果将某一元素设定为flex布局,  那么这个元素包括其子元素都会成为flex元素,  设定的元素又被叫做 flex-container,  而他的子元素被叫做flex-item  

不过,  其更往后的子代元素就不在属于flex布局的一部分了,  想使用需要另设.

#### flex布局中的一些基本属性

flex布局的核心是主轴与交叉轴

主轴可以设定方向,使用flex-direction来决定,  有row, row-reverse,  column,  column-reverse  四个方向

主轴可以设置多个 , 使用flex-wrap来决定,  no-wrap表示不换行,  这样flex-item即使塞不下了也要改变宽度塞到一行,  设置为wrap可以让其换行,  还有一个小众的wrap-reverse,  让换行顺序反过来,  第一行变成最后一行,  第二行变成倒数第二行



flex-flow这个属性可以同时设定direction和wrap两个值,  顺序随意

#### flex布局中flex-item交叉轴对齐方式

```css
      align-items: flex-start;//flex交叉轴起始位置对齐
      align-items: center;//交叉轴中心对齐
      align-items: baseline;//item基线对齐, 也就是第一行
      align-items: stretch;//如果item没有设置'高度',那么会拉伸item元素
      align-items: normal;//在flex布局中与stretch效果完全相同
```



#### flex布局中主轴对齐方式

```css
     justify-content: center;//元素移动到主轴中央
     justify-content: baseline;//基线对齐
     justify-content: flex-start;//主轴起始位置对齐
     justify-content: flex-end;//主轴末尾位置对齐
     justify-content: space-around;//剩余空间围绕item,,每个item分配同样的空间
     justify-content: space-between;//剩余空间均分,被夹在item中间
     justify-content: space-evenly;//item每个间隔相等, 这个值有兼容性问题
```





#### flex布局中多行对齐方式

与``justify-content``在主轴对齐方式类似,  只不过这次目标变成了行

这个属性并不常用,  使用这个属性的前提是有额外空间,  但实际上高度不会设置固定值,  而是由内容填充,  基本上没有额外空间

```css
      align-content: start;
      align-content: end;
      align-content: center;
      align-content: space-around;
      align-content: space-between;
      align-content: space-evenly;
```

#### flex-grow属性

主轴上有额外空间,  且元素设定flex-grow的值大于1, 那么就会对剩余的空间进行分配,具体分配类似于下面

![image-20221125113926426](C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20221125113926426.png)

```css
每个元素分配到的空间= 剩余空间size * flex-grow的值/ sum
```

可以设置任意非负数字,  整数, 小数, 都可以设置, 默认值是0

当主轴上有剩余空间时这个属性才会生效

分配后的空间不会超过max-width



#### flex-shrink属性

**flex-shrink元素决定了item如何压缩**

单行中的元素如果太宽会被压缩,  shrink的默认值为1,  代表均匀压缩,  设置shrink值为0就会不压缩,  元素太宽会超出父元素

当flex-item元素在主轴上超出flex-container时才会生效, 被压缩的flex-item压缩后不会小于min-width