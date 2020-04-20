// * isPyramidWord Exercise controller * //
// call the packages we need
const express = require('express');
let router = express.Router();
let isPyramidWord = require('./isPyramidWord');

router.get('/:word', (req, res) => {
    const results = isPyramidWord(req.params.word);
    res.json({ results });
});

// test route GET http://localhost:8080/api
router.get('/', function (req, res) {
    res.json({
        Instructions:
            'To determine if a word is a pyramid enter the word you want to test in the URL. Example: http://localhost:8080/<word_here>',
    });
});

module.exports = router;
