const pg = require("pg");

const client = new pg.Client({
  // connectionString: process.env.DATABASE_URL || ""
  user: process.env.PGUSER || process.env.USER,
  password: process.env.PGPASSWORD,
  host: process.env.PGHOST,
  database:process.env.PGDATABASE || process.env.USER,
  port: process.env.PGPORT,
});
console.log(process.env.DATABASE_URL);
client
  .connect()
  .then(() => console.log('connect'))
  .catch(e => console.log(`Error connecting to Postgres server:\n${e}`));

module.exports = client;
