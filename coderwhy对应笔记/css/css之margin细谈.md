# margin细谈

margin主要用于设定元素之间的距离,不过上下距离和左右距离有区分

一般给上下两个盒子设定margin,这两个margin会折叠在一起

```css
 <style>
    .box {
      width: 200px;
      height: 200px;
      background-color: aqua;
      /* 两个margin会折叠在一起 */
      margin-bottom: 30px;
    }

    .content {
      width: 200px;
      height: 200px;
      background-color: red;
      margin-top: 30px;
    }
  </style>
```

![image-20221028232426803](C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20221028232426803.png)

但是当你给左右两个盒子设定margin时,这两个margin就不会折叠

```html
 <style>
    body{
      /* 用于清除两盒子之间的空格 */
      display: flex;
    }
    .box {
      display: inline-block;
      width: 200px;
      height: 200px;
      background-color: aqua;
      margin-right: 30px;

    }

    .content {
      display: inline-block;
      width: 200px;
      height: 200px;
      background-color: red;
      margin-left: 30px;
    }
  </style>
```

![image-20221028232715457](C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20221028232715457.png)





margin主要是在给兄弟元素之间设定距离的,而padding主要是用来给子元素设定位置的,如果硬用margin给父子元素设置也可以,不过会出现一些问题,例如:盒子塌陷

```JavaScript
<style>
    .box{
      width: 500px;
      height: 500px;background-color: aqua;
    }
    .content{
      width: 200px;
      height: 200px;
      background-color: red;
      /* 用margin给元素一个向左的位移 */
      margin-left: 50px;
      /* 但是当你给他一个向下的位移时,就会出现塌陷的问题 */
      margin-top: 50px;
    }

  </style>
```

![image-20221028233333669](C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20221028233333669.png)

想要解决这个问题有很多方法 ,例如让父元素有一个border,让父元素的overflow设置为auto或者hidden

```JavaScript
 <style>
    .box{
      width: 500px;
      height: 500px;background-color: aqua;
      /* overflow: auto; */
      /* overflow: hidden; */
      border: 1px solid aqua;

    }
    .content{
      width: 200px;
      height: 200px;
      background-color: red;
      /* 用margin给元素一个向左的位移 */
      margin-left: 50px;
      /* 但是当你给他一个向下的位移时,就会出现塌陷的问题 */
      margin-top: 50px;
      /* 想要解决这个问题有很多方法 ,例如让父元素有一个border,让父元素的overflow设置为auto或者hidden*/

    }

  </style>
```

![image-20221028233637802](C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20221028233637802.png)

除此之外更加符合语义化的做法是给父元素设置padding,不过要记得设置border-box,这样能防止计算盒子尺寸的时候加上额外的padding的部分

```JavaScript
 <style>
    .box{
      width: 500px;
      height: 500px;background-color: aqua;
      /* overflow: auto; */
      /* overflow: hidden; */
      /* border: 1px solid aqua; */
      box-sizing: border-box;
      padding-top: 50px;

    }
    .content{
      width: 200px;
      height: 200px;
      background-color: red;
      /* 用margin给元素一个向左的位移 */
      margin-left: 50px;
      /* 但是当你给他一个向下的位移时,就会出现塌陷的问题 */
      /* margin-top: 50px; */
      /* 想要解决这个问题有很多方法 ,例如让父元素有一个border,让父元素的overflow设置为auto或者hidden,或者给父元素一个更大的margin*/

    }

  </style>
```

![image-20221028233935258](C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20221028233935258.png)

可以看出这样很轻松的解决了问题



总结

* margin主要用于兄弟元素之间保留一定间隔用的,padding主要用于父子元素之间保留间隔用的
* 如果父子元素之间头部紧挨着,给子元素设置margin会传递给父元素,让父元素获得这个margin,这个也叫作margin父元素塌陷
  * 解决margin塌陷的方法有
    * overflow设置为auto或者hidden,将父元素设置为bfc模式,避免margin传递到父元素
    * 给父元素一个边框,边框颜色设置为透明
    * 让父子元素之间产生距离,例如使用padding
    * 用padding代替margin给子元素设置距离
* margin在兄弟元素设置的时候会有折叠的情况,如果两元素相邻就不折叠,如果两元素是上下位置就会折叠