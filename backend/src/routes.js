const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

/* Desacoplando o modo de rota do express em uma nova variavel*/
const routes = express.Router();

//***********     Validação usando a biblioteca Celebrate     *******/
routes.post('/sessions', celebrate({
    [Segments.BODY]: Joi.object().keys({
        id: Joi.string().required(),
    }),
}),SessionController.create);

/** Rotas do tipo: GET, POST e DELETE */
//ROTA 1
routes.get('/ongs', OngController.index);
//ROTA 2 - ONG Create
routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2),
    })
}), OngController.create);

routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown(),
}),ProfileController.index);

//Validando authorization (ONG) e os campos do caso
routes.post('/incidents', celebrate({
    [Segments.BODY]: Joi.object().keys({
        title: Joi.string().required(),
        description: Joi.string().required(),
        value: Joi.number().required(),
    }),
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown(),
}),IncidentController.create);

routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
    })
}), IncidentController.index);

routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    }),
}),IncidentController.delete);

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