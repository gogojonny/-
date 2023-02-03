# css字体图标

#### 字体图标的好处

* 放大不会失真
* 可以任意改变颜色
* 相对于图片,字体图标会更小一些

#### 字体图标的缺点

* 不是所有图标都可以使用,  一些复杂图标就会无法使用,  但是可以用兼容性相对差的svg来导入这部分图标,  导入方法在html文件中

#### 字体图标的使用方法

* 首先,  在iconfont网站中将想要的图标统一加入购物车

![image-20221120130901273](C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20221120130901273.png)

* 在购物车中点击下载代码

  <img src="C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20221120131002877.png" alt="image-20221120131002877" style="zoom:50%;" />

* 在下载好的解压包中找到.ttf结尾的文件,  将改文件导入到我们工程文件中的font里,  和网络字体一样使用时要在css样式表中导入这个ttf文件![image-20221120131331504](C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20221120131331504.png)

* 另一种更简单的方法是将整个下载好的文件直接导入到项目中,然后再文件中link这个iconfont.css文件,  之后写``<span class="iconfont icon-xxx"></span>``这段代码来表示图标,图标名在图标文件夹的html文件中.





#### font-awesome可能会更加好用一些

