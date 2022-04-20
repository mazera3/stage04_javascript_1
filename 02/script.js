/* 
  Solicite 2 números, faça a soma deles
  e apresente o resultado final ao usuário
*/

alert("Iremos somar 2 números");
let numberOne = prompt("Digite o primeiro número: ");
alert(typeof numberOne); // string
let numberTwo = prompt("Digite o segundo número: ");
// construtor Number
let result = (Number(numberOne) + Number(numberTwo))/2;
alert("Resultado final: " + result);


