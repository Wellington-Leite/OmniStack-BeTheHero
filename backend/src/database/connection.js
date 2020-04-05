const knex = require('knex'); //importando knex
const configuration = require('../../knexfile');//importando as configuraçoes do knexfile contido na pasta raiz

//Escolhendo a configuração de teste ou desenvolvimento
const config = process.env.NODE_ENV =='test' ? configuration.test : configuration.development;

//passando a conexão escolhida para knex
const connection = knex(config);

//exportando a conexão com o BD para ser utilizado dentro dos arquivos que necessitam de uma conexão com BD
module.exports = connection;
