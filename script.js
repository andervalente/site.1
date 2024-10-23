// Mudar texto ao clicar no botão
document.getElementById('change-text').addEventListener('click', function() {
    this.textContent = "Você mudou o texto!";
});

// Validação simples de formulário
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name === "" || email === "" || message === "") {
        document.getElementById('form-message').textContent = "Por favor, preencha todos os campos!";
        document.getElementById('form-message').style.color = "red";
    } else {
        document.getElementById('form-message').textContent = "Mensagem enviada com sucesso!";
        document.getElementById('form-message').style.color = "green";
    }
});
