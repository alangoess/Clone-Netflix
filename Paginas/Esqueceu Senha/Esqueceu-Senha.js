function EsqueceuSenha(link){
location.href = './Esqueceu-Senha.html'
}

document.addEventListener('click', function() {
    let verificarEmail = document.getElementById('verificar-email');
    let telefone = document.getElementById('telefone');
    let info = document.getElementById('msg-send-email');

    if (verificarEmail.checked) {
        info.innerHTML = 'Enviaremos um email com instruções de como redefinir sua senha.';
    }else{
        info.innerHTML = 'Enviaremos uma mensagem de texto com um código de redefinição da sua senha. Sujeito a tarifas sobre o uso de dados e mensagens.'
    }
});



