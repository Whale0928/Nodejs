
/*function a(){
  console.log('A');
}

//익명 함수*/
var a = function(){
  console.log('B');
}

function slowfunc(callback){
  console.log('A');
  callback();
  console.log('C');
}

console.log('d');
slowfunc(a);
