document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('myForm');
    const nomeInput = document.getElementById('nome');
    const emailInput = document.getElementById('email');
    const cepInput = document.getElementById('cep');
    const idadeInput = document.getElementById('idade');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Previne o envio padrão do formulário

        console.log(nomeInput.value);
        console.log(emailInput.value);
        console.log(cepInput.value);
        console.log(idadeInput.value);
    });
});
