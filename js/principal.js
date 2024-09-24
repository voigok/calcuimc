var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll('.paciente');
for (var valor = 0; valor < pacientes.length; valor ++){
    var paciente = pacientes [valor];
    var tdPeso = paciente.querySelector('.info-peso');
    var peso = tdPeso.textContent;
    var tdAltura = paciente.querySelector('.info-altura');
    var altura = tdAltura.textContent;
    var imc = peso / (altura * altura);
    paciente.querySelector('.info-imc').textContent = imc;

}