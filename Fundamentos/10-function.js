/* 
                ***FUNCTION***

    Uma função é um verbo, uma ação, ela executa um processo baseado na sentença de código. 
    A função ela define um bloco associado que em JavaScript é delimitado por Chaves, isso é função.
    Logo depois vem um corpo da função, que é o bloco no qual tem todas as sentenças de código que serão
executadas quando invocada função.
    Função nada mais é do que um trecho de código com um nome, e é possivel usar esse 
trecho do código onde for necessário detro do programa.
    Função é um bloco de código ou seja um grupo com várias sentenças de código ou uma sentença
ou às vezes nenhuma.
*/


// Função em quase tudo

console.log(typeof Object); //o Object em Js é uma função. Jesus /o\

// Exemplos básicos de funções

    //Função sem retorno
    function imprimirSoma (a, b) {
        console.log(a + b);
    };

    imprimirSoma(2,3);
    imprimirSoma(2);
    imprimirSoma(2, 10, 4, 5, 6, 7, 8);
    imprimirSoma();

    //Função com retorno
    function soma (a, b = 1) {
        return a + b
    };

    console.log(soma(2, 3));
    console.log(soma(2));
    console.log(soma());



