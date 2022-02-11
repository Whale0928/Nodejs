console.log(Math.round(1.3));
console.log(Math.round(1.8));

//sum(2,4); //각각의 입력값은 아규먼트,인자

function sum(first,second){ //parameter 매개체
  //return first+second;
  console.log('a');
  return first+second;
  //return second+first;
  console.log('b');
}
console.log(sum(2,4));

/*
const readline = require('readline');

  데이터를 입력받아 출력하고 해당 값의 길이값을 수로 표현해주는 코드
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Please enter a color? ', (value) => {
    let color = value
    console.log(`You entered ${color}`);
    rl.close();

    console.log(color.length);
});
*/
