const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./src/routes');
const PORT = 3000;

const app = express();

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

routes(app);

app.listen(PORT, () =>{
  console.log(`App running on port: ${PORT}`);
});
