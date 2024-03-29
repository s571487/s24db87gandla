const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('grid', { title: 'Grid Display', query: {} });
});

module.exports = router;
