
//1.	Faça um programa, usando funções, que realize todas as operações básicas: soma, subtração, multiplicação, divisão. 


var n1 = parseInt(  prompt("digite o primeiro número"));
var n2 = parseInt(  prompt("digite o segundo número"));
console.log (soma (n1,n2))
console.log (dividi (n1,n2))
console.log (multiplica(n1,n2))
console.log (subtrai(n1,n2))

function soma (n1,n2) {
    return n1+n2
};

function dividi (n1,n2) {
    return n1/n2
};

function multiplica (n1,n2) {
    return n1*n2
};

function subtrai (n1,n2) {
    return n1-n2
};


//2.	Faça um programa, usando uma função, para calcular a porcentagem de um número.

var n1 = parseInt(  prompt("digite o primeiro numero"));
var n2 = parseInt(  prompt("digito a porcentagem do primeiro numero"));
console.log (porcentagem(n1,n2));

function porcentagem (n1,n2) {
    return (n1 /100) * n2
};

//3.	Faça um programa, usando uma função que converta uma temperatura de Celsius para Fahrenheit.


var fahren = parseFloat(  prompt("qual o grau em Fahrenheit?")) ;
console.log(convertegrau(fahren).toFixed(0) + " Graus Célsius");


function convertegrau (fahren) {
    return (fahren - 32) / 1.8 
} 


//4.	Faça um programa, usando uma função o que retorne um valor booleano (true ou false) informando se o número enviado como parâmetro é ímpar.

var n1 = parseInt(  prompt("digite um numero"));
console.log(verificaimpar(n1));



function verificaimpar (n1) {
    if (n1% 2 != 0) {
        return true
} else {
    return false
};
    
}; 

//5.	Faça um programa, usando uma função que calcule a raiz quadrada de um número.

var n1 = parseInt(  prompt("digite um numero inteiro para saber a raiz quadrada desse numero"));
console.log(calcraiz(n1).toFixed(2));


function calcraiz (n1) {
    return Math.sqrt(n1) 
};
