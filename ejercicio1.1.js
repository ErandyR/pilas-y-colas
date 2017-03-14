function Stack(){
  var elementos = [];


  this.push = function(valor){
    return elementos.push(valor);
  };

  this.pop = function(){
    return elementos.pop();
  };

}

var nombre = new Stack();
var apellido = new Stack();

for (i = 0; i < 5; i++){
  nombre.push(prompt("Cual es tu Nombre?"));
  apellido.push(prompt("Cual es tu apellido?"));
}
console.log(nombre);

var nombres = new Stack();
nombres.push(nombre.pop() + " " + apellido.pop());

console.log(nombres);
