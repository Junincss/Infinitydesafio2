const bIniciar = document.getElementById('buttonI');
const select = document.getElementById('calcs');

bIniciar.addEventListener("click", function(){

  console.log(select.value)
  switch (parseInt(select.value)) {
  case 1:
    const formcalculo = document.getElementById("formcalculo")
    formcalculo.innerHTML = `<div><label for="base">Base do triângulo</label>
        <input type="number" class="inputs" id="baseT">
        <label for="alturaT">Altura do triangulo:</label>
        <input type="number" id="alturaT" class="inputs">
        </div>
        <div class="buttons">
        <button id="buttonc" class="button" >Calcular</button>
        </div>`
    const buttonCalc = document.getElementById("buttonc")
    buttonCalc.addEventListener('click', function(){
      let base = parseFloat(document.getElementById("baseT").value);
      let altura = parseFloat(document.getElementById("alturaT").value);
      const exibirResultado = document.getElementById('resultado')
      let resultado =  calcularAreaTriangulo(base,altura)
      exibirResultado.innerText = ` A area do triângulo é igual à: ${resultado}`
    })
    break;
  case 2:
    const formcalculo2 = document.getElementById("formcalculo")
    formcalculo2.innerHTML = `<div><label for="base">Base do retângulo</label>
        <input type="number" class="inputs" id="baseT">
        <label for="alturaT">Altura do Retangulo:</label>
        <input type="number" id="alturaT" class="inputs">
        </div>
        <div class="buttons">
        <button id="buttonc" class="button" >Calcular</button>
        </div>`
    const buttonCalcx = document.getElementById("buttonc")
    buttonCalcx.addEventListener('click', function(){
      let base = parseFloat(document.getElementById("baseT").value);
      let altura = parseFloat(document.getElementById("alturaT").value);
      const exibirResultado2 = document.getElementById('resultado')
      let resultado =  calcularAreaRetangulo(base,altura)
      exibirResultado2.innerText = ` A area do retângulo é igual à: ${resultado}`
    })
    break;
  case 3:
  //   let lado = parseFloat(prompt("Digite o valor do lado do cubo:"));
  //   alert("O volume do cubo é: " + calcularVolumeCubo(lado));
  //   break;
  // case 4:
  //   let raio = parseFloat(prompt("Digite o valor do raio do círculo:"));
  //   alert("A área do círculo é: " + calcularAreaCirculo(raio));
  //   break;
  // case 5:
  //   alert("O programa foi encerrado.");
  //   break;
  // // default:
  //   alert("Opção inválida.");
}
  
})


function calcularAreaTriangulo(base, altura) {
  return (base * altura) / 2;
}

function calcularAreaRetangulo(base, altura) {
  return base * altura;
}

function calcularVolumeCubo(lado) {
  return Math.pow(lado, 3);
}

function calcularAreaCirculo(raio) {
  return Math.PI * Math.pow(raio, 2);
}
