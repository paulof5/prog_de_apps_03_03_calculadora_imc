let peso = 10;
let altura = 1.8;
let imc = peso / (altura * altura);

if (imc < 18.5 && imc > 0) {
  console.log("baixo peso");
} else if (imc >= 18.5 && imc <= 24.9) {
  console.log("peso normal");
} else if (imc >= 25 && imc <= 29.9) {
  console.log("peso normal");
} else if (imc >= 30 && imc <= 34.9) {
  console.log("obesidade");
} else if (imc > 35) {
  console.log("bobesidade mórbida");
} else {
  console.log("dados inválidos");
}
