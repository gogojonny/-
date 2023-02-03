// 利用  用户--界面模型,  当用户作出行为时,  页面状态发生改变,  用户的每个行为都对应了页面的某一状态,  只需要提前预知这些行为并给这些行为做出对应状态的页面, 用户触发事件时展示页面即可.

// 点击后  希望页面被蒙层覆盖,并主要展示被点击的图片,原图片消失

// 点击后,整个页面被覆盖一层蒙层,这个效果对应的html和css结构,在body内添加一个div,大小占满屏幕,半透明,原图片不显示,并在现有蒙层内显示
// 点击效果要给每一个图片设置,这样不如给list做事件委托

let originImg = null;
let cloneImg = null;
let body = document.getElementById("body");
let list = document.getElementById("list");
list.addEventListener("click", (e) => {
  e.preventDefault()
  originImg = e.target;
  originImg.style.opacity = 0;
  let div = document.createElement("div");
  div.setAttribute("class", "bgc");
  let originImgSrc = originImg.src;
  cloneImg = document.createElement("img");
  cloneImg.setAttribute("src", originImgSrc);

  div.appendChild(cloneImg);
  body.appendChild(div);

  // 点击蒙层后,状态再次改变, 原图像显示出来,
  let dispare = function (e) {
    body.removeChild(e.currentTarget);
    originImg.style.opacity = 1;
    div.removeEventListener(dispare);
  };
  div.addEventListener("click", dispare);
});
