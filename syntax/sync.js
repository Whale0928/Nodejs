var fs = require('fs');

/*
//readfileSync동기적인
console.log('A');
var result = fs.readFileSync('syntax/sample.txt','utf8');
console.log(result);
console.log('c');
*/

//readfile 비동기 적
console.log('A');

fs.readFile('syntax/sample.txt','utf8',function(err,result){
  console.log(result);
});

console.log('c');
