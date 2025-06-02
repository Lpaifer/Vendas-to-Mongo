const express = require('express');
const router = express.Router();
const Venda = require('../models/venda');

// GET todas as vendas
router.get('/', async (req, res) => {
  try {
    const vendas = await Venda.find();
    res.json(vendas);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET uma venda específica
router.get('/:id', getVenda, (req, res) => {
  res.json(res.venda);
});

// POST criar nova venda
router.post('/', async (req, res) => {
  const venda = new Venda({
    mes: req.body.mes,
    ano: req.body.ano,
    valor: req.body.valor,
    produtos: req.body.produtos
  });

  try {
    const novaVenda = await venda.save();
    res.status(201).json(novaVenda);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PUT atualizar venda
router.put('/:id', getVenda, async (req, res) => {
  if (req.body.mes != null) {
    res.venda.mes = req.body.mes;
  }
  if (req.body.ano != null) {
    res.venda.ano = req.body.ano;
  }
  if (req.body.valor != null) {
    res.venda.valor = req.body.valor;
  }
  if (req.body.produtos != null) {
    res.venda.produtos = req.body.produtos;
  }

  try {
    const vendaAtualizada = await res.venda.save();
    res.json(vendaAtualizada);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE remover venda
router.delete('/:id', getVenda, async (req, res) => {
  try {
    const deletada = await Venda.findByIdAndDelete(req.params.id);
    if (!deletada) {
      return res.status(404).json({ erro: 'Venda não encontrada' });
    }
    res.json({ mensagem: 'Venda deletada com sucesso' });
  } catch (error) {
    res.status(400).json({ erro: error.message });
  }
});

// Middleware para obter venda por ID
async function getVenda(req, res, next) {
  let venda;
  try {
    venda = await Venda.findById(req.params.id);
    if (venda == null) {
      return res.status(404).json({ message: 'Venda não encontrada' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.venda = venda;
  next();
}

module.exports = router;