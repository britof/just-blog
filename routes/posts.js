const express = require('express');
const router = express.Router();

router.get('/posts', (req, res) => {
    res.json({
        title: 'My first post',
        content: 'Content of the post',
        author: 'Joás de Brito'
    });
});

module.exports = router;