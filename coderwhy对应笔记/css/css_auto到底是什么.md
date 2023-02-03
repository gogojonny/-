# auto到底是什么

auto实际意义是把值交给浏览器来处理,auto最终的值是多少由浏览器来决定,不同浏览器实现不同,auto的值也可能不同

* 在绝对定位元素中,**含有定位的祖先元素宽度=绝对定位元素宽度+left+right+margin-left+margin-right**,, 给margin设定为auto会自动将左右两侧的margin对半分,  给left和right设置auto不一定会对半分,  有可能是left=0,right补足剩余的部分
* 对于不同元素,auto的值也会不同
  * 块级元素,  auto值为父元素宽度
  * 行内元素,  auto值为内容宽度
  * 绝对定位元素, auto值为内容决定