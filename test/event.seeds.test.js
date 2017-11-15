'use strict';

process.env.NODE_ENV = 'test';

const assert = require('chai').assert;
const { suite, test } = require('mocha');
const knex = require('../knex');
const { addDatabaseHooks } = require('./utils')

suite('events seeds', addDatabaseHooks(() => {
  test('events rows', (done) => {
    knex('events').orderBy('id', 'ASC')
    .then((actual) => {
      const expected = [{
        id: 1,
        name: 'event 1',
        date: '2017-11-16 12:23:00 UTC',
        location: 'Hong Kong',
        price: 400,
        image_url: 'http://placekitten.com/200/300'
      },
      {
        id: 2,
        name: 'event 2',
        date: '2017-11-16 12:23:00 UTC',
        location: 'San Francisco',
        price: 500,
        image_url: 'http://placekitten.com/200/300',
      },
      {
        id: 3,
        name: 'event 3',
        date: '2017-11-16 12:23:00 UTC',
        location: 'Seattle',
        price: 100,
        image_url: 'http://placekitten.com/200/300',
      },
      {
        id: 4,
        name: 'event 4',
        date: '2017-11-16 12:23:00 UTC',
        location: 'Beijing',
        price: 0,
        image_url: 'http://placekitten.com/200/300',
      },
      {
        id: 5,
        name: 'event 5',
        date: '2017-11-16 12:23:00 UTC',
        location: 'New York',
        price: 0,
        image_url: 'http://placekitten.com/200/300',
      },
      {
        id: 6,
        name: 'event 6',
        date: '2017-11-16 12:23:00 UTC',
        location: 'LA',
        price: 0,
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
