process.env.NODE_ENV = 'test';

const assert = require( 'chai' ).assert;
const {
  suite,
  test
} = require( 'mocha' );
const knex = require( '../knex.js' );
const { addDatabaseHooks } = require( './utils.js' )
suite( 'users migrations', addDatabaseHooks( () => {
  test( 'users columns', ( done ) => {
    knex( 'users' ).columnInfo()
    .then( ( actual ) => {
      const expected = {
        user_id: {
          type: 'integer',
          maxLength: null,
          nullable: false,
          defaultValue: 'nextval(\'users_user_id_seq\'::regclass)'
        },

        name: {
          type: 'character varying',
          maxLength: 255,
          nullable: false,
          defaultValue: '\'\'::character varying'
        },

        email: {
          type: 'character varying',
          maxLength: 255,
          nullable: false,
          defaultValue: null
        },

        image_url: {
          type: 'character varying',
          maxLength: 255,
          nullable: false,
          defaultValue: "'http://placekitten.com/200/300'::character varying"
        },
      };

      for ( const column in expected ) {
        assert.deepEqual(
          actual[ column ],
          expected[ column ],
          `Column ${column} is not the same`
        );
      }
      done();
    })
    .catch( ( err ) => {
      done( err );
    });
  });
}));
