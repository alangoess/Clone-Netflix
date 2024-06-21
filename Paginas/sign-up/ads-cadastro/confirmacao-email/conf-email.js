document.addEventListener('DOMContentLoaded', function(){
    const email = sessionStorage.getItem('email')

    if('email'){
        const MostrarEmail = document.getElementById('text-verificar2')
        MostrarEmail.textContent =` ${email}`
    }
})

let btn_pular = document.getElementById('btn-pular')
btn_pular.addEventListener('click', function(){
    location.href = '../pagamentos/pagamento.html'
})