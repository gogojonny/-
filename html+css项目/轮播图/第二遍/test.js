//当前轮播图编号
let current_index = -1;
//自动轮播定时器
let swipe_timer = null;
//轮播图的图片地址与跳转链接
let links = [
  { image: "./images/1.jpg", target: "#1" },
  { image: "./images/2.jpg", target: "#2" },
  { image: "./images/3.jpg", target: "#3" },
  { image: "./images/4.jpg", target: "#4" },
  { image: "./images/5.jpg", target: "#5" },
  { image: "./images/6.jpg", target: "#6" },
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
  //选中当前已选中的,直接返回
  if (current_index == index) {
    return;
  }
  //取消当前选中状态
  if (current_index > -1) {
    swipe_select.children[current_index].classList.remove("active");
  }
  //变更轮播图编号
  current_index = index;
  //找到当前元素
  let current_link = links[current_index];
  //前景变化
  swipe_img.setAttribute("src", current_link.image);
  console.log("hi");
  //背景变化
  swipe_bg.style.backgroundImage = "url(" + current_link.image + ")";
  //链接变化
  swipe_link.setAttribute("href", current_link.target);
  //增加选种样式
  swipe_select.children[current_index].classList.add("active");
};
//自动切换图片
let autoSelect = (index) => {
  //转数字
  index = Number(index);
  //越界超过最大数量,直接返回
  if (index >= links.length) {
    return;
  }
  //选中当前指示点时,直接返回
  if (current_index == index) {
    return;
  }
  //取消当前指示点的选中状态
  swipe_select.children[current_index].classList.remove("active");
  //更改当前轮播图编号
  current_index = index;
  //找到index对应元素
  let current_link = links[current_index];
  //第一步调整过渡时间
  swipe_img.style.transition = "opacity 0.5s ease-in 0s";
  //第二步设置不透明度为0.2
  swipe_img.style.opacity = 0.2;
  //第三步延迟变换img图片,并重新设置透明度与延迟时间
  setTimeout(() => {
    //背景变化
    swipe_bg.style.backgroundImage = `url(${current_link.image})`;
    //前景变化
    swipe_img.setAttribute("src", current_link.image);
    //指示点变化
    // swipe_select.children[current_index].classList.add('active')
    //链接变化
    swipe_link.setAttribute("href", current_link.target);
    //不透明度变化
    swipe_img.style.transition = "opacity 0.7s ease-out 0s";
    swipe_img.style.opacity = 1;
    //增加新的指示点选中状态
    //如果已经通过手动点击了,选中则此处不再执行
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
    if (index >= links.length) {
      index = 0;
    }
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
    let link = document.createElement("a");
    link.setAttribute("class", "item");
    link.setAttribute("href", "#");
    link.setAttribute("data-index", i);
    swipe_select.appendChild(link);
  }
  select(0);
  bind();
  play();
};

//绑定
let bind = () => {
  console.log("bind");
  //右翻事件监听
  swipe_btn_right.addEventListener("click", () => {
    //设置新的index
    let index = current_index + 1;
    if (index >= links.length) {
      index = 0;
    }
    select(index);
  });
  //左翻事件监听
  swipe_btn_left.addEventListener("click", () => {
    //设置新的index
    let index = current_index - 1;
    if (index < 0) {
      index = links.length - 1;
    }
    select(index);
  });
  // 循环绑定事件点击器
  for (let key in swipe_select.children) {
    if (swipe_select.children.hasOwnProperty(key)) {
      const element = swipe_select.children[key];
      element.addEventListener("click", (e) => {
        //取消默认点击跳转
        e.preventDefault();
        //跳转到当前指定图片
        select(e.target.dataset.index);
      });
    }
  }
  //绑定鼠标点击事件
  swipe.addEventListener("mouseover", (e) => {
    //防止鼠标从子元素移除时触发
    if (
      e.relatedTarget &&
      swipe.compareDocumentPosition(e.relatedTarget) == 10
    ) {
      stop();
    }
  });
  //绑定鼠标移除事件
  swipe.addEventListener("mouseout", (e) => {
    // 防止鼠标从子元素移出时触发
    if (
      e.relatedTarget &&
      swipe.compareDocumentPosition(e.relatedTarget) == 10
    ) {
      play();
    }
  });
  //绑定鼠标移动
  swipe.addEventListener("mousemove", (e) => {
    stop();
  });
};

//页面加载完毕,执行初始化
window.addEventListener("load", init());
