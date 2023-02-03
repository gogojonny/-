let Pagination = {
  //用于存储代码
  code: "",
  //初始化数据
  Extend: function (data) {
    data = data || {};
    Pagination.size = data.size || 30;
    Pagination.page = data.page || 1;
    Pagination.step = data.step || 3;
  },

  //按编号添加页码
  Add: function (s, f) {
    for (let i = s; i < f; i++) {
      Pagination.code += "<a>" + i + "</a>";
    }
  },
  First: function () {
    Pagination.code += "<a>1</a><i>...</i>";
  },
  Last: function () {
    Pagination.code += "<i>...</i><a>" + Pagination.size + "</a>";
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
  //更改页码
  Click: function () {
    Pagination.page = +this.innerHTML;
    Pagination.Start();
  },
  //绑定页码点击事件,并设置当前页样式
  Bind: function () {
    let a = Pagination.e.getElementsByTagName("a");
    for (let i = 0; i < a.length; i++) {
      if (+a[i].innerHTML === Pagination.page) {
        a[i].classList.add("active");
      }
      a[i].addEventListener("click", Pagination.Click);
    }
  },
  //写入分页
  Finish: function () {
    Pagination.e.innerHTML = Pagination.code;
    Pagination.code = "";
    Pagination.Bind();
  },
  //根据分页类型作不同呈现
  Start: function () {
    if (Pagination.size < Pagination.step * 2 + 6) {
      Pagination.Add(1, Pagination.size + 1);
    } else if (Pagination.page < Pagination.step * 2 + 1) {
      Pagination.Add(1, Pagination.step * 2 + 4);
      Pagination.Last();
    } else if (Pagination.page > Pagination.size - Pagination.step * 2) {
      Pagination.First();
      Pagination.Add(
        Pagination.size - (Pagination.step * 2 + 2),
        Pagination.size + 1
      );
    } else {
      Pagination.First();
      Pagination.Add(
        Pagination.page - Pagination.step,
        Pagination.page + Pagination.step + 1
      );
      Pagination.Last();
    }
    Pagination.Finish();
  },

  //绑定上一页，下一页按钮点击事件
  Buttons: function (e) {
    console.log("button");
    let nav = e.getElementsByTagName("a");
    nav[0].addEventListener("click", Pagination.Prev);
    nav[1].addEventListener("click", Pagination.Next);
  },
  //创建初始结构
  Create: function (e) {
    console.log("create ");
    let html = ["<a>&#9668;</a>", "<span></span>", "<a>&#9658;</a>"];
    e.innerHTML = html.join("");
    Pagination.e = e.getElementsByTagName("span")[0];
    Pagination.Buttons(e);
  },
  //初始化
  Init: function (e, data) {
    console.log("init 2");
    Pagination.Extend(data);
    Pagination.Create(e);
    Pagination.Start();
  },
};

//绑定分页组件，并设置参数
let init = function () {
  console.log("init");
  Pagination.Init(document.getElementById("pagination"), {
    size: 30,
    page: 1,
    step: 3,
  });
};

//dom加载完毕后执行初始化
document.addEventListener("DOMContentLoaded", init);
