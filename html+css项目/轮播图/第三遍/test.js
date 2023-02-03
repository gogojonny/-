//自动播放器
//暂停器
//按钮点击左右滑动
//select点击直接跳转
//current-index,绑定select和图片
//index,通过点击按钮,select来修改
//item随图片数的变化而变化

//加载文件后,做初始化

//初始化时往select里加入item------->需要拿到图片的信息
//初始化时执行图片选择器,并传入要修改的index

//图片选择器绑定当前index,将current-index设置为当前index(在这之前做一系列判断),在将各种样式信息绑定current-index.这样无论后面是自动轮播,点击按钮还是select,只要修改index,就可以进行样式切换

//初始化还没结束,绑定按钮,点击后更改index,在绑定select,点击后更改index,并给活跃样式,

//初始化执行play,设置自动播放器,自动播放器的逻辑和换图片的逻辑类似,只不过样式不同
//绑定的时候会执行stop,会取消自动播放器

//轮播图自己版

// 设置自动播放器
let swipe_autoplay = null;

// 当前页面
let current_index = -1;

//获取DOM各个节点
let swipe = document.getElementById("swipe");
let swipe_bg = document.getElementById("swipe_bg");
let swipe_img_box = document.getElementById("swipe_img_box");
let swipe_link = document.getElementById("swipe_link");
let swipe_img = document.getElementById("swipe_img");
let swipe_select = document.getElementById("swipe_select");
let swipe_btn_left = document.getElementById("swipe_btn_left");
let swipe_btn_right = document.getElementById("swipe_btn_right");

// 获取图片信息
let links = [
  { src: "./images/1.jpg", target: "#1" },
  { src: "./images/2.jpg", target: "#2" },
  { src: "./images/3.jpg", target: "#3" },
  { src: "./images/4.jpg", target: "#4" },
  { src: "./images/5.jpg", target: "#5" },
  { src: "./images/6.jpg", target: "#6" },
];

// 图片选择函数
function select(index) {
  console.log("select");
  // 判断index是不是数字,不是就直接返回
  // console.log(typeof index);
  // console.log(typeof index!=='number');
  if (typeof index !== "number") {
    // console.log('hi');
    return;
  }
  // 判断是否index大于最大值,大于就返回
  if (index >= links.length || index < 0) {
    // console.log('hi2');
    return;
  }
  // 在获取当前索引前取消索引点的样式
  // console.log( swipe_select.childNodes[current_index]);
  // console.log(swipe_select);
  if (current_index > -1) {
    swipe_select.children[current_index].classList.remove("active");
  }
  // 让当前current-index修改为index
  current_index = index;
  // 当获取到current-index后,获取对应资源
  let link = links[current_index];
  console.log(link);
  // 修改背景
  swipe_bg.style.backgroundImage = `url(${link.src})`;
  //修改前景
  swipe_img.setAttribute("src", link.src);
  //给当前索引点添加样式
  swipe_select.children[current_index].classList.add("active");
}

// 自动播放器
function AutoPlay(index) {
  // 判断是不是数字
  if (typeof index !== "number") {
    // console.log('hi');
    return;
  }
  // 判断是否index大于最大值,大于就返回
  if (index >= links.length || index < 0) {
    // console.log('hi2');
    return;
  }

  // 清除掉当前active样式
  swipe_select.children[current_index].classList.remove("active");

  // 让current-index等于新设置的index
  current_index = index;
  // 获取对应资源
  let link = links[current_index];
  console.log(link.src);
  // 设置当前背景褪去
  // 前景
  swipe_img.style.transition = "opacity 0.5s ease-in";
  swipe_img.style.opacity = "0";

  // 设置背景浮现
  setTimeout(() => {
    swipe_img.style.transition = "opacity 0.7s ease-out";
    swipe_img.style.opacity = "1";
    swipe_img.setAttribute("src", link.src);
    swipe_bg.style.backgroundImage = `url(${link.src})`;
    swipe_select.children[current_index].classList.add("active");
  }, 500);
}

// 开始播放动画
function play() {
  // 三秒执行一次动画
  swipe_autoplay = setInterval(() => {
    let index = current_index + 1;
    // 超过最大数量就自动回到开始位置
    if (index >= links.length) {
      index = 0;
    }
    AutoPlay(index);
  }, 3000);
}

// 暂停播放动画
function stopAutoPlay() {
  clearInterval(swipe_autoplay);
  swipe_autoplay = null;
}

//初始化函数
function init() {
  for (let i = 0; i < links.length; i++) {
    let item = document.createElement("a");
    item.setAttribute("src", links[i].src);
    item.setAttribute("href", links[i].target);
    item.setAttribute("data-value", i);
    item.setAttribute("class", "item");
    swipe_select.appendChild(item);
  }
  // console.log(swipe_select.childNodes);
  // console.log(swipe_select.children);
  // console.log(swipe_select);
  select(0);
  bind();
  play();
}
//给按钮,索引点绑定点击事件
function bind() {
  swipe_btn_left.addEventListener("click", () => {
    stopAutoPlay();
    console.log("left click");
    let index = current_index - 1;
    if (index < 0) {
      index = links.length - 1;
    }
    select(index);
  });
  swipe_btn_right.addEventListener("click", () => {
    stopAutoPlay();
    console.log("right click");

    let index = current_index + 1;
    if (index >= links.length) {
      index = 0;
    }
    select(index);
  });
  Array.from(swipe_select.children).forEach((element, i) => {
    element.addEventListener("click", (e) => {
      stopAutoPlay()
      e.preventDefault();
      console.log(+e.target.dataset.value);
      select(+e.target.dataset.value);
    });
  });
  swipe.addEventListener('mouseout',()=>{
    play()
  })

  swipe.addEventListener('mouseover',()=>{
    stopAutoPlay()
  })
}

document.addEventListener("load", init());
