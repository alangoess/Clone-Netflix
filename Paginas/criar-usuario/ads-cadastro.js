
    let email = document.getElementById('ads-cadastro-email')
    const senha = document.getElementById('ads-cadastro-senha')
    const btn_proximo = document.getElementById('btn-proximo')
    btn_proximo.addEventListener('click', function(){
        if(email.checkValidity() && senha.value.length >= 8){
            console.log('ok')
            location.href = './confirmacao-email/conf-email.html'
            sessionStorage.setItem('email', 'Para confirmar, clique no link que enviamos para. ' + email.value)
        }else{
            console.log('erro')
        }
    })
   
