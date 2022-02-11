var member = ['ego','a12','boy'];

var i = 0;
while(i<member.length){
  console.log('array loop',member[i]);
  i=i+1;
}
var roles = {
  'progremer':`egoing`,
  'designer':'him',
  'manger':'her',
}
//console.log(roles.designer);
//console.log(roles.progremer);
for(var name in roles){
  console.log('object=>',name, 'value=>',roles[name]); //대괄호는 객채값을 가져온다
}
