var botaoAdicionar = document.querySelector("#buscar-paciente");
var tabela = document.querySelector("#tabela-pacientes");

botaoAdicionar.addEventListener("click", function (event) {
  event.preventDefault();
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
  xhr.addEventListener("load", function () {
    var spanNaoEncontrouPacientes = document.querySelector("#erro-ajax");
    if (xhr.status == 200) {
      spanNaoEncontrouPacientes.classList.add("invisivel");
      var resposta = xhr.responseText;
      var pacientes = JSON.parse(resposta);

      pacientes.forEach((paciente) => {
        adicionaPacienteNaTabela(paciente);
      });
    } else {
      spanNaoEncontrouPacientes.classList.remove("invisivel");
    }
  });
  xhr.send();
});
