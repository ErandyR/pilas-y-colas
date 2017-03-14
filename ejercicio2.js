

function Queue(){
  this.dataStore = Array.prototype.slice.call(arguments, 0);
  this.enqueue = enqueue;
  this.dequeue = dequeue;

  function enqueue(element){
    this.dataStore.push(element);
  }

  function dequeue(){
    this.dataStore.shift();
  }
}

var nombre = new Queue();
var apellido = new Queue();

for(i=0; i <5; i++){
  this.enqueue(prompt("Cual es tu Nombre?"));
  this.enqueue(prompt("Cual es tu Apellido?"));
}

var nombres = [];
nombres.push(nombre.dequeue() + " " + apellido.dequeue());
console.log(nombres);
