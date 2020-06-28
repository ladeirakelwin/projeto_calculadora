//objeto calculadora
let calculadora = {};
calculadora.display = document.querySelector("#display");

let botaoSoma = document.querySelector("#soma");


let botaoIgual = document.querySelector("#igual");
let botaoPonto = document.querySelector("#ponto");
let botaoZero = document.querySelector("#numeroZero");
let botaoUm = document.querySelector("#numeroUm");
let botaoDois = document.querySelector("#numeroDois");
let botaoTres = document.querySelector("#numeroTres");
let botaoQuatro = document.querySelector("#numeroQuatro");
let botaoCinco = document.querySelector("#numeroCinco");
let botaoSeis = document.querySelector("#numeroSeis");
let botaoSete = document.querySelector("#numeroSete");
let botaoOito = document.querySelector("#numeroOito");
let botaoNove = document.querySelector("#numeroNove");


let acumulador = "";

botaoUm.onclick = function() {
    calculadora.display.innerText += 1;
}

botaoSoma.onclick = function() {
    acumulador += calculadora.display.innerText;
    acumulador += " + ";
    calculadora.display.innerText = "";
}

botaoIgual.onclick = function() {
    //TODO: checar se existe conteúdo dentro do display

    //colocando conteúdo do display no acumulador
    acumulador += calculadora.display.innerText;
    //resolvendo conta (conteúdo acumulador)
    let resultado = eval(acumulador);
    //colocando no display o conteúdo do acumulador
    calculadora.display.innerText = resultado;
    // limpando o acumulador
    acumulador = "";

}