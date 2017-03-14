var nombres = [];

function Stack(){
  var nombre = [];
  var apellido = [];


  this.pushNombre = function(valor){
    return nombre.push(valor);
  };

  this.pushApellido = function(){
    return apellido.push();
  };

  this.popNombre = function() {
    return nombre.pop();
  };

  this.popApellido = function() {
    return apellido.pop();
  };
/*
  function pedirNombre() {
    var ingresaNombre = "";
    for (i=0; i < 5; i++) {
      ingresaNombre[i] = prompt("ingresa Nombre: ");
      this.pushNombre(ingresaNombre);
    }
    return pedirNombre;
    console.log(nombre);
  }

  function pedirApellido() {
    var ingresaApellido = "";
    for (i=0; i < 5; i++) {
      ingresaApellido[i] = prompt("ingresa Apellido: ");
      this.pushApellido(ingresaApellido);
    }
  }
*/

}
