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
  - Para comunicação com o MongoDB utilizei o Mongoose

## Como podemos preparar o ambiente para o projeto?

### Mongo DB

- No terminal: `docker run --name mongonode -p 27017:27017 -d -t mongo`
- A partir desse momento o mongoDB passará a responder na porta 27017 da máquina e estará pronto para uso

#### Configuração do ORM(mongoose):
