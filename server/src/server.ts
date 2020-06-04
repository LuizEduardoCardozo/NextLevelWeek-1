import path from 'path'

import express from 'express';
import routes from './routes';
import connection from './database/connection';

const app = express();
app.use(express.json());
app.use(routes);
app.use("/uploads", express.static( path.resolve(__dirname, '..', 'uploads') ) );

app.listen(3000);