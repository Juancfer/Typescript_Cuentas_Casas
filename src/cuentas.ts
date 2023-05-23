/* eslint-disable @typescript-eslint/prefer-readonly */
/* eslint-disable @typescript-eslint/no-unused-vars */
class Cuentas {
  private titular: string;
  private cantidad: number;

  constructor(titular: string, cantidad: number) {
    this.titular = titular;
    this.cantidad = cantidad;

    console.log("cuenta creada");
  }

  getDescription(): void {
    console.log(`-------------- 
    Datos de la cuenta: 
    Titular: ${this.titular}, 
    Cantidad: ${this.cantidad} 
    --------------`);
  }

  ingresar(cantidadIngresar: number): void {
    if (cantidadIngresar < 0) {
      console.log(`---------
            ERROR: La cantidad introducida es negativa.
        -------------`);
    } else {
      this.cantidad += cantidadIngresar;
    }
  }

  retirar(cantidadRetirar: number): void {
    if (cantidadRetirar > this.cantidad) {
      console.log(`---------
            ERROR: No tienes dinero suficiente para retirar esa cantidad.
        -------------`);
    } else {
      this.cantidad -= cantidadRetirar;
    }
  }
}

const cuenta1: Cuentas = new Cuentas("Pedro", 2000);
const cuenta2: Cuentas = new Cuentas("juan", 0);

// Las cuentas se inician con los valores del constructor
cuenta1.getDescription();
cuenta2.getDescription();

// Ingresamos 300€ a la cuenta 1
cuenta1.ingresar(300);
cuenta1.getDescription();

// Ingresamos un número negativo a la cuenta 2 haciendo que salte un error por consola
cuenta2.ingresar(-200);
cuenta2.getDescription();

// Retiramos 500€ de la cuenta 1 y la vemos tras la operación
cuenta1.retirar(500);
cuenta1.getDescription();

// Retiramos una cantidad mayor a la que hay en la cuenta por lo que se queda a 0.
cuenta1.retirar(4000);
cuenta1.getDescription();
