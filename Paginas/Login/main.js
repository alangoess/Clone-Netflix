function entrar(link){
           
    let login = document.getElementById('login-txt').value
    let senha = document.getElementById('senha').value
    let erro = document.getElementById('res')
    let erro_senha = document.getElementById('res1')
 
    if(login == 'admin' && senha == 'admin'){
      setTimeout(function(){
         location.href = '../Perfil/perfil.html'
      }, 2000)
    }else{
   erro.innerHTML = 'Informe um email ou número de telefone válido.'
   erro_senha.innerHTML = 'Senha incorreta.'
    }
 }