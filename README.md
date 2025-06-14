﻿# Vendas-to-Mongo

# 🛒 API de Vendas - Node.js + Express + MongoDB

Este é um projeto de API RESTful para gerenciamento de vendas, desenvolvido com **Node.js**, **Express** e **MongoDB (Mongoose)**. Ele permite registrar, consultar, atualizar e deletar vendas realizadas ao longo do ano, com detalhes como mês, ano, valor e produtos vendidos.

---

## 🚀 Tecnologias utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [CORS](https://www.npmjs.com/package/cors)

---

## 📁 Estrutura de pastas
ativ-10/
├── models/
│ └── Venda.js # Schema da venda
├── routes/
│ └── vendaRoutes.js # Rotas da API
├── .env # Variáveis de ambiente
├── app.js # Arquivo principal
├── package.json # Configurações do projeto

---

## ⚙️ Como executar

### Pré-requisitos

- Node.js instalado
- MongoDB local ou Atlas em funcionamento

### Instalação

1. Clone o repositório:
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio

Instale as dependências:
npm install

Configure o arquivo .env:
MONGO_URI=mongodb://localhost:27017/seu_banco_de_dados

Inicie o servidor:
npm start


A API estará disponível em http://localhost:3000.

🧪 Testes com Postman
Você pode testar a API utilizando o Postman. As principais rotas são:

  Método	      Rota	              Descrição
  GET	       /vendas	        Lista todas as vendas
  GET	       /vendas/:id	    Retorna venda por ID
  POST	     /vendas	          Cria uma nova venda
  PUT	      /vendas/:id	      Atualiza uma venda existente
  DELETE	  /vendas/:id	      Remove uma venda
