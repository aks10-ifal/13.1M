
const express = require('express');
const app = express();
const PORT = 3000;
const routes = require('./routesbookxd');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(routes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta: ${PORT} http://localhost:${PORT}`);
});
