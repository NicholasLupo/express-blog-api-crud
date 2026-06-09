const express = require('express');
const router = express.Router();

const postController = require('../controllers/postController')

// index
router.get('/', postController.index);

// show
router.get('/:id', postController.show)

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
router.delete('/:id', postController.destroy)

module.exports = router;