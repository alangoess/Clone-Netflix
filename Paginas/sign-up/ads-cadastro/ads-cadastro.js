import sqlite3 from 'sqlite3';
import { open } from 'sqlite';



async function criarTabelaUsuarios(email, senha) {
    const db = await open({
        filename: './banco.db',
        driver: sqlite3.Database,
    });

    db.run(
        `CREATE TABLE IF NOT EXISTS usuarios (id PRIMARY KEY, email TEXT, senha INTEGER)
   `);

    db.run(`INSERT INTO usuarios (email, senha) VALUES ?,?`, [email, senha])
}

criarTabelaUsuarios('Nome','senha');

const email = document.querySelector('#ads-cadastro-email')
const senha = document.querySelector('#ads-cadastro-senha')
const btn_proximo = document.querySelector('#btn-proximo')

btn_proximo.addEventListener('click', function () {
    if (email.checkValidity() && senha.value.length >= 8) {
        console.log('ok')
        location.href = './confirmacao-email/conf-email.html'
        sessionStorage.setItem('email', 'Para confirmar, clique no link que enviamos para 123098a@gmail.com.')
    } else {
        console.log('erro')
    }
})

