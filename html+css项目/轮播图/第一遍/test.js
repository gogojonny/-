//当前轮播图编号
let current_index = -1;
//自动轮播定时器
let swipe_timer = null;
//轮播图的图片地址与跳转链接
let links = [
  { image: "./images/1.jpg", target: "#1" },
  { image: "./images/2.jpg", target: "#1" },
  { image: "./images/3.jpg", target: "#1" },
  { image: "./images/4.jpg", target: "#1" },
  { image: "./images/5.jpg", target: "#1" },
  { image: "./images/6.jpg", target: "#1" },
];

//需要操作的元素
let swipe = document.getElementById("swipe");
let swipe_bg = document.getElementById("swipe_bg");
let swipe_img_box = document.getElementById("swipe_img_box");
let swipe_link = document.getElementById("swipe_link");
let swipe_img = document.getElementById("swipe_img");
let swipe_select = document.getElementById("swipe_select");
let swipe_btn_left = document.getElementById("swipe_btn_left");
let swipe_btn_right = document.getElementById("swipe_btn_right");

//事件
//切换图片
let select = (index) => {
  console.log("select");
  //停止播放
  stop();
  //转数字
  index = Number(index);
  //越界超过最大数量,直接返回
  if (index >= links.length) {
    return;
  }
  //选中当前已选中的,直接返回,防止消耗性能
  if (current_index == index) {
    return;
  }
  //取消当前指示点的选中状态
  if (current_index > -1) {
    swipe_select.children[current_index].classList.remove("active");
  }
  console.log("hi");
  //变更当前轮播图的编号
  current_index = index;
  //找到当前元素
  let current_link = links[current_index];
  console.log("hi2");

  //背景变化
  swipe_bg.style.backgroundImage = "url(" + current_link.image + ")";

  //前景变化
  swipe_img.setAttribute("src", current_link.image);
  //链接变化
  swipe_link.setAttribute("href", current_link.target);
  //增加新的指示点的选中状态
  swipe_select.children[current_index].classList.add("active");
  console.log("yoyo");
};
//自动切换图片
let autoSelect = (index) => {
  //转数字
  index = Number(index);
  //越界超过最大数量,直接返回
  if (index >= links.length) {
    return;
  }
  //选中当前已选中样式,直接返回
  if (current_index == index) {
    return;
  }
  //取消当前指示点的选中状态
  swipe_select.children[current_index].classList.remove("active");
  //变更当前轮播图的编号
  current_index = index;
  //找到当前元素
  let current_link = links[current_index];
  //前景图片
  //调整过度时间
  swipe_img.style.transition = "opacity 0.5s ease-in 0s";
  //第二步调整不透明度为0.2
  swipe_img.style.opacity = 0.2;
  //第三步延迟变换img图片,并重新定义透明度以及过渡时间和过渡方式
  setTimeout(() => {
    //背景变化
    swipe_bg.style.backgroundImage = "url(" + current_link.image + ")";
    //前景变化
    swipe_img.setAttribute("src", current_link.image);
    //链接变化
    swipe_link.setAttribute("href", current_link.target);
    //不透明度变化
    swipe_img.style.transition = "opacity 0.7s ease-out 0s";
    swipe_img.style.opacity = 1;
    //增加新的指示点选中状态
    //如果已经通过手动点了,选中则此处不执行
    // 在删除active的这段时间里,如果点击的话,就不执行这段代码
    if (!document.querySelector(".swipe .active")) {
      swipe_select.children[current_index].style.transition =
        "background-color 0.5s";
      swipe_select.children[current_index].classList.add("active");
    }
  }, 500);
};
//播放
let play = () => {
  console.log("play");
  //三秒切换一次
  swipe_timer = setInterval(() => {
    //设置新的index
    let index = current_index + 1;
    //右翻越界,切换到第一张
    if (index >= links.length) {
      index = 0;
    }
    //加载新图片
    autoSelect(index);
  }, 3000);
};

//停止
let stop = () => {
  if (swipe_timer) {
    clearInterval(swipe_timer);
    swipe_timer = null;
  }
};

//初始化
let init = () => {
  console.log("init");
  for (let i = 0; i < links.length; i++) {
    //创建a元素
    let item = document.createElement("a");
    //修改属性
    item.setAttribute("class", "item");
    item.setAttribute("href", "#");
    item.setAttribute("data-index", i);
    //追加元素
    swipe_select.appendChild(item);
  }
  //默认第一张
  select(0);
  //绑定各个事件并轮播
  bind();
  play();
};

//绑定
let bind = () => {
  console.log("bind");
  //左翻事件监听
  swipe_btn_left.addEventListener("click", () => {
    //设置新的index
    let index = current_index - 1;
    //左翻越界,切到最后一张
    if (index < 0) {
      index = links.length - 1;
    }
    //加载新突破
    select(index);
  });

  //右翻事件监听
  swipe_btn_right.addEventListener("click", () => {
    //设置新的index
    let index = current_index + 1;
    //右翻越界,切到最后一张
    if (index >= links.length) {
      index = 0;
    }
    //加载新图片
    select(index);
  });
for(let val of swipe_select.children){
  console.log('..,,...|||',val);
}
  //循环绑定指示器点击事件
  for (const key in swipe_select.children) {
    console.log('typeof' ,swipe_select.children);
    console.log(swipe_select.children.hasOwnProperty(key));
    console.log('||||||||||||||||||',key);
    // 和 in 运算符不同，该方法会忽略掉那些从原型链上继承到的属性。
    if (swipe_select.children.hasOwnProperty(key)) {
      const element = swipe_select.children[key];
      element.addEventListener("click", (e) => {
        //取消默认点击跳转
        e.preventDefault();
        //跳转到当前指示的data-index所指定的图片
        select(e.target.dataset.index);
      });
    }
  }
  //绑定鼠标移入事件
  swipe.addEventListener("mouseover", (e) => {
    //防止鼠标从子元素中移入时触发
    if (
      e.relatedTarget &&
      swipe.compareDocumentPosition(e.relatedTarget) == 10
    ) {
      console.log('奥术大师大所多   stop');
      stop();
    }
  });
  //绑定鼠标移除事件
  swipe.addEventListener("mouseout", (e) => {
    //防止鼠标从子元素中移出时触发
    if (
      e.relatedTarget &&
      swipe.compareDocumentPosition(e.relatedTarget) == 10
    ) {
      console.log('奥术大师大所多   play');

      play();
    }
  });
  //绑定鼠标移动事件
  swipe.addEventListener("mousemove", (e) => {
    stop();
  });
  console.log("bind out");
};

//页面加载完毕,执行初始化
window.addEventListener("load", () => {
  init();
});
