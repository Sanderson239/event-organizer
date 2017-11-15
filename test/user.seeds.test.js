'use strict';

process.env.NODE_ENV = 'test';

const assert = require('chai').assert;
const { suite, test } = require('mocha');
const knex = require('../knex');
const { addDatabaseHooks } = require('./utils')

suite('users seeds', addDatabaseHooks(() => {
  test('users rows', (done) => {
    knex('users').orderBy('id', 'ASC')
    .then((actual) => {
      const expected = [{
        id: 1,
        name: 'Stephen Anderson',
        email: 'something@mail.com',
        image_url: 'http://placekitten.com/200/300',
      },
      {
        id: 2,
        name: 'Lee',
        email: 'lee@mail.com',
        image_url: 'http://placekitten.com/200/300',
      },
      {
        id: 3,
        name: 'Meghan',
        email: 'meghan@mail.com',
        image_url: 'http://placekitten.com/200/300',
      },
      {
        id: 4,
        name: 'Will',
        email: 'will@mail.com',
        image_url: 'http://placekitten.com/200/300',
      },
      {
        id: 5,
        name: 'Bell',
        email: 'bell@mail.com',
        image_url: 'http://placekitten.com/200/300',
      },
      {
        id: 6,
        name: 'Thomas',
        email: 'thomas@mail.com',
        image_url: 'http://placekitten.com/200/300',
      },
    ];

    for (let i = 0; i < expected.length; i++) {
      assert.deepEqual(
        actual[i],
        expected[i],
        `Row id=${i + 1} not the same`
      );
    }

    done();
  })
  .catch((err) => {
    done(err);
  });
});
}));
