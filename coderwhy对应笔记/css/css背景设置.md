# css背景设置

##### `` background-image: url(../images/wall.png);``

这个属性没什么说的,需要注意盒子要有宽度和高度

##### ``background-repeat: repeat;``

这个属性设置背景图片是否重复，大多数情况不需要重复，但是如果要设置墙之类的样式，重复会变得很好用。

##### ``   background-position: center;``

这个属性用于设置背景图片相对于盒子的位置,可以是数字,也可以是center之类的，如果设置为center，那么背景图片将始终保持在盒子的中间

##### ``background-size: contain``

这个属性用于设置背景图片相对于盒子的尺寸，contain将保存整个图片，适应盒子，如果是cover，就将整个图片覆盖整个盒子，裁剪长边，还可以设置数值，长宽都设置100%可能会拉伸背景图片

##### ``background-attachment: fixed;``

这个属性决定背景图片的固定方式，fixed就是相对于视口固定，local就是相对于内容固定，scroll就是相对于当前元素固定。

##### ``background``

这个属性是上面属性的简写

background：background-color||bg-img||bg-position/bg-size||repeat||attachement||box||box

![image-20221108234427801](C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20221108234427801.png)

这个是background的可填入属性值.

##### background-image和img的对比

| ...                        | background-image | img             |
| -------------------------- | ---------------- | --------------- |
| 性质                       | css样式          | html元素        |
| 是否可被浏览器易于搜索     | 不可以           | 可以使用alt属性 |
| 是否占据空间               | 不占据空间       | 占据空间        |
| 是否支持精灵图             | 是               | 否              |
| 浏览器右键是否可以查看地址 | 否               | 是              |

img是html中的结构,是不可缺少的部分

background-image主要是用于添加样式,美化页面









