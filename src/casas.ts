/* eslint-disable @typescript-eslint/no-unused-vars */
class Persona {
  public nombre: string;
  public dineroDisponible: number;

  constructor(nombre: string, dineroDisponible: number) {
    this.nombre = nombre;
    this.dineroDisponible = dineroDisponible;
  }

  getDescription(): void {
    console.log(`-------------- 
        Nombre: ${this.nombre}, 
        Dinero Disponible: ${this.dineroDisponible} 
        --------------`);
  }
}

enum TipoCasa {
  CHALET = "CHALET",
  PISO = "PISO",
}

class Casa {
  public precio: number;
  public tipo: TipoCasa;

  constructor(precio: number, tipo: TipoCasa) {
    this.precio = precio;
    this.tipo = tipo;
  }

  comprar(compradores: Persona[]): void {
    let totalDineroDisponible = 0;
    compradores.forEach((element) => {
      totalDineroDisponible += element.dineroDisponible;
    });

    if (totalDineroDisponible >= this.precio) {
      const descuento = this.precio / compradores.length;
      compradores.forEach((element) => {
        element.dineroDisponible -= descuento;
      });
      console.log("Casa comprada!");
    } else {
      console.log("ERROR: Los compradores no tienen suficiente dinero para adquirir esta casa");
    }
  }
}

const juan: Persona = new Persona("Juan", 100000);
const maria: Persona = new Persona("María", 120000);
const paula: Persona = new Persona("Paula", 30000);
const chalet1: Casa = new Casa(80000, TipoCasa.CHALET);
const piso1: Casa = new Casa(60000, TipoCasa.PISO);

// Situación de cada uno antes de comprar
juan.getDescription();
maria.getDescription();
paula.getDescription();

// Transaccioens
chalet1.comprar([juan, maria]); // Debería comprar el chalet
piso1.comprar([paula]); // Debería fallar, no tiene dinero suficiente

// Situación de cada uno después de comprar
juan.getDescription();
maria.getDescription();
paula.getDescription();
