const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

/* Desacoplando o modo de rota do express em uma nova variavel*/
const routes = express.Router();

routes.post('/sessions', SessionController.create);

/** Rotas do tipo: GET, POST e DELETE */
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.index);
routes.delete('/incidents/:id', IncidentController.delete);

/* Exportar as rotas deixando-as disponiveis para aplicação */
module.exports = routes;








 /******   ANOTAÇÕES   ****
  * Tipos de parâmetros:
  * 
  * O request é usado para acessar a todos os parametros
  * O resonse é usado para responder o cliente
  * 
  * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
  * Route Params: Parâmentros ultilizados para identificar recursos "users/1"
  * Request Body: Corpo da requisição, utilizado para criar ou altarar recursos
  * 
  */

 /**
  * SQL: MySQL, SQLite, PostgeSQL, Oracle, Microsoft SQL Server
  * NoSQL: MongoDB, CouchDB, etc
  */
 
  /** Duas formas de se comunicar com BD, usando o driver do BD ou Query Builder
   * Driver: SELECT * FROM users
   * Query Builder: table('users').select('*').where() - por exemplo será usado o KNEX.JS, o mais utilizado dentro no NODE.JS
   */