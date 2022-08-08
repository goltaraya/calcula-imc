var botao = document.querySelector("#adicionar-paciente");

botao.addEventListener("click", function (event) {
  event.preventDefault();

  var form = document.querySelector("#form-adiciona");
  // Extraindo informações do paciente do form
  var paciente = obtemPacienteDoFormulario(form);
  console.log(paciente);

  // Validação de dados do paciente
  var erros = validaPaciente(paciente);
  console.log(erros);
  if (erros.length > 0) {
    exibeMensagensDeErro(erros);
    return;
  }
  adicionaPacienteNaTabela(paciente);

  form.reset();
  var mensagensDeErro = document.querySelector("#mensagens-erro");
  mensagensDeErro.innerHTML = "";
});

function adicionaPacienteNaTabela(paciente) {
  var pacienteTr = montaTr(paciente);
  var tabela = document.querySelector("#tabela-pacientes");
  tabela.appendChild(pacienteTr);
}

function obtemPacienteDoFormulario(form) {
  var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calcularImc(form.peso.value, form.altura.value),
  };

  return paciente;
}

function montaTr(paciente) {
  var pacienteTr = document.createElement("tr");
  pacienteTr.classList.add("paciente");

  pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
  pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
  pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
  pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
  pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

  return pacienteTr;
}

function montaTd(dado, nomeClass) {
  var td = document.createElement("td");
  td.textContent = dado;
  td.classList.add(nomeClass);

  return td;
}

function validaPaciente(paciente) {
  var erros = [];

  if (paciente.nome <= 0) erros.push("O nome não pode ser em branco.");
  if (!validaPeso(paciente.peso)) erros.push("Peso inválido.");
  if (!validaAltura(paciente.altura)) erros.push("Altura inválida.");
  if (!validaGordura(paciente.gordura)) erros.push("Gordura inválida.");
  if (paciente.peso.value == 0) erros.push("O peso não pode ser em branco.");
  if (paciente.altura.value == 0)
    erros.push("A altura não pode ser em branco.");

  return erros;
}

function exibeMensagensDeErro(erros) {
  var ul = document.querySelector("#mensagens-erro");
  ul.innerHTML = "";
  erros.forEach(function (erro) {
    var li = document.createElement("li");
    li.textContent = erro;
    ul.appendChild(li);
  });
}
