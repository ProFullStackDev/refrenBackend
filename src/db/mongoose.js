const mongoose = require('mongoose');

// Db connection pool
const connectionURL =
  'mongodb+srv://Surya:surya007@cluster0-bwfkc.mongodb.net/Refren?retryWrites=true&w=majority';

mongoose.connect(connectionURL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  autoIndex: true,
});
