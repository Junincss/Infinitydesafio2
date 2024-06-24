const bIniciar = document.getElementById('buttonI');
const select = document.getElementById('calcs');
const divCalculoT  = `<div><label for="base">Base do triângulo</label>
        <input type="number" class="inputs" id="baseT">
        <label for="alturaT">Altura do triangulo:</label>
        <input type="number" id="alturaT" class="inputs">
        </div>
        <div class="buttons">
        <button id="buttonc" class="buttonr" >Calcular</button>
        </div>`
const divCalculoR = `<div><label for="base">Base do retângulo </label>
        <input type="text" class="inputs" id="baseT">
        <label for="alturaT">Altura do Retangulo:</label>
        <input type="text" id="alturaT" class="inputs">
        </div>
        <div class="buttons">
        <button id="buttonc" class="buttonr" >Calcular</button>
        </div>`

const divCalculoC = `<div>
            <label for="lado">Base do Cubo </label>
            <input type="number" class="inputs" id="lado">
        </div>
        <div class="buttons">
        <button id="buttonc" class="buttonr" >Calcular</button>
        </div>`
const divCalculoAc = `<div>
            <label for="raio">Raio </label>
            <input type="number" class="inputs" id="raio">
        </div>
        <div class="buttons">
        <button id="buttonc" class="buttonr" >Calcular</button>
        </div>`
bIniciar.addEventListener("click", function(){

  console.log(select.value)
  switch (parseInt(select.value)) {
  case 1:
    const formcalculo = document.getElementById("formcalculo")
    formcalculo.innerHTML = divCalculoT
    const buttonCalc = document.getElementById("buttonc")
    buttonCalc.addEventListener('click', function(){
      let base = parseFloat(document.getElementById("baseT").value);
      let altura = parseFloat(document.getElementById("alturaT").value);
      const exibirResultado = document.getElementById('resultado')
      let resultado =  calcularAreaTriangulo(base,altura)
      exibirResultado.innerHTML = `  <p> A area do retângulo é igual à:</p> 
      <div class="triangle-container"> <div class="triangle" > ${resultado} </div></div>`
    })
    break;
  case 2:
    const formcalculo2= document.getElementById("formcalculo")
    formcalculo2.innerHTML = divCalculoR    
    const buttonCalcx = document.getElementById("buttonc")
    buttonCalcx.addEventListener('click', function(){
      let base = parseFloat(document.getElementById("baseT").value);
      let altura = parseFloat(document.getElementById("alturaT").value);
      const exibirResultado2 = document.getElementById('resultado')
      if (base === NaN || altura === NaN){
        exibirResultado2.innerText = ` Insira apenas valores numéricos!`
        }else{
        let resultado =  calcularAreaRetangulo(base,altura)
        exibirResultado2.innerHTML = `<p> A area do retângulo é igual à:  <div class="teste" > ${resultado} </div></p>`
      }
    })
    break;
  case 3:
    const formcalculo3 = document.getElementById("formcalculo")
    formcalculo3.innerHTML = divCalculoC   
    const buttonCalcy = document.getElementById("buttonc")
    buttonCalcy.addEventListener('click', function(){
      let lado = parseFloat(document.getElementById("lado").value);
      const exibirResultado3 = document.getElementById('resultado')
        let resultado =  calcularVolumeCubo(lado)
        exibirResultado3.innerHTML = `<div> <p> O volume do cubo é: <div class="teste" > ${resultado} </div></p>`
    })
    break
    case 4:
        const formcaculo4 = document.getElementById("formcalculo")
        formcaculo4.innerHTML = divCalculoAc
        const buttonCalcz = document.getElementById("buttonc")
        buttonCalcz;this.addEventListener('click', function() {
            let raio =  parseFloat(document.getElementById("raio").value);
            let resultado =  calcularAreaCirculo(raio);
            const exibirResultado4 = document.getElementById('resultado');
            exibirResultado4.innerHTML = `<div> <p> A área do círculo é igual a : <div class="teste" > ${resultado} </div></p>`
        })
    break
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
