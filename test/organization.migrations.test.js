process.env.NODE_ENV = 'test';

const assert = require( 'chai' ).assert;
const {
  suite,
  test
} = require( 'mocha' );
const knex = require( '../knex.js' );
const { addDatabaseHooks } = require( './utils.js' )
suite( 'organizations migrations', addDatabaseHooks( () => {
  test( 'organizations columns', ( done ) => {
    knex( 'organizations' ).columnInfo()
    .then( ( actual ) => {
      const expected = {
        id: {
          type: 'integer',
          maxLength: null,
          nullable: false,
          defaultValue: 'nextval(\'organizations_id_seq\'::regclass)'
        },

        name: {
          type: 'character varying',
          maxLength: 255,
          nullable: false,
          defaultValue: '\'\'::character varying'
        },

        description: {
          type: 'text',
          maxLength: null,
          nullable: false,
          defaultValue: '\'\'::text'
          },

        created_at: {
          type: 'character varying',
          maxLength: 255,
          nullable: false,
          defaultValue: '\'\'::character varying'
        },

        location: {
          type: 'character varying',
          maxLength: 255,
          nullable: false,
          defaultValue: '\'\'::character varying'
        },

        profile_image_url: {
          type: 'character varying',
          maxLength: 255,
          nullable: false,
          defaultValue: "'http://placekitten.com/200/300'::character varying"
        },

        cover_image_url: {
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
