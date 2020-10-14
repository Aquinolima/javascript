let = isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

// transformar um valor em true or false

isAtivo = 1;
console.log(!!isAtivo);
isAtivo = 0;
console.log(!!isAtivo);

// Situações que se comportam como verdadeiro

console.log('Os verdadeiros...');
console.log(!!3);
console.log(!!-1);
console.log(!!'texto');
console.log(!![]);
console.log(!!Infinity);
console.log(!!(isAtivo = true));

// Situações que se comportam como falsos

console.log('Os falsos...');
console.log(!!0);
console.log(!! '');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));
