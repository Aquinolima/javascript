// String é uma cadeia de caracteres que no Javascript pode ser delimitado por três símbolos.
// aspas duplas - ""
// aspas simples - ''
// crase - ``

        const escola = "Cod3r";

        console.log(escola);
        console.log(escola.charAt(4));  // retorna a letra que está no indice 4.
        console.log(escola.charCodeAt(4)); //retorna o valor da letra que está no indice 4 na tabela ASCII.
        console.log(escola.indexOf('r'));  // retorna a posição da letra.
        console.log('Escola '.concat(escola).concat("!"));  // concatena a string da variável.
        console.log(escola.replace(3, 'e'));   //faz a substituição do indice incado pela letra indicada.
        console.log('Cyndi,Léia,Thiago,Bruce'.split(','));  //cria um array com base na sentença a partir da indicação do caractere para separação.


    /* Usando template Strings */

        const nome = "Cyndi";
        const concatenacao = 'Olá' + nome + '!';

        const template = `Olá ${nome}!`
        console.log(concatenacao, template);

    // expressões...

        console.log(`1 + 1 = ${1+1}`);
        

    // funções

        const up = texto => texto.toUpperCase();
        console.log(`Ei... ${up('cuidado')}!`);


// Dentro do template `${  }` quando entre crases pode-se chamar funções ou resolver expressões.