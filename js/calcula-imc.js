var titulo = document.querySelector(".titulo");
titulo.textContent = "NutriLight";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
  var paciente = pacientes[i];

  var peso = pacientes[i].querySelector(".info-peso").textContent;
  var altura = pacientes[i].querySelector(".info-altura").textContent;
  
  var pesoValido = validaPeso(peso);
  var alturaValida = validaAltura(altura);
  var tdImc = pacientes[i].querySelector(".info-imc");

  if (!pesoValido) {
    pesoValido = false;
    tdImc.textContent = "Peso inválido!";
    paciente.classList.add("paciente-invalido");
  }

  if (!alturaValida) {
    alturaValida = false;
    tdImc.textContent = "Altura inválida!";
    paciente.classList.add("paciente-invalido");
  }

  if (pesoValido && alturaValida) {
    var imc = calcularImc (peso, altura); 
    tdImc.textContent = imc;
  }
}

function calcularImc(peso, altura){
  var imc = peso / (altura * altura);
  return imc.toFixed(2);
}

function validaPeso(peso){
  if (peso <= 0 || peso >= 1000) {
    return false;
  } else {
    return true;
  }
}

function validaAltura(altura){
  if(altura <= 0 || altura >= 3){
    return false;
  } else {
    return true;
  }
}
