'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary();
    table.string('name').notNullable().defaultTo('');
    table.string('email').notNullable().unique();
    table.string('image_url').notNullable().defaultTo('http://placekitten.com/200/300');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
