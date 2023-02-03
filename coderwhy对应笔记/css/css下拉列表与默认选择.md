# css下拉列表与默认选择



```html
  <!-- multiple可以支持多选,多选需要按住ctrl键 -->
  <select name="hobby" id=""  >
    <!-- select是初始化选择, 在单选复选框中使用checked -->
    <option value="sing" >唱</option>
    <option value="dance" selected>跳</option>
    <option value="rap">rap</option>
    <option value="basketball">篮球</option>
  </select>
```

![image-20221119151716010](C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20221119151716010.png)



```html
  <form action="">
    <!-- 使用checked默认选中 -->
    <input type="radio" name="hobby" checked>sing
    <input type="radio" name="hobby" id="">dance
    <input type="radio" name="hobby" id="">rap
    <input type="radio" name="hobby" id="">basketball
  </form>
```

![image-20221119151554681](C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20221119151554681.png)