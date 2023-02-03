// 当前轮播图编号
let current_index = -1;
// 自动轮播定时器
let swipe_timer = null;
// 轮播图的图片与跳转链接
let links = [
  { image: "./images/1.jpg", target: "#1" },
  { image: "./images/2.jpg", target: "#1" },
  { image: "./images/3.jpg", target: "#1" },
  { image: "./images/4.jpg", target: "#1" },
  { image: "./images/5.jpg", target: "#1" },
  { image: "./images/6.jpg", target: "#1" },
];
// 需要操作的元素
let swipe = document.getElementById("swipe");
let swipe_bg = document.getElementById("swipe_bg");
let swipe_img_box = document.getElementById("swipe_img_box");
let swipe_link = document.getElementById("swipe_link");
let swipe_img = document.getElementById("swipe_img");
let swipe_select = document.getElementById("swipe_select");
let swipe_btn_left = document.getElementById("swipe_btn_left");
let swipe_btn_right = document.getElementById("swipe_btn_right");
// 事件
// 切换元素
let select = (index) => {
  // 停止播放
  stop();
  // 转数字
  index = Number(index);
  // 越界超过最大数字,就直接返回
  if (index >= links.length) {
    return;
  }
  // 如果当前已选中与index相等,就直接返回
  if (current_index == index) {
    return;
  }
  // 取消当前选中点的选中状态
  if (current_index > -1) {
    swipe_select.children[current_index].classList.remove("active");
  }

  // 当前指数指定为index
  current_index = index;
  // 找到资源
  let current_link = links[current_index];
  // 背景变换
  swipe_bg.style.backgroundImage = `url(${current_link.image})`;
  // 前景变化
  swipe_img.setAttribute("src", current_link.image);
  // 指示点变化
  swipe_select.children[current_index].classList.add("active");
};

// 自动切换图片
let autoSelect = (index) => {
  // 转数字
  index = Number(index);
  // 越界超过最大数量,直接返回
  if (index >= links.length) {
    return;
  }
  //选中当前已选中样式,直接返回
  if (current_index == index) {
    return;
  }
  //取消当前指示点的选中状态
  swipe_select.children[current_index].classList.remove("active");
  // 变更当前轮播图编号
  current_index = index;
  //找到当前元素
  let current_link = links[current_index];
  // 修改前景
  // 调整过度时间与淡出方式
  swipe_img.style.transition = "opacity 0.5s ease-in 0s";
  swipe_img.style.opacity = "0.2";
  // 设置延迟浮出效果
  setTimeout(() => {
    // 背景修改
    swipe_bg.style.backgroundImage = `url(${current_link.image})`;
    // 前景
    swipe_img.style.transition = "opacity 0.7s ease-out 0s";
    swipe_img.style.opacity = 1;
    swipe_img.setAttribute("src", current_link.image);
    // 链接
    swipe_link.setAttribute("href", current_link.target);
    // 增加新的指示点选中状态
    // 如果已经通过手动点了,选中则此处不执行
    if (!document.querySelector(".swipe .active")) {
      swipe_select.children[current_index].style.transition =
        "background-color 0.5s";
      swipe_select.children[current_index].classList.add("active");
    }
  }, 500);
};
// 播放
let play = () => {
  // 三秒切换一次
  swipe_timer = setInterval(() => {
    // 设置新的index
    let index = current_index + 1;
    // 判断index是否超过最大值,如果超过就返回到第一张
    if (index >= links.length) {
      index = 0;
    }
    autoSelect(index);
  }, 3000);
};

// 停止
let stop = () => {
  if (swipe_timer) {
    clearInterval(swipe_timer);
    swipe_timer = "";
  }
};

// 初始化
let init = () => {
  for (let i = 0; i < links.length; i++) {
    // 创建a元素
    let item = document.createElement("a");
    // 修改属性
    item.setAttribute("class", "item");
    item.setAttribute("href", "#");
    item.setAttribute("data-index", i);
    // 追加元素
    swipe_select.appendChild(item);
  }
  // 默认第一张
  select(0);
  // 绑定各事件并轮播
  bind();
  play();
};
let bind = () => {
  // 左翻事件监听
  swipe_btn_left.addEventListener("click", () => {
    let index = current_index - 1;
    if (index < 0) {
      index = links.length - 1;
    }
    select(index);
  });
  // 右翻事件监听
  swipe_btn_right.addEventListener("click", () => {
    let index = current_index + 1;
    if (index >= links.length) {
      index = 0;
    }
    select(index);
  });
  // 循环绑定事件点击器
  for (const key in swipe_select.children) {
    if (swipe_select.children.hasOwnProperty(key)) {
      const element = swipe_select.children[key];
      element.addEventListener("click", (e) => {
        // 取消默认跳转
        e.preventDefault();
        // 跳转到当前指示的data-index所指定的图片
        select(e.target.dataset.index);
      });
    }
  }
  // 绑定鼠标移入事件
  swipe.addEventListener("mouseover", (e) => {
    // console.log('mouseover');
    // 防止鼠标从子元素中移除时触发
    if (
      e.relatedTarget &&
      swipe.compareDocumentPosition(e.relatedTarget) == 10
    ) {
      console.log( e.relatedTarget);
      console.log(swipe.compareDocumentPosition(e.relatedTarget) == 10);
      stop();
    }
    // stop()
  });
  // 绑定鼠标移除事件
  swipe.addEventListener("mouseout", (e) => {
    // console.log('mouseout');
    // 防止鼠标从子元素移除时触发
    if (
      e.relatedTarget &&
      swipe.compareDocumentPosition(e.relatedTarget) == 10
    ) {
      console.log( e.relatedTarget);

      console.log(swipe.compareDocumentPosition(e.relatedTarget) == 10);

      play();
    }
    // play()
  });
  // 绑定鼠标移动事件
  swipe.addEventListener("mousemove", (e) => {
    stop();
  });
};

window.addEventListener("load", () => {
  init();
});
