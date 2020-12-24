const app = require('./app');
const port = 5000;

// app running on the available port
app.listen(port, () => {
  console.log('Server is up on port', +port);
});
