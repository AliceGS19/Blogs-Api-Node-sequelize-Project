const express = require('express');
const { error } = require('./middlewares');
const root = require('./controllers/root');

const app = express();

app.use(express.json());

app.use('/', root);

app.use(error);

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
