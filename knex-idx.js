const knex = require('knex')({
  client: 'pg',
  connection: 'postgres://development:dev@localhost:5432/testDB'
});

const {
  0: fname
} = process.argv.slice(2);

knex('famous_people')
  .where({
    first_name: fname.toString()
  })
  .then(rows => {
    console.log(rows);
  }).then((res, rej) => {
    knex.destroy();
  });