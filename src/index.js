import express from 'express';
import cors from 'cors';
import { json } from 'body-parser';
import { createConnection } from 'mysql';
import events from './events';

const connection = createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'rootvi',
  database : 'employee'
});


connection.connect();

const port = process.env.PORT || 8080;

const app = express()
  .use(cors())
  .use(json())
  .use(events(connection));

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});