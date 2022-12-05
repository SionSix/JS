//Funciones declarativas

function sumar(a,b) {
    var resultado = a + b
    print(resultado)
}
sumar(1+2);

//Funciones expresivas

var suma = function(a,b){
    return a + b;
}  
suma(1+2);