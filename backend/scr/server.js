const app = require('./app');
require('dotenv').config();

app.listen(process.env.PORT, () => {
  console.log(`escutando a porta ${process.env.PORT}`)  
});
module.exports = app;
