const express = require ('express'); //importando o framework express
const cors = require ('cors'); //recurso de segurança de navegadores da web modernos...
const routes = require('./routes');//importar as rotas
const {errors} = require('celebrate');//tratamento de erros Celebrete

const app = express();

app.use(cors());
/** função para a aplicaçao saber interpretar os dados json recebidos */
app.use(express.json());
//Sempre lembrar de usar a rota nova apos o express.json
app.use(routes);
app.use(errors());

module.exports = app;