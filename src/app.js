const express = require('express');
require('./db/mongoose');
const userRouter = require('./routes/userRoutes');
const cors = require('cors');
const app = express();

app.use(cors());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Methods',
    'GET,HEAD,OPTIONS,POST,PUT,PATCH,DELETE'
  );
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  next();
});
// req.body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// userRouter
app.use(userRouter);

module.exports = app;
