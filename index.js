const {
  Client
} = require("pg");
const settings = require("./settings");

const name = process.argv.slice(2).join();

const query = `SELECT * FROM famous_people
WHERE first_name= $1::text;`

const client = new Client({
  user: settings.user,
  password: settings.password,
  database: settings.database,
  host: settings.host,
  port: settings.port
});

function response(res) {
  let count = 1;
  res.rows.forEach(el => {
    console.log(`-${count}: ${el.first_name} ${el.last_name}, born '${el.birthdate.toDateString()}'`);
    count++;
  });
}

client.connect();

client.query(query, [name]).then((res, err) => {
  console.log(err ? err.stack : true);
  console.log(`Found ${res.rows.length} persons by the name ${name}`);
  response(res);
  client.end();
});