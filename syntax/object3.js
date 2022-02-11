
//폴더로 변수를 정리한다는 느낌
var ol = {
    v1:'v1',
    v2:'v2',

  f1:function(){
      console.log(this.v1);
    },
  f2:function(){
      console.log(this.v2);
    }
}


ol.f1();
ol.f2();
