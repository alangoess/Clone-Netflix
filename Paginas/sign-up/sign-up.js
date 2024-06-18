const btn_entrar = document.getElementById('btn-entrar')

btn_entrar.addEventListener('click', function(){
    window.location.href = './../Login/index.html';
})

const btn = document.getElementById('btn-question1')
const modal = document.querySelector('dialog')
const btn_close = document.getElementById('closeModal')


 const btn_assinar = document.getElementById('btn-assinar')
 btn_assinar.addEventListener('click', function(){
    window.location.href = './terminar_cadastro/sign-up.html'
 })


btn.onclick = function(){
    modal.show()
}

btn_close.onclick = function(){
    modal.close()
}