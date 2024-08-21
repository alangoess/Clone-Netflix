function entrar(link) {
   let login = document.getElementById('login-txt').value;
   let senha = document.getElementById('senha').value;
   let erro = document.getElementById('res');
   let erro_senha = document.getElementById('res1');

   // Envia os dados de login para o servidor
   fetch('/login', {
       method: 'POST',
       headers: {
           'Content-Type': 'application/json'
       },
       body: JSON.stringify({ email: login, senha: senha })
   })
   .then(response => response.json())
   .then(data => {
       if (data.success) {
           // Se o login for bem-sucedido, redireciona para a página de perfil
           setTimeout(function(){
               location.href = '../Perfil/perfil.html';
           }, 2000);
       } else {
           // Exibe mensagens de erro se as credenciais forem inválidas
           erro.innerHTML = 'Informe um email ou número de telefone válido.';
           erro_senha.innerHTML = 'Senha incorreta.';
       }
   })
   .catch(error => {
       console.error('Erro ao verificar login:', error);
       erro.innerHTML = 'Ocorreu um erro no servidor. Tente novamente mais tarde.';
   });
}
