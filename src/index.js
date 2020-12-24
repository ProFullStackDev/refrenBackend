const app = require('./app');
const port = process.env.PORT || 3000;

// app running on the available port
app.listen(port, () => {
  console.log('Server is up on port', +port);
});
