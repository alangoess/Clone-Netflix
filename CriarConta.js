const btn_entrar = document.getElementById('btn-entrar')

btn_entrar.addEventListener('click', function(){
    window.location.href = './Paginas/Login/index.html';
})

const btn = document.getElementById('btn-question1')
const modal = document.querySelector('dialog')
const btn_close = document.getElementById('closeModal')
const email = document.getElementById('email')


function submit(){
    if(!email.checkValidity()){ //condição usada para validar o email
        console.log('email invalido')

        
    }else{
        window.location = './Paginas/sign-up/terminar_cadastro/sign-up.html'
    }
    
}

btn.onclick = function(){
    modal.show()
}

btn_close.onclick = function(){
    modal.close()
}