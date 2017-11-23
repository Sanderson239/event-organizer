
exports.seed = function(knex, Promise) {
  return knex('organizations').del()
    .then(function () {
      return knex("organizations").insert([
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
    ]).then( () => {
        return knex.raw("SELECT setval('organizations_id_seq', (SELECT MAX(id) FROM organizations));");
      });
    });
};
