const knex = require('knex'); //importando knex
const configuration = require('../../knexfile');//importando as configuraçoes do knexfile contido na pasta raiz

//passando a conexão de desenvolvimento para knex
const connection = knex(configuration.development);

//exportando a conexão com o BD para ser utilizado dentro dos arquivos que necessitam de uma conexão com BD
module.exports = connection;
