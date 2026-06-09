const express = require('express');
const router = express.Router();

// show
router.get('/:id', (req, res) => {
    res.send(`Show the post id: ${req.params.id}`)
})

// store
router.post('/', (req, res) => {
    res.send(`store a new post`)
})

// update
router.put('/:id', (req, res) => {
    res.send(`update a new post ${req.params.id}`)
})

//modify
router.patch('/:id', (req, res) => {
    res.send(`modify post ${req.params.id}`)
})

// destroy
router.delete('/:id', (req, res) => {
    res.send(`delete post ${req.params.id}`)
})

module.exports = router;