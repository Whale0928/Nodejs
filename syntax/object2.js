// array , object

var f = function (){

  console.log(1+1);
    console.log(1+2);
}
var a = [f];

a[0];
// 반복문은 값이 될 수 없음

var o={
  func:f
}

o.func();
