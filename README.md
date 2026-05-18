# 🗄️ Gerenciamento de Usuários com PostgreSQL

> Aplicação web para cadastro, listagem e exclusão de usuários, com frontend em HTML/CSS/JavaScript e backend em Node.js com Express conectado ao PostgreSQL.

---

## 📌 Sobre o Projeto

Esta aplicação permite cadastrar, listar e excluir usuários em um banco de dados PostgreSQL. O frontend realiza requisições HTTP ao backend via Fetch API, e os dados são exibidos dinamicamente em uma tabela, sem recarregamento de página.

A atividade foi desenvolvida como parte das práticas acadêmicas da **FATEC Jacareí – Faculdade de Tecnologia de Jacareí**, no curso de **Desenvolvimento de Software Multiplataforma (DSM)**.

---

## 🚀 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/) — Ambiente de execução JavaScript no servidor
- [Express v5](https://expressjs.com/) — Framework web para Node.js
- [PostgreSQL](https://www.postgresql.org/) — Banco de dados relacional
- [node-postgres (pg)](https://node-postgres.com/) — Cliente PostgreSQL para Node.js
- [dotenv](https://github.com/motdotla/dotenv) — Gerenciamento de variáveis de ambiente
- HTML5 + CSS3 + JavaScript (Fetch API) — Interface e comunicação com o backend

---

## 📁 Estrutura do Projeto

```
app/
├── public/
│   ├── assets/
│   │   ├── css/
│   │   │   └── main.css              # Estilos da aplicação
│   │   └── js/
│   │       └── main.js               # Lógica do frontend (Fetch API)
│   └── pages/
│       └── index.html                # Página principal
├── src/
│   ├── database/
│   │   ├── connection.js             # Configuração do Pool de conexão com o PostgreSQL
│   │   └── users.js                  # Queries SQL (listar, criar, deletar usuários)
│   ├── routes/
│   │   └── user.routes.js            # Rotas da API de usuários
│   └── server.js                     # Arquivo principal do servidor Express
├── .env                              # Variáveis de ambiente
├── .gitignore
├── package.json
└── package-lock.json
```

---

## 🔀 Rotas da API

| Método | Rota          | Descrição                  |
|--------|---------------|----------------------------|
| GET    | `/`           | Página principal           |
| GET    | `/assets/*`   | Arquivos estáticos         |
| GET    | `/users`      | Lista todos os usuários    |
| POST   | `/users`      | Cadastra um novo usuário   |
| DELETE | `/users/:id`  | Remove um usuário pelo ID  |

---

## ✨ Funcionalidades

- Cadastro de usuários com nome e e-mail
- Listagem de usuários em tabela, ordenados por nome
- Exclusão de usuários com botão de ação na tabela
- Feedback visual de estados: salvando, sucesso e erro
- Limpeza do formulário com botão dedicado
- Suporte a conexão local e via `DATABASE_URL` (ex: Render)

---

## 🗃️ Banco de Dados

A aplicação utiliza PostgreSQL com a seguinte estrutura de tabela:

```sql
CREATE TABLE users (
  id_user SERIAL PRIMARY KEY,
  name    VARCHAR(255) NOT NULL,
  email   VARCHAR(255) NOT NULL
);
```

> Execute esse comando no seu banco antes de iniciar a aplicação.

---

## 🔧 Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```env
PORT=3003  # ou qualquer outra porta de sua preferência

POSTGRES_HOST=localhost
POSTGRES_USER=postgres
POSTGRES_PASSWORD=sua_senha
POSTGRES_DB=nome_do_banco
POSTGRES_PORT=5432

# Opcional: conexão via URL (ex: Render, Supabase)
# DATABASE_URL=postgresql://user:password@host/database?sslmode=require
```

> ⚠️ O arquivo `.env` já está no `.gitignore` e **não deve ser versionado**.

---

## ⚙️ Como Executar

### Pré-requisitos

- [Node.js](https://nodejs.org/) instalado (versão 14 ou superior)
- [PostgreSQL](https://www.postgresql.org/) instalado e rodando
- npm (incluído com o Node.js)

### Passo a passo

```bash
# 1. Clone o repositório
git clone https://github.com/gm-paiva/Gerenciamento-de-Usuarios-com-PostgreSQL.git

# 2. Acesse a pasta do projeto
cd app

# 3. Instale as dependências
npm install

# 4. Configure as variáveis de ambiente
# Crie o arquivo .env conforme a seção acima

# 5. Crie a tabela no banco de dados
# Execute o SQL da seção "Banco de Dados" no seu PostgreSQL

# 6a. Inicie o servidor (produção)
npm start

# 6b. Inicie o servidor (desenvolvimento com hot reload)
npm run dev
```

Acesse no navegador: [http://localhost:3003](http://localhost:3003)

---

## 📚 Contexto Acadêmico

| Campo          | Informação                                        |
|----------------|---------------------------------------------------|
| 🏫 Instituição | FATEC Jacareí                                     |
| 🎓 Curso       | Desenvolvimento de Software Multiplataforma – DSM |
| 📖 Disciplina  | Desenvolvimento Web I                            |
| 👨‍🏫 Professor(a) | [Arley Ferreira de Souza](https://github.com/arleysouza)                          |
| 📅 Semestre    | 1º Semestre - 2026                       |

---

## 👤 Autor

Desenvolvido por **[Guilherme Matos Paiva](https://github.com/gm-paiva)**.

---

## 📄 Licença

Este projeto está sob a licença MIT.
