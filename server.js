const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const db = new sqlite3.Database('./Paginas/criar-usuario/database.db'); // Salvar os dados no arquivo 'database.db'

app.use(bodyParser.json());

// Servir arquivos estáticos da pasta atual
app.use(express.static(path.join(__dirname)));

// Criar a tabela, se ainda não existir
db.serialize(() => {
    db.run("CREATE TABLE IF NOT EXISTS users (email TEXT, senha INTEGER)");
});

// Rota para receber os dados do formulário
app.post('/submit', (req, res) => {
    const { email, senha } = req.body;

    console.log('Email:', email);
    console.log('Senha:', senha);
    console.log('Tipo de Email:', typeof email);
    console.log('Tipo de Senha:', typeof senha);

    // Inserir dados na tabela
    db.run(`INSERT INTO users(email, senha) VALUES(?, ?)`, [email, senha], function(err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: "Dados inseridos com sucesso!" });
    });
});

app.post('/login', (req, res) => {
    const { email, senha } = req.body;

    // Verifica se o utilizador existe e se a senha está correta
    db.get(`SELECT * FROM users WHERE email = ? AND senha = ?`, [email, senha], (err, row) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (row) {
            // Se encontrar um utilizador com as credenciais fornecidas, o login é bem-sucedido
            res.json({ success: true });
        } else {
            // Se não encontrar, as credenciais são inválidas
            res.json({ success: false });
        }
    });
});

// Iniciar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
