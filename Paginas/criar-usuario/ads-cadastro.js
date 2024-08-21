// Adiciona um listener de evento de clique ao botão com o ID 'btn-proximo'
document.getElementById('btn-proximo').addEventListener('click', function (event) {
    // Previne o comportamento padrão do formulário, que seria enviar e recarregar a página
    event.preventDefault();

    // Obtém o elemento do DOM com o ID 'ads-cadastro-email'
    let emailInput = document.getElementById('ads-cadastro-email');
    // Obtém o elemento do DOM com o ID 'ads-cadastro-senha'
    let senhaInput = document.getElementById('ads-cadastro-senha');

    // Obtém o valor do campo de email
    let email = emailInput.value;
    // Obtém o valor do campo de senha
    let senha = senhaInput.value;

    // Verifica se o email é válido (usando o método checkValidity) e se a senha tem pelo menos 8 caracteres
    if (emailInput.checkValidity() && senha.length >= 8) {
        console.log('ok'); // Imprime 'ok' no console se a condição for verdadeira

        // Redireciona o usuário para a página de confirmação de email
        location.href = './confirmacao-email/conf-email.html';

        // Armazena uma mensagem no sessionStorage com o email fornecido
        sessionStorage.setItem('email', 'Para confirmar, clique no link que enviamos para. ' + email); 
    } else {
        console.log('erro'); // Imprime 'erro' no console se a condição for falsa
    }

    // Faz uma requisição POST para a rota '/submit' no servidor
    fetch('/submit', {
        method: 'POST', // Define o método da requisição como POST
        headers: {
            'Content-Type': 'application/json' // Define o cabeçalho Content-Type como JSON
        },
        // Serializa os dados do email e senha em JSON e os envia no corpo da requisição
        body: JSON.stringify({ email: email, senha: senha })
    })
        .then(response => response.json()) // Converte a resposta em JSON
        .then(data => {
            console.log('Dados enviados com sucesso!'); // Imprime uma mensagem de sucesso no console
        })
        .catch(error => { // Captura qualquer erro que ocorra durante o processo de fetch
            console.log('Erro ao enviar os dados.'); // Imprime uma mensagem de erro no console
            console.error('Erro:', error); // Detalha o erro no console
        });
});
