let Pagination = {
  //存放代码
  code: "",
  //初始化数据
  Extend: function (data) {
    data = data || {};
    Pagination.size = data.size || 30;
    Pagination.page = data.page || 1;
    Pagination.step = data.step || 3;
  },
  //添加一页
  Add: function (f, l) {
    for (let i = f; i < l; i++) {
      Pagination.code += "<a>" + i + "</a>";
    }
  },
  //页面后面的样式
  Last: function () {
    Pagination.code += "<i>...</i><a>" + Pagination.size + "</a>";
  },
  //页面前面的样式
  First: function () {
    Pagination.code += "<a>1</a><i>...</i>";
  },
  //每个分页的点击事件
  Click: function () {
    Pagination.page = +this.innerHTML;
    Pagination.Start();
  },
  //给每个分页绑定样式和行为
  Bind: function () {
    let a = Pagination.e.getElementsByTagName("a");
    for (let i = 0; i < a.length; i++) {
      if (+a[i].innerHTML === Pagination.page) {
        a[i].classList.add("active");
      }
      a[i].addEventListener("click", Pagination.Click);
    }
  },
  //定义好样式后将code放入dom中
  Finally: function () {
    Pagination.e.innerHTML = Pagination.code;
    Pagination.code = "";
    Pagination.Bind();
  },

  //定义分页样式
  Start: function () {
    if (Pagination.size < Pagination.step * 2 + 5 + 1) {
      Pagination.Add(1, Pagination.size + 1);
    } else if (Pagination.page < Pagination.step * 2 + 1) {
      Pagination.Add(1, Pagination.step * 2 + 3 + 1);
      Pagination.Last();
    } else if (Pagination.page > Pagination.size + 1 - Pagination.step * 2) {
      Pagination.First();
      Pagination.Add(
        Pagination.size + 1 - (Pagination.step * 2 + 3),
        Pagination.size + 1
      );
    } else {
      Pagination.First();
      Pagination.Add(
        Pagination.page - Pagination.step,
        Pagination.page + Pagination.step
      );
      Pagination.Last();
    }
    Pagination.Finally();
  },
  //前一页
  Prev: function () {
    Pagination.page--;
    if (Pagination.page < 1) {
      Pagination.page = 1;
    }
    Pagination.Start();
  },
  //后一页
  Next: function () {
    Pagination.page++;
    if (Pagination.page > Pagination.size) {
      Pagination.page = Pagination.size;
    }
    Pagination.Start();
  },
  //为两个按钮绑定点击事件
  Buttons: function (e) {
    let nav = e.getElementsByTagName("a");
    nav[0].addEventListener("click", Pagination.Prev);
    nav[1].addEventListener("click", Pagination.Next);
  },
  //建立初始页面
  Create: function (e) {
    let html = ["<a>&#9668</a>", "<span></span>", "<a>&#9658</a>"];
    e.innerHTML = html.join("");
    Pagination.e = e.getElementsByTagName("span")[0];
    Pagination.Buttons(e);
  },
  //初始化
  Init: function (e, data) {
    console.log(":init");
    Pagination.Extend(data);
    Pagination.Create(e);
    Pagination.Start();
  },
};
//初始化参数值.传入目标
let init = function () {
  Pagination.Init(document.querySelector(".pagination"), {
    size: 30,
    page: 1,
    step: 3,
  });
};

//dom加载完毕后进行初始化
document.addEventListener("DOMContentLoaded", init);
