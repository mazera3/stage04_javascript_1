/*
  Capture 10 items para compor a lista de um supermercado.
  
  Após capturar os 10 items, imprima-os, separando por vírgula.
*/

let items = [];
var n = 10;

for (let item = 0; item < n; item++) {
  let itemName = prompt("Digite o item " + (item + 1))

  items[item] = itemName
}

alert(items)