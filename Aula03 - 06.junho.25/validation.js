document.addEventListener('DOMContentLoaded', () => {
const form = document.getElementById('myForm');
const nome = document.getElementById('nome');
const email = document.getElementById('email');
const cep = document.getElementById('cep');
const idade = document.getElementById('idade');

// ... outros inputs e spans de erro


form.addEventListener('submit', function (event) {
event.preventDefault(); // Previne o envio padrão do formulário
// validarFormulario();
validaNome(nome.value);
validaCEP(cep.value);
validaIdade(idade.value);



});
//

function validaNome(nome) {
if (nome.length < 3 || nome.length > 60) {
console.log('Nome inválido'); {
return false;
}
} else {
console.log('Nome válido' + nome);
return true;
}
}

function validaCEP(cep) {
if (cep.length != 8 || isNaN(cep)) {
console.log('CEP inválido');
}
let cepSemMascara = cep.replace(/\D/g, '');
console.log(cepSemMascara);
}

function validaIdade(idade) {
if (idade < 0 || idade > 120 || isNaN(idade)) {
console.log('Idade inválida');
}

else {
console.log('Idade válida' + idade);
}
}


});