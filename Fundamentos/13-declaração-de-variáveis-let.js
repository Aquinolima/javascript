// Trabalhando com let

// O let possui escopo de bloco, ou seja o let só coexiste no próprio escopo.

let numero = 1;

{
    let numero = 2;
    console.log('Dentro = ', numero);
}
console.log('Fora = ', numero);

// Variaveis com a palavra var, tem escopo global e de função.
// Variaveis com a palavra let, tem escopo global, de função e de bloco. 
// ou seja sempre será feito primeiro o bloco nativo, depois irá até nivel global. 