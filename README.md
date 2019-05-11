# Projeto - API Rest - Market Place

- Este projeto pretende criar um backend com NodeJS numa arquitetura Rest para servir a um Market Place, o projeto foi desenvolvido durante o terceiro módulo do Bootcamp da RocketSeat.

#### Possibilidades que essa API fornece:

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

### Sobre o desafio lançado no fim do módulo:

- Descrição:
- Armazene as intenções de compra (Purchase) no MongoDB criando um Model e salvando
  os dados da purchase no método store do PurchaseController;
- Crie uma nova rota para o vendedor aceitar uma intenção de compra declarando o item
  como vendido e a partir desse momento o anúncio não deve ser mais exibido nas
  listagens e não deve ser mais possível realizar uma intenção de compra para esse anúncio;
- O Ad deve possuir um campo adicional chamado purchasedBy que armazena o ID da
  Purchase que o vendedor aceitou, caso esse campo esteja presente, quer dizer que o
  anúncio foi vendido;

#### Criei um desafio pra mim:

##### Com intuito de me desafiar criei um desafio simples, mas serviu para ir além do que foi pedido e era algo necessário:

- Crie uma rota para que o vendedor possa visualizar todas as vendas já realizadas e assim possa consultá-las sempre que necessário.
- Esta rota deve realizar algum tipo de tratamento para o caso do vendedor não possuir nenhuma venda
