# css中单选框,多选框和label

#### 单选按钮

``type="radio"``可以将input设置为单选框,  相同name的单选框只能选择其中一个,  且name在提交时会成为queryString的key,而value会成为queryString的value

```html
    <label for="sing">
      <!-- 相同name的单选框只能选择其中一个选项,且name在提交时会成为queryString的key,而value会成为queryString的value -->
      <input id="sing" type="radio" name="hobby" value="sing">唱
    </label>
    <label for="dance">
      <input type="radio" name="hobby" id="dance" value="dance">跳
    </label>
    <label for="rap">
      <input type="radio" name="hobby" id="rap" value="rap">rap
    </label>
    <label for="basketball">
      <input type="radio" name="hobby" id="basketball" value="basketball">篮球
    </label>
    <input type="submit" name="" id="" value="提交按钮">
  </form>
```

![image-20221119121435011](C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20221119121435011.png)

当你选择dance并提交时,queryString会将name设置为key, 并且value为在单选框中设置的value. 

#### 多选框

``type="checkbox"``将input设置为多选框,  多选框可以被label包裹起来,  这样点击被label包裹的任何内容都可以选中多选框.  

```html
  <form action="/cba">
    <label for="sing">
      <!-- 相同name的单选框只能选择其中一个选项,且name在提交时会成为queryString的key,而value会成为queryString的value -->
      <input id="sing" type="checkbox" name="hobby" value="sing">唱
    </label>
    <label for="dance">
      <input type="checkbox" name="hobby" id="dance" value="dance">跳
    </label>
    <label for="rap">
      <input type="checkbox" name="hobby" id="rap" value="rap">rap
    </label>
    <label for="basketball">
      <input type="checkbox" name="hobby" id="basketball" value="basketball">篮球
    </label>
    <input type="submit" name="" id="" value="提交按钮">
  </form>
```

当点击提交后, queryString的变化

![image-20221119121957093](C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20221119121957093.png)





