// banco.js

import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

async function conectarDB() {
    const db = await open({
        filename: './banco.db',
        driver: sqlite3.Database,
    });
    return db;
}

async function criarTabelaUsuarios() {
    const db = await conectarDB();
    await db.run(`
        CREATE TABLE IF NOT EXISTS usuarios (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            email TEXT,
            senha TEXT
        )
    `);
}

async function inserirUsuario(email, senha) {
    const db = await conectarDB();
    await db.run(`INSERT INTO usuarios (email, senha) VALUES (?, ?)`, [email, senha]);
}

export { criarTabelaUsuarios, inserirUsuario };
