const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Ingresá un número: ", function(numero) {
  numero = Number(numero);

  if (numero > 0) {
    console.log("El Numero es positivo")

  } else if (numero < 0) {
    console.log("El numero es negativo")
  } else {
    console.log("El numero es 0")
  }

  rl.close();
});
