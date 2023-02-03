let current_index = -1;
// 定义自动播放器
let auto_play = null;

// 获取图片资源
let links = [
  { src: "./images/1.jpg", target: "#1" },
  { src: "./images/2.jpg", target: "#1" },
  { src: "./images/3.jpg", target: "#1" },
  { src: "./images/4.jpg", target: "#1" },
  { src: "./images/5.jpg", target: "#1" },
  { src: "./images/6.jpg", target: "#1" },
];

let swipe = document.getElementById("swipe");
let swipe_bg = document.getElementById("swipe-bg");
let swipe_img_box = document.getElementById("swipe-img-box");
let swipe_link = document.getElementById("swipe-link");
let swipe_img = document.getElementById("swipe-img");
let swipe_select_box = document.getElementById("swipe-select-box");
let swipe_btn_left = document.getElementById("swipe-btn-left");
let swipe_btn_right = document.getElementById("swipe-btn-right");

// 样式
let select = (index) => {
  console.log("select");
  stop();
  // 转数字
  index = Number(index);
  if (index >= links.length) {
    return;
  }
  if (index == current_index) {
    return;
  }

  if (current_index >= 0) {
    swipe_select_box.children[current_index].classList.remove("select");
  }

  current_index = index;
  // 获取图片资源
  let link = links[current_index];
  // 修改背景
  swipe_bg.style.backgroundImage = `url(${link.src})`;
  // 修改前景
  swipe_img.setAttribute("src", link.src);
  // 修改链接
  swipe_link.setAttribute("href", link.target);
  // 修改指示点
  swipe_select_box.children[current_index].classList.add("select");
};

// 自动轮播
let autoPlay = (index) => {
  console.log("autoPlay");
  index = Number(index);
  if (index >= links.length) {
    return;
  }
  if (index == current_index) {
    return;
  }
  swipe_select_box.children[current_index].classList.remove("select");

  current_index = index;
  // 获取图片资源
  let link = links[current_index];
  swipe_img.style.transition = "opacity 0.5s ease-in";
  swipe_img.style.opacity = 0.2;

  setTimeout(() => {
    // 修改背景
    swipe_bg.style.backgroundImage = `url(${link.src})`;
    // 修改前景
    swipe_img.setAttribute("src", link.src);
    swipe_img.style.transition = "opacity 0.7s ease-out";
    swipe_img.style.opacity = 1;
    // 修改链接
    swipe_link.setAttribute("href", link.target);

    // 如果没有额外选中指示点, 就以自动方式修改指示点样式
    if (!document.querySelector(".item .select")) {
      swipe_select_box.children[current_index].classList.add("select");
    }
  }, 500);
};

// 设置自动播放器
function play() {
  auto_play = setInterval(() => {
    let index = current_index + 1;
    if (index >= links.length) {
      index = 0;
    }
    autoPlay(index);
  }, 3000);
}

// 取消自动播放器
function stop() {
  clearInterval(auto_play);
  auto_play = null;
}

// 初始化
function init() {
  console.log('init');
  for (let i = 0; i < links.length; i++) {
    let select = document.createElement("a");
    select.setAttribute('class', 'item');
    select.setAttribute("href", "#");
    select.setAttribute("data-num", i);
    console.log(select);
    swipe_select_box.appendChild(select);
  }
  
  select(0);
  button();
  play();
}

// 按钮绑定
function button() {
  swipe_btn_left.addEventListener("click", () => {
    let index = current_index - 1;
    if (index < 0) {
      index = links.length - 1;
    }
    play(index);
  });

  swipe_btn_right.addEventListener("click", () => {
    let index = current_index + 1;
    if (index >= current_index) {
      index = 0;
    }
    play(index);
  });

  for (const key in swipe_select_box.children) {
    if (swipe_select_box.children.hasOwnProperty(key)) {
      swipe_select_box.children[key].addEventListener("click", (e) => {
        e.preventDefault();
        play(swipe_select_box.children[key].dataset.num);
      });
    }
  }

  swipe.addEventListener("mouseout", (e) => {
    if (
      e.relatedTarget &&
      swipe.compareDocumentPosition(e.relatedTarget) == 10
    ) {
      play();
    }
  });

  swipe.addEventListener("mouseover", (e) => {
    if (
      e.relatedTarget &&
      swipe.compareDocumentPosition(e.relatedTarget) == 10
    ) {
      stop();
    }
  });
}
// 文档加载完成后执行初始化
document.addEventListener("load", init());
