'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('organizations', (table) => {
    table.increments('id').primary();
    table.string('name').notNullable().defaultTo('');
    table.text('description').notNullable().defaultTo('');
    table.string('created_at').notNullable().defaultTo('');
    table.string('location').notNullable().defaultTo('');
    table.string('profile_image_url').notNullable().defaultTo('http://placekitten.com/200/300');
    table.string('cover_image_url').notNullable().defaultTo('http://placekitten.com/200/300');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('organizations');
};
