
var botao = document.querySelector("#adicionar-paciente");

botao.addEventListener("click", function(event){
  event.preventDefault();

  var form = document.querySelector("#form-adiciona");
  // Extraindo informações do paciente do form
  var paciente = obtemPacienteDoFormulario(form);
  console.log(paciente);

  // Criando as TRs e as TDs do paciente
  var pacienteTr = montaTr(paciente);

  var tabela = document.querySelector("#tabela-pacientes");
  // Validação de dados do paciente
  validaPaciente(paciente);
  tabela.appendChild(pacienteTr);

  form.reset();
});


function obtemPacienteDoFormulario(form){
  var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calcularImc(form.peso.value, form.altura.value)
  }

  return paciente;
}

function montaTr(paciente){
  var pacienteTr = document.createElement("tr");
  pacienteTr.classList.add("paciente");

  pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
  pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
  pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
  pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
  pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

  return pacienteTr;
}

function montaTd(dado, nomeClass){
  var td = document.createElement("td");
  td.textContent = dado;
  td.classList.add(nomeClass); 
  
  return td;
}

function validaPaciente(paciente) {
  if (validaPeso(paciente.peso)){
    return true;
  } else {
    if (validaAltura(paciente.altura)){
      return true;
    } {
     return false; 
    }  
  }

  
}