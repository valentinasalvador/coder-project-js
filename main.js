console.log("Iniciando JS...");

var numeros = [];

console.log("Agregando numeros al array...");

var num = "";
while (num = prompt("Agrega un numero (deje vacio para finalizar): ", "")) {
  if (num == "") {
    break;
  }

  numeros.push(Number(num));
}

console.log(`Numeros: ${numeros}`);

var suma = 0;
for (const i in numeros) {
  suma += numeros[i];
}

alert(`Suma total: ${suma}`);

var mult = 1;
for (const i in numeros) {
  mult *= numeros[i];
}

alert(`Multiplicacion total: ${mult}`);
