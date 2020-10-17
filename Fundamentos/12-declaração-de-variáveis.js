// Usando Var

// Variável tem dois escopos possiveis ou uma var global ou var em função.

{{{{ var sera = 'Será???'
        console.log(sera);
}}}}

console.log(sera);

//A variável declarado dentro de uma função só fica visivel dentro da função.
//Quando criada fora será uma variável global.
function teste(){
    var local = 123;                
    console.log(local);                                     
};
teste();


