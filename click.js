let dot = true;
function controlDot(){
  return (dot === true)?true:false;
}

botaoZero.onclick = function() {
  calculadora.display.textContent += 0;
}

botaoIgual.onclick = function() {
  //TODO: checar se existe conteúdo dentro do display

  //colocando conteúdo do display no acumulador
  acumulador += calculadora.display.textContent;
  //resolvendo conta (conteúdo acumulador)
  let resultado = eval(acumulador);
  //colocando no display o conteúdo do acumulador
  calculadora.display.textContent = resultado;
  // limpando o acumulador
  acumulador = "";

}

botaoPonto.onclick = function(){
  calculadora.display.textContent += ".";
}

botaoUm.onclick = function() {
  calculadora.display.textContent += 1;
}

botaoDois.onclick = function() {
  calculadora.display.textContent += 2;
}

botaoTres.onclick = function() {
  calculadora.display.textContent += 3;
}

botaoQuatro.onclick = function() {
  calculadora.display.textContent += 4;
}

botaoCinco.onclick = function() {
  calculadora.display.textContent += 5;
}

botaoSeis.onclick = function() {
  calculadora.display.textContent += 6;
}

botaoSete.onclick = function() {
  calculadora.display.textContent += 7;
}

botaoOito.onclick = function() {
  calculadora.display.textContent += 8;
}

botaoNove.onclick = function() {
  calculadora.display.textContent += 9;
}

//Operações

//Apagar
botaoCA.onclick = function(){
  acumulador = "";
  calculadora.display.textContent = ""
}

botaoC.onclick = function(){
  calculadora.display.textContent = calculadora.display.textContent.replace(/.$/,"");
}

//parenteses

botaoAParenteses.onclick = function() {
  calculadora.display.textContent += "(";
}

botaoFParenteses.onclick = function() {
  calculadora.display.textContent += ")";
}

//operações básicas

botaoSubtracao.onclick = function() {
  if(!valida(calculadora.display.textContent)){
    calculadora.display.textContent += "-";
  }
  // calculadora.display.textContent = "";
}

botaoVezes.onclick = function() {
  if(!valida(calculadora.display.textContent)){
    calculadora.display.textContent += "*";
  }
  // calculadora.display.textContent = "";
}

botaoDivisao.onclick = function() {
  if(!valida(calculadora.display.textContent)){
    calculadora.display.textContent += "/";
  }
  // calculadora.display.textContent = "";
}

botaoSoma.onclick = function() {
  if(!valida(calculadora.display.textContent)){
    calculadora.display.textContent += "+";
  }
  // calculadora.display.textContent = "";
}

function valida(arr){
  return (/[-+*/.]/.test(arr[arr.length -1]))?true:false;
}


//testador de valores
// setInterval(() => {
//   console.log(calculadora.display.textContent[calculadora.display.textContent.length-1])  
// },1000);
