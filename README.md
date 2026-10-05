# Clínica Veterinária - API REST

API REST desenvolvida em Node.js para o gerenciamento de animais de uma clínica veterinária.

## Tecnologias utilizadas

- Node.js
- Express
- Nodemon
- Morgan
- Body-parser
- CORS
- MySQL
- Módulo mysql

## Estrutura do animal

O recurso `animal` possui os seguintes campos:

- `id`
- `nome`
- `especie`
- `responsavel`

## Como executar

1. Execute o arquivo `database.sql` no MySQL para criar o banco de dados e a tabela.

2. Instale as dependências do projeto:

```bash
npm install
```

3. Crie um arquivo `.env` na raiz do projeto seguindo o modelo do arquivo `.env.example` e informe os dados da sua conexão com o MySQL.

4. Inicie a aplicação:

```bash
npm start
```

A API será executada em:

`http://localhost:3000`

## Rotas

- `GET /animal` - lista todos os animais.
- `GET /animal/:id` - busca um animal pelo ID.
- `POST /animal` - cadastra um novo animal.
- `PUT /animal/:id` - atualiza um animal.
- `DELETE /animal/:id` - exclui um animal.

## Exemplo de JSON

Para cadastrar ou atualizar um animal:

```json
{
  "nome": "Mel",
  "especie": "Cachorro",
  "responsavel": "Ana"
}
```

As rotas podem ser testadas utilizando o Postman.