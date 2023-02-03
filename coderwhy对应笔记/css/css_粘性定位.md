# 粘性定位

粘性定位是一个十分方便的定位方式，常在很多媒体网站上做导航栏使用，粘性定位结合了固定定位和常规文档流的效果，在以前ie没有禁用时，需要考虑兼容性问题，目前基本上没有这些顾虑



#### 使用粘性定位需要注意的点

* 粘性定位是相对于第一个有滚动效果的祖先元素，如果没有祖先元素有滚动效果就默认视口为祖先元素
* 设置粘性定位必须设置top,否则粘性定位没有效果，top的值是相对其祖先元素的距离,当然top也不是不设置不行,只是不设置会没有任何效果



```css
 .box {
      width: 500px;
      height: 500px;
      background-color: gray;
      overflow: scroll;
    }

    nav {
      background-color: red;
      /* 粘性定位是相对于第一个有滚动效果的祖先元素 */
      position: sticky;
      /* 设置粘性定位必须设置top,否则粘性定位没有效果 */
      top: 0;
    }
```

```html
<div class="box">
    <h1>我的商城</h1>
    <nav>
      <span>手机</span>
      <span>电脑</span>
      <span>手表</span>
      <span>电话</span>
    </nav>


    <ul>
      <li>新款手机1</li>
      <li>新款手机2</li>
      <li>新款手机3</li>
      <li>新款手机4</li>
      <li>新款手机5</li>
        ...
```



#### 横向粘性布局

问题:如何做到不换行的?

```css
 *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    .box{
      height: 500px;
      width: 500px;
      background-color: gray;
      overflow:scroll;
      display: flex;
    }
    .item{
      /* 注意点:这里li的宽度必须设置成最小宽度要不然就会出现自适应 */
      min-width: 100px;

      width: 100px;
      height: 500px;
      float: left;
      background-color: aqua;
      border: 1px solid blue;
      position: sticky;
      left: 0;
    }

    .li{
      min-width: 100px;
      width: 100px;
      height: 500px;
      float: left;
      background-color: aquamarine;
      border: 1px solid blue;
      white-space: nowrap;

    }
```

```html
 <div class="box">
    <div class="li">1</div>
    <div class="item">0</div>
    <div class="li">2</div>
    <div class="li">3</div>
    <div class="li">4</div>
    <div class="li">5</div>
    <div class="li">6</div>
    <div class="li">7</div>
    <div class="li">8</div>
    <div class="li">9</div>
    <div class="li">10</div>

   </div>
```

