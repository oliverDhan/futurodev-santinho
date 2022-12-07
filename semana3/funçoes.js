/*function media(notaA, notaB, notaC, notaD){
    return(notaA+notaB+notaC+notaD)/4
}
var result = media(10,5,6,7,8)
console.log(result)*/

/*var criaPet = function (nomedoPet) {
  return {
    getName: function () {
      return nomedoPet;
    },
    setName: function (newName) {
      nomedoPet = New;
    },
  };
};
var ping = criaPet("Ping");
ping.setName("Jhin");
console.log(ping.getName());*/

var mathModule = function (circleArea) {
  return {
    getRadio: function () {
      return circleArea;
    },
  };
};

var area = mathModule("area");
console.log(area.getRadio());
