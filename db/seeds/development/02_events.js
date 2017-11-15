
exports.seed = function(knex, Promise) {
  return knex('events').del()
    .then(function () {
      return knex("events").insert([
        {
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
    ]).then( () => {
        return knex.raw("SELECT setval('events_id_seq', (SELECT MAX(id) FROM events));");
      });
    });
};
