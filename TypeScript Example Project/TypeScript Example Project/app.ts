//Tipos de datos

//string
var cadena: string = "Este es un tipo de dato string";

// number
var numero: number = 12;

//boolean
var verdaderoOfalso: boolean = true;

//any
var cualquiera: any = "hola";
cualquiera = 77;

//Arrays 

var lenguajes: Array<string> = ["PHP", "JS", "CSS"];

var years: Array<any> = ["Once", 12, true, 'a'];

console.log(cadena, numero, verdaderoOfalso, cualquiera, lenguajes, years);

//Tipos Aceptables para una variable
var tiposAceptables: string | number = "Primero es string";
tiposAceptables = 15;

//Tipos de datos personalizados
type letrasONumeros = string | number;

var ejemplo: letrasONumeros = 5;
ejemplo = "Cambio a tipo de dato String";

//Let vs var

var numeroUno = 10;
var numeroDos = 12;

if (numeroUno == 10) {
    let numeroUno = 44;
    var numeroDos = 55;
    console.log(numeroUno, numeroDos);
}

//Funciones y tipado fuerte

function getNumber(numero: number = 15): number {
    return numero;
}

console.log(getNumber(1));