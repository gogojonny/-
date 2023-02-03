// console.log("hello");

// 点击2，清空所有active并给点击的按钮触发active特效
//点击前进，当前按钮的前一个按钮触发active特效，目前的按钮取消active特效
// 点击后退，当前按钮的后一个按钮触发active特效，目前的按钮取消active特效
//当按钮位数大于7,或者小于25时,在第二个按钮处加上i标签
//当按钮位数大于7时,中间的按钮会自动移动位置
//第六个按钮状态在按钮数足够大时总是active,或者说左边出现...与中间active固定同时出现
//按钮数到26之后...出现在前面,原先..的位置出现按钮

let aList = document.querySelectorAll("a");
let aArr = Object.values(aList);
let aButNum = aArr.slice(1, aArr.length-1);
let i = 0; //当前被active选中的元素
for (let n = 0; n < aButNum.length; n++) {
  aButNum[n].addEventListener("click", () => {
    // aButNum.forEach((a)=>{
    //   a.classList.remove("active")
    // })
    aButNum[i].classList.remove("active");
    aButNum[n].classList.add("active");
    i = n;
  });
}

aArr[0].addEventListener("click", () => {
  if (i !== 0) {
    aButNum[i].classList.remove("active");
    aButNum[i - 1].classList.add("active");
    i = i - 1;
  }
});

aArr[11].addEventListener("click", () => {
  if (i !== 9) {
    aButNum[i].classList.remove("active");
    aButNum[i + 1].classList.add("active");
    i = i + 1;
  }
});








