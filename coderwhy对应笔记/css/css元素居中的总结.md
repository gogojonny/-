# 元素居中总结

### 水平居中

* 行内级元素：在父元素上设置text-aline：center
* 块级元素：设置margin：0 auto；
* 定位元素：在元素有宽度的情况下，设置left=0，right=0，margin=0 auto；
* flex元素：justify-content：center

### 垂直居中

* 定位元素：设置这个元素的默认高度后，设置top、bottom为0，在设置margin为auto 0；
  * 弊端：必须使用定位（脱离标准流），必须给元素设置高度
* flex元素：设置aline-item：center；
  * 弊端：设置这个属性后所有flex-item元素都会垂直居中，可以通过单独设置摆脱垂直居中
* 定位+transform：将元素设置为相对定位，然后top：50%，transform：translate（-50%）
  * 不能用margin-top来设置50%，因为margin-top设置百分比相对于包含元素的宽度的

