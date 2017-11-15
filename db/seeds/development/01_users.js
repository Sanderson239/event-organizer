
exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function () {
      return knex("users").insert([
        {
          id: 1,
          name: 'Stephen Anderson',
          email: 'something@mail.com',
          image_url: 'http://placekitten.com/200/300'
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
    ]).then( () => {
        return knex.raw("SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));");
      });
    });
};
