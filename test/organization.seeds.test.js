'use strict';

process.env.NODE_ENV = 'test';

const assert = require('chai').assert;
const { suite, test } = require('mocha');
const knex = require('../knex');
const { addDatabaseHooks } = require('./utils')

suite('organizations seeds', addDatabaseHooks(() => {
  test('organizations rows', (done) => {
    knex('organizations').orderBy('id', 'ASC')
    .then((actual) => {
      const expected = [
        {
          id: 1,
          name: 'BBQ Fan Club',
          description: 'The best resource for finding the best BBQ in the city!',
          created_at: '2017-11-16 12:23:00 UTC',
          location: 'Hong Kong',
          profile_image_url: 'http://placekitten.com/200/300',
          cover_image_url: 'http://placekitten.com/200/300'
        },
        {
          id: 2,
          name: 'JavaScript Club',
          description: 'Join us and we will code together!',
          created_at: '2017-11-16 12:23:00 UTC',
          location: 'San Francisco',
          profile_image_url: 'http://placekitten.com/200/300',
          cover_image_url: 'http://placekitten.com/200/300',
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
