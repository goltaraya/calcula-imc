var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event) {
    var alvoEvento = event.target;
    var noAlvo = alvoEvento.parentNode;
    noAlvo.classList.add("fadeOut");
    
    setTimeout(function(){
        noAlvo.remove();
    }, 500);
})