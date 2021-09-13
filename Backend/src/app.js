const express = require("express");
const app = express();
const mysql = require('mysql');
const cors = require('cors');
// // const handlebars = require("express-handlebars");
const bodyParser = require('body-parser');
const pedidos = require('./models/Pedidos/Pedidos.js');
const mongoose = require('mongoose');
const { json } = require("body-parser");
const { response } = require("express");



// //Config
// //Template Engine
//     // app.engine('handlebars', handlebars({defaultLayout: 'main'}))
//     // app.set('view engine', 'handlebars')

//Body Parser
app.use(bodyParser.urlencoded({extended: false}))
// app.use(bodyParser.json)
app.use(cors())

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "obramaps"
})

//Rotas
const novo_Pedido = mongoose.model('pedidos');
app.post("/processamento_pedidos", function(req, res){
    new novo_Pedido({
        nome_cliente: req.body.nome_cliente,
        endereco: req.body.endereco,
        email: req.body.email, 
        telefone: req.body.telefone,
        titulo: req.body.titulo,
        descricao: req.body.descricao
    }).save().then(function(){
        res.redirect('http://localhost:3000/pedidos')
    }).catch(function(erro){
        res.send("Pedido não cadastrado     " + erro)
    })
});

app.get("/login",function(req,res){
    res.redirect('http://localhost:3000/main');
})


app.post("/login", function(req,res){
    conn.query(
        "SELECT * FROM usuarios WHERE email = ? AND senha = ?", [req.body.email, req.body.senha], (err, result) => {
            if(err){
                res.send({err: err})
            }
            if(result.length > 0){
                res.redirect("http://localhost:3000/main");
            } 
            else{
                res.send({messagem: "usuario ou senha incorretos"})
            }
        }
    )

    // connection.query('SELECT * FROM usuarios WHERE email = ? AND senha = ?', [req.body.email, req.body.senha], function(error, results, fields) {
    //     if(err){
    //         console.log(err);
    //     }
    //     else{
    //         if (results){
    //             res.redirect('http://localhost:3000/main');
    //         }    
    //         else{
    //             res.redirect('http://localhost:3000/');
    //         }   
    //     }  
    // });
})



app.get('/casos', (req, res) => {
    const sql = "SELECT * FROM casos"
    conn.query(sql, (error, result) => {
        if (error) {
            res.json({
                "message": "Erro na conexão com o banco de dados!"
            })
        } else {
            res.status(201).json(result)
        }
    })
})

app.get('/pedidos', async (req, res) => {
    try {
        const result = await pedidos.find()
        return res.json(result)
    } catch (err) {
        return res.status(400).send({ error: 'Erro na listagem dos pedidos!      ' + err })
    }
})

app.get('/quantidade_produtos', (req, res) => {
    const sql = "SELECT produtos.descricao, quantidade.quantidade FROM produtos INNER JOIN quantidade ON produtos.id=quantidade.id"
    conn.query(sql, (error, result) => {
        if (error) {
            res.json({
                "message": "Erro na conexão com o banco de dados!"
            })
        } else {
            res.status(201).json(result)
        }
    })
})


app.listen(5333);


