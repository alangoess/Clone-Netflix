const btn_entrar = document.getElementById('btn-entrar')

btn_entrar.addEventListener('click', function(){
    window.location.href = './../Login/index.html';
})

const btn = document.getElementById('btn-question1')
const modal = document.querySelector('dialog')
const btn_close = document.getElementById('closeModal')
const promo_assinar = document.getElementById('promo_assinar')
const btn_assinar = document.getElementById('btn-assinar')

promo_assinar.addEventListener('click', function(){
    location.href = './ads-cadastro/ads-cadastro.html'
})

 btn_assinar.addEventListener('click', function(){
    window.location.href = './terminar_cadastro/sign-up.html'
 })
