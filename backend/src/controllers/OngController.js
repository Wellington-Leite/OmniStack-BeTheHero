const crypto = require('crypto');
//importando a conexão com BD
const connection = require('../database/connection');

module.exports = {
    /** Rota 1 GET */
    async index (request, response) {
        const ongs = await connection('ongs').select('*'); //await - aguardar
    
        return response.json(ongs);
    },
    /** Rota 2 POST */
    async create(request, response){
    //pegar respectivamente cada dado contido no JSON enviado pelo corpo da requisição
    const { name, email, whatsapp, city, uf } = request.body; 
    //Criando o id da ONG usando o pacote crypto (contem um metodo para gerar carateres aleatorios)
    const id = crypto.randomBytes(4).toString('HEX');//esta contido na doc. do NODE
    //inserindo os dados dentro do BD
    await connection('ongs').insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf
    })
    return response.json({id});
    }
};