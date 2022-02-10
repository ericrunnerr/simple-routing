const express = require('express');
const router = express.Router(); // utlizando metodo router do express

router.get('/users/products', (req, res) => {
    res.send('products of every user')
});

module.exports = router