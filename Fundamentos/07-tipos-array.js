const valores = [7.7, 8.9, 6.3, 9.2];
console.log(valores[0], valores[3], valores[4]);

valores[7] = 10;
console.log(valores);

valores.push({id: 3}, false, null, 'teste', 1991);
console.log(valores);