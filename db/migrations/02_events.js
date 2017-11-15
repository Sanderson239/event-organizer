'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('events', (table) => {
    table.increments('id').primary();
    table.string('name').notNullable().defaultTo('');
    table.string('date').notNullable().defaultTo('');
    table.string('location').notNullable().defaultTo('');
    table.integer('price').notNullable().defaultTo(0);
    table.string('image_url').notNullable().defaultTo('http://placekitten.com/200/300');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('events');
};
