const express = require('express');
const router = express.Router();

router.get('/comments/:postid', (req, res) => {
    res.json({
        author: 'some reader',
        content: 'Content of the comment',
        date: 'today/thismonth/2020'
    });
});

module.exports = router;