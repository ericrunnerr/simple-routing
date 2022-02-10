const express = require('express');
const app = express();
const port = 3000;
const userObjects = require('./routes/users');
const productObjects = require('./routes/products')

app.get('/', (req, res) => {
    res.send("Home Page")
}); // homepage da aplicação

app.use(userObjects); // creio eu que ta roteando do users
app.use(productObjects) // vertente dentro de users

app.listen(port, () => {
    console.log(`listening on port ${port}.`)
})
