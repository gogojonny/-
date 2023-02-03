let Pagination = {
  //用于存放代码
  code: "",
  //用于存放初始化数据
  Extend: function (data) {
    data = data || {};
    Pagination.size = data.size || 30;
    Pagination.page = data.page || 1;
    Pagination.step = data.step || 3;
  },
  //添加分页
  Add: function (f, l) {
    for (let i = f; i < l; i++) {
      Pagination.code += "<a>" + i + "</a>";
    }
  },
  //添加分页的最后一部分
  Last: function () {
    Pagination.code += "<i>...</i><a>" + Pagination.size + "</a>";
  },
  //添加分页的开头部分
  First: function () {
    Pagination.code += "<a>1</a><i>...</i>";
  },
  //绑定分页的点击功能
  Click: function () {
    Pagination.page = +this.innerHTML;
    Pagination.Start();
  },
  //绑定分页的点击属性
  Bind: function () {
    let a = Pagination.e.getElementsByTagName("a");
    for (let i = 0; i < a.length; i++) {
      if (+a[i].innerHTML === Pagination.page) {
        a[i].classList.add("active");
      }
      a[i].addEventListener("click", Pagination.Click);
    }
  },
  //确定分页样式后将code放入dom中
  Finally: function () {
    Pagination.e.innerHTML = Pagination.code;
    Pagination.code = "";
    Pagination.Bind();
  },

  //确定分页的样式
  Start: function () {
    if (Pagination.size < Pagination.step * 2 + 6) {
      Pagination.Add(1, Pagination.size + 1);
    } else if (Pagination.page < Pagination.step * 2 + 1) {
      Pagination.Add(1, Pagination.step * 2 + 3 + 1);
      Pagination.Last();
    } else if (Pagination.page > Pagination.size - Pagination.step * 2) {
      Pagination.First();
      Pagination.Add(
        //首先确定要放几个元素,然后已知从1数到100是100个数,那么从1数100个数,那么最后一个数就是100
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
  //上一页
  Prev: function () {
    Pagination.page--;
    if (Pagination.page < 1) {
      Pagination.page = 1;
    }
    Pagination.Start();
  },
  //下一页
  Next: function () {
    Pagination.page++;
    if (Pagination.page > Pagination.size) {
      Pagination.page = Pagination.size;
    }
    Pagination.Start();
  },
  //给按钮添加事件
  Buttons: function (e) {
    console.log("buttons");
    let nav = e.getElementsByTagName("a");
    nav[0].addEventListener("click", Pagination.Prev);
    nav[1].addEventListener("click", Pagination.Next);
  },
  //给页面做初始化
  Create: function (e) {
    console.log("creat");
    let html = ["<a>&#9668;</a>", "<span></span>", "<a>&#9658;</a>"];
    e.innerHTML = html.join("");
    Pagination.e = e.getElementsByTagName("span")[0];
    Pagination.Buttons(e);
  },
  //初始化
  Init: function (e, data) {
    Pagination.Extend(data);
    Pagination.Create(e);
    Pagination.Start();
  },
};

//传入初始化数据
let init = function () {
  //可能className后续不能在使用getElement
  Pagination.Init(document.querySelector(".pagination"), {
    size: 30,
    page: 1,
    step: 3,
  });
};

//dom加载完毕后初始化页面
document.addEventListener("DOMContentLoaded", init);
