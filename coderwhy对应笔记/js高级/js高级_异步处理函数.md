# 异步处理函数

往期异步处理没有很优雅的解决办法,通常会遇到回调地狱的难题

**异步回调需求:当浏览器与服务器之间收发请求时，通常是在浏览器接收到结果后，把结果进行包装然后再发送一次。**

假设服务器处理:

服务器将处理数据并花费两秒时间,然后返回结果

```JavaScript
    function execDate(date) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(date)

        }, 2000);
      })
    }
```



##### 回调地狱式做法

```JavaScript
    execDate('cat').then(e => {
      console.log('已处理数据', e);
      // 只有拿到服务器返回的数据才进行第二次请求
      execDate(e + 'dog').then(e => {
        console.log('已处理数据', e);
        // 只有拿到服务器返回的数据才进行第三次请求
        execDate(e + 'monkey').then(e => {
          console.log('已处理数据', e);
        })
      })
    })
```



##### 链式期约调用

```JavaScript
    //链式期约调用
    execDate('cat').then(e => {
      console.log('已处理数据', e);
      // 返回一个新期约
      return execDate(e + 'dog')
    }).then(e => {
      console.log('已处理数据', e);
      return execDate(e + 'monkey')
    }).then(e => {
      console.log('已处理数据', e);
    })
```

无论这两种哪种做法,都会有理解难度,维护起来十分麻烦,如果可以像如下方式理解就好了

```JavaScript
    //如果能这样写就再好不过了,拿到数据在进一步处理,不过真的有实现方法
    function getDate() {
      let date1 = execDate('dog')
      let date2 = execDate(date1 + 'cat')
      let date3 = execDate(date2 + 'monkey')
    }
```



##### 利用生成器函数来处理

```JavaScript
    //我们需要做的就是控制函数,在拿到结果后在进行第二步操作
    //将getDate转变为生成器函数
    function* getDate() {
      // 将期约中的值提取出来
      let date1 = yield execDate('dog')
      let date2 = yield execDate(date1 + 'cat')
      let date3 = yield execDate(date2 + 'monkey')
    }

    let generator = getDate()
    generator.next().value.then(e => {
      console.log('以获取', e);
      // 将拿到的值作为参数传入date1中
      generator.next(e).value.then(e => {
        console.log('以获取', e);
        generator.next(e).value.then(e => {
          console.log('以获取', e);
        })
      })
    })
```

似乎生成器中也出现了回调地狱,有没有更好的办法? 只需要使用await/async即可!

##### async/await方法

```JavaScript
    async function getDate() {
      // 将期约中的值提取出来
      let date1 = await execDate('dog')
      console.log(date1);
      let date2 = await execDate(date1 + 'cat')
      console.log(date2);
      let date3 = await execDate(date2 + 'monkey')
      console.log(date3);
    }

    let generator = getDate()
```

