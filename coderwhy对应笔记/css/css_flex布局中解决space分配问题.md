# flex布局中的space分配问题

![image-20221125150320138](C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20221125150320138.png)

flex布局中可能遇到最后一行出现少了几个元素,  使用space-between或者space-around时元素不能与上一行并排的情况,  想解决这种情况,  一般需要通过margin计算来解决,  margin计算相对复杂,  有一种比较简单且兼容性好的解决方案,  就是在flex-item后面放上几个宽度与flex-item宽度相等的span元素,  用来充当flex-item元素

```html
   <div class="flex-item">1</div>
    <div class="flex-item">2</div>
    <div class="flex-item">3</div>
    <div class="flex-item">4</div>
    <div class="flex-item">5</div>
//用于充当flex-item的span元素
    <span></span><span></span><span></span>
   
  </div>
```

在flex布局中,  不区分块级元素和行内元素,  设置等宽的元素高度为0,实际上看不见,  但又真实存在,  于是'骗过'计算机让他以为有这些元素, 进而可以对齐排布,  

一般来说,span的个数由一行有几个元素决定,  想达到最佳效果,最好span个数大于等于行内元素个数-2