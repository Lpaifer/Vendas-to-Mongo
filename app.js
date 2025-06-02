require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const vendasRouter = require('./routes/vendas');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Rotas
app.use('/vendas', vendasRouter);

// Conexão com MongoDB
mongoose.connect(process.env.MONGODB_URI, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
})
.then(() => console.log('Conectado ao MongoDB'))
.catch(err => console.error('Erro ao conectar no MongoDB:', err));

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});