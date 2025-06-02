const mongoose = require('mongoose');

const VendaSchema = new mongoose.Schema({
  mes: {
    type: String,
    required: true,
    enum: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 
           'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
  },
  ano: {
    type: Number,
    required: true
  },
  valor: {
    type: Number,
    required: true
  },
  produtos: [{
    nome: String,
    quantidade: Number,
    valorUnitario: Number
  }]
});

module.exports = mongoose.model('Venda', VendaSchema);