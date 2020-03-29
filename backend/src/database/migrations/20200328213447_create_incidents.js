
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function (table) {
        table.increments();//irar criar uma chave primaria auto incremento

        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();

        table.string('ong_id').notNullable();//chave estrangeira
        table.foreign('ong_id').references('id').inTable('ongs'); //referenciando a chave estrangeira
    });
};

exports.down = function(knex) {
  return knex.schema.dropTable('incidents');
};
