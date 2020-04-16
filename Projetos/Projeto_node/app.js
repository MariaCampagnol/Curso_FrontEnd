const express = require('express');
const app = express();

const bodyparser = require('body-parser');
const path = require('path');

const mysql = require('mysql');

//()=> eh a mesma coisa que function()
app.listen('3000', () => {
    console.log("servidor ok");
});

//body-parser
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'Views'));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

//Conexao com o banco
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'projeto_node'
});

db.connect((err) => {
    if (err)
        console.log('Erro ao conectar com o banco');
});

//route
app.get('/', (request, response) => {
    //response.render('index', { 'nome': 'Maria Isabel Campagnol', 'cargo': 'Developer' });
    //response.render('index', { lista: [{ 'telefone': '999999999' }, { 'telefone': '999999999' }, { 'telefone': '888888888' }], 'nome':'Maria Isabel Campagnol', 'cargo':'Developer' });

    let query = db.query('SELECT * FROM Clientes', (err, result) => {
        response.render('index', {
            lista
                : result
        });
    });
});

app.get('/cadastro', (request, response) => {
    response.render('cadastro', {});
});

app.post('/cadastro', (request, response) => {
    let Nome = request.body.Nome;
    let Sobrenome = request.body.Sobrenome;
    let Empresa = request.body.Empresa;

    db.query('INSERT INTO Clientes (Nome, Sobrenome, Empresa) VALUES (?,?,?)', [Nome, Sobrenome, Empresa], (() => {
        console.log('Cadastro realizado com sucesso');
    }));
    // response.render('cadastro',{});
});