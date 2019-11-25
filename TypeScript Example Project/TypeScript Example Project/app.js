//Tipos de datos
//string
var cadena = "Este es un tipo de dato string";
// number
var numero = 12;
//boolean
var verdaderoOfalso = true;
//any
var cualquiera = "hola";
cualquiera = 77;
//Arrays 
var lenguajes = ["PHP", "JS", "CSS"];
var years = ["Once", 12, true, 'a'];
console.log(cadena, numero, verdaderoOfalso, cualquiera, lenguajes, years);
//Tipos Aceptables para una variable
var tiposAceptables = "Primero es string";
tiposAceptables = 15;
var ejemplo = 5;
ejemplo = "Cambio a tipo de dato String";
//Let vs var
var numeroUno = 10;
var numeroDos = 12;
if (numeroUno == 10) {
    var numeroUno_1 = 44;
    var numeroDos = 55;
    console.log(numeroUno_1, numeroDos);
}
//Funciones y tipado fuerte
function getNumber(numero) {
    if (numero === void 0) { numero = 15; }
    return numero;
}
console.log(getNumber(1));
//# sourceMappingURL=app.js.map