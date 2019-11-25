//Interface

interface CamisetaBase {
    setColor(color);
    getColor();
}

//Decorador
function estampar(logo: string) {
    return function (target: Function) {
        target.prototype.estampacion = function (): void {
            console.log("Camiseta estampada con el logo de:" + logo);
        }
    }
}

@estampar('Gucci Gang')
//Clase (molde del objeto)
class Camiseta implements CamisetaBase{
//Propiedades (caracteristicas del objeto)
    private color    :   string;
    private modelo   :   string;
    private marca    :   string;
    private talla    :   string;
    private precio   :   number;

//Métodos (funciones o acciones del objeto)

    public getColor() {
        return this.color;
    }

    public setColor(color) {
        this.color = color;
    }

    public getModelo() {
        return this.modelo;
    }

    public setModelo(modelo) {
        this.modelo = modelo;
    }

    constructor(coulor: string, model: string, brand: string, size: string, price: number) {
        this.color  =   coulor;
        this.modelo =   model;
        this.marca  =   brand;
        this.talla  =   size;
        this.precio =   price;
    }
}

//Clase hija

class Sudadera extends Camiseta {
    private capucha: boolean;

    public setCapucha(capucha: boolean){
        this.capucha = capucha;
    }

    public getCapucha(): boolean{
        return this.capucha;
    }
}

var camiseta = new Camiseta("Negra", "Manga Corta", "Nike", "M", 150);
console.log(camiseta);
camiseta.estampacion();
var sudadera = new Sudadera("Roja", "Manga Larga", "Adidas", "M", 300);
sudadera.setCapucha(true);
sudadera.setColor("Negra");
console.log(sudadera);