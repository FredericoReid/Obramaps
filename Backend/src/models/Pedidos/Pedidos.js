const mongoose  = require('mongoose');
const db = require('../../conn/conn');

const Pedidos = mongoose.Schema({
    nome_cliente: {
        type: String
    },

    endereco: {
        type: String
    },

    email: {
        type: String
    },

    telefone: {
        type: Number
    },

    titulo: {
        type: String
    },

    descricao: {
        type: String
    },

    informacao_extra: {
        type: String
    },

})

// mongoose.model('pedidos', Pedidos)

const Pedidos1 = mongoose.model('pedidos', Pedidos);

module.exports = Pedidos1;