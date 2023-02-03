# 仿制网易云音乐一个模块

#### 学到的东西

* 将常用图片和图标放到一个通用样式表里，这样只需要调用对应的类就可以直接拿到图标或图片

* 在写样式之前可以先做样式重置，例如将a元素进行重置

* 写样式要讲究循序渐进，最好折叠后是一个金字塔结构

* 要注意绝对定位元素使用的特点，怎么让绝对定位元素占满父元素，怎么占满一行，不在需要display，父元素真正是谁等

* 将文字多余部分压缩显示的方法

  * ```css
    overflow:hidden;//隐藏多出的内容
    text-overflow:ell...;//多出部分...
    white-space:nowrap;//空白区域不换行
    ```

* 获取浏览器开发者模式文字的方式：双击！



附上这次的代码

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    /* 重置样式 */
    a {
      color: #333;
      text-decoration: none;
    }

    /* 通用 */
    .spite_01 {
      background-image: url(../images/css/coverall.png);
      display: inline-block;

    }

    .spite_02 {
      background-image: url(../images/css/iconall.png);
      display: inline-block;

    }

    .spite_02_ear-phone {
      width: 14px;
      height: 11px;
      background-position: 0 -24px;
    }

    .spite_02_play {
      width: 16px;
      height: 17px;
      background-position: 0 0;
    }



    /* 样式 */
    .item {
      width: 140px;
      margin: 0 auto;
    }

    .item .top {
      /* 相对top做背景定位 */
      position: relative;

    }

    /* 去除底部几个像素块 */
    .item .top img {
      display: block;
    }

    .item .top .bg {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-position: 0 0;
    }

    .item .top .play-box {
      position: absolute;
      bottom: 0;
      right: 0;
      left: 0;
      height: 27px;
      background-position: 0 -537px;
      color: #ccc;
      font-size: 12px;
      line-height: 27px;
    }

    .item .top .play-box .ear-phone {
      margin-left: 10px;
    }

    .item .top .play-box .play {
      position: absolute;
      right: 10px;
      top: 5px;
    }


    .item .top .play-box .num {
      margin-left: 3px;
    }

    .item .bottom .info1 {
      color: #333;
      font-size: 14px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      margin: 8px 0 6px 0;
    }

    .item .bottom .info2 {
      font-size: 12px;
      color: #666;
    }

    .item .bottom .info2 .by {
      color: #aaa;

    }

    .item .bottom .info2 .v {
      display: inline-block;
      width: 13px;
      height: 13px;
      background-image: url(../images/css/v.png);
      background-size: contain;
      position: relative;
      top: 2px;
    }

    .item .top .play-box .play:hover {
      background-position: 0 -60px;
      cursor: pointer;
    }

    a:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  </style>

</head>

<body>
  <div class="item">
    <div class="top">

      <img src="../images/css/游泳.jpg" alt="音乐图片">
      <a href="#">
        <div class="bg spite_01"></div>
      </a>

      <div class="play-box  spite_01">
        <i class="spite_02 ear-phone spite_02_ear-phone"></i>
        <span class="num">837万</span>
        <i class="spite_02 play spite_02_play"></i>
      </div>
    </div>
    <div class="bottom">
      <div class="info1"><a href="#">[运动随身听] 必听活力音乐燃料 今天运动了吗</a></div>
      <div class="info2">
        <span class="by">by</span>
        <a href="#">云音乐官方歌单</a>
        <div class="v"></div>
      </div>
    </div>
  </div>

  <i class="spite_02 spite_02_ear-phone"></i>
  <i class="spite_02 spite_02_play"></i>
</body>

</html>
```



