# 外部字体引入

在font-family中, 设定字体样式,  会在操作系统上查找有没有设置的样式,  有时候我们需要网上的样式或者自己设计的样式,这时候操作系统上没有,  那么就需要将字体样式包从服务器上下载下来,  并在css样式表中引入外部样式,

具体引入方式如下

```css
    /* 在style中引入字体资源 */
    @font-face {
      font-family: 'zombie';
      src: url(./fonts/MoChaOuLei-2.ttf);
    }
    body{
      font-family: 'zombie';
    }
```



注意:网上的字体不能随便乱用,  有一些需要授权才能使用,  如果滥用可能会被追究法律责任





#### 刀枪不入的font-face

一些浏览器不支持.ttf格式的字体,  有一个兼容所有浏览器的方法,  就是下面这种方法,  当我们把字体文件转变为各种模式时,我们可以用这种写法将字体实现最大兼容性

```css
@font-face {
    font-family: "fonteditor";
    src: url("fonteditor.eot"); /* IE9 */
    src: url("fonteditor.eot?#iefix") format("embedded-opentype"), /* IE6-IE8 */
    url("fonteditor.woff") format("woff"), /* chrome、firefox */
    url("fonteditor.ttf") format("truetype"), /* chrome、firefox、opera、Safari, Android, iOS 4.2+ */
    url("fonteditor.svg#uxfonteditor") format("svg"); /* iOS 4.1- */
}
```

