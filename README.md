# Projeto - API Rest - Market Place

- Este projeto pretende criar um backend com NodeJS numa arquitetura Rest para servir a um Market Place. Possibilidades que essa API fornece:
- Cadastrar usuários(User)
- Fornecer JWT para este usuário
- Cadastrar produto(ADS)
- Possubilitar a compra(Purchase)
- Confirmação de compras entre outras possbilidades menos importantes

## Dependências:

- O expressJs é utilizado como Middleware
- O banco utilizado é o MongoDB
- ORM utilizado: Mongoose

## Como podemos preparar o ambiente para o projeto?

### Clonando o projeto

- No terminal: `git clone https://github.com/llucasmota/marketplace.git`

### Instalando as dependências:

- Na raiz do projeto: `npm install`

### Start do projeto

- No terminal; `yarn start`

### Mongo DB

- No terminal: `docker run --name mongonode -p 27017:27017 -d -t mongo`
- A partir desse momento o mongoDB passará a responder na porta 27017 da máquina e estará pronto para uso
