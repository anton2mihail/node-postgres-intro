const knex = require('knex')({
  client: 'pg',
  connection: 'postgres://development:dev@localhost:5432/testDB'
});

const {
  0: fname,
  1: lname,
  2: date
} = process.argv.slice(2);


knex('famous_people')
  .insert({
    first_name: fname.toString(),
    last_name: lname.toString(),
    birthdate: new Date(date)
  });