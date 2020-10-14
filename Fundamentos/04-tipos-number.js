const peso1 = 1.0;
const peso2 = Number('2.5');

console.log(peso1,peso2);

// Teste para ver se a constante é um valor inteiro ou não.
    console.log(Number.isInteger(peso1));  // true significa que o valor é inteiro.
    console.log(Number.isInteger(peso2));  // false significa que o valor não é um número inteiro.



    /* Cuidados com o Number */

console.log(7/0); // aqui retorna infinity
console.log("10"/2); //automaticamente ele converte a string em number e retorna uma resposta.
console.log('Show!' * 2);  // retorna um NaN

    

    /* Usando o Math */

    // É um objeto do javascript e não uma função.

    const raio = 5.6;
    const area = Math.PI * Math.pow(raio,2)

console.log(area);
console.log(typeof area);
console.log(typeof Math);