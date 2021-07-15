var a = 0;
function move1() {
  if (a == 0) {
    a = 1;
    var ele = document.getElementById("line1");
    var widt = 1;
    var idd = setInterval(frame, 10);
    function frame() {
      if (widt >= 90) {
        clearInterval(idd);
        a = 0;
      } else {
        widt++;
        ele.style.width = widt + "%";
      }
    }
  }
}
var i = 0;
function move2() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("line2");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 85) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}
var b = 0;
function move3() {
  if (b == 0) {
    b = 1;
    var el = document.getElementById("line3");
    var wid = 1;
    var idw = setInterval(frame, 10);
    function frame() {
      if (wid >= 70) {
        clearInterval(idw);
        b = 0;
      } else {
        wid++;
        el.style.width = wid + "%";
      }
    }
  }
}
var c = 0;
function move4() {
  if (c == 0) {
    c = 1;
    var lem = document.getElementById("line4");
    var wdth = 1;
    var i = setInterval(frame, 10);
    function frame() {
      if (wdth >= 95) {
        clearInterval(i);
        c = 0;
      } else {
        wdth++;
        lem.style.width = wdth + "%";
      }
    }
  }
}
var d = 0;
function move5() {
  if (d == 0) {
    d = 1;
    var elei = document.getElementById("line5");
    var widthh = 1;
    var iddr = setInterval(frame, 10);
    function frame() {
      if (widthh >= 50) {
        clearInterval(iddr);
        d = 0;
      } else {
        widthh++;
        elei.style.width = widthh + "%";
      }
    }
  }
}
var e = 0;
function move6() {
  if (e == 0) {
    e = 1;
    var eleiment = document.getElementById("line6");
    var widths = 1;
    var iddrs = setInterval(frame, 10);
    function frame() {
      if (widths >= 75) {
        clearInterval(iddrs);
        e = 0;
      } else {
        widths++;
        eleiment.style.width = widths + "%";
      }
    }
  }
}
function slider() {
  move1()
  move2()
  move3()
  move4()
  move5()
  move6()
}