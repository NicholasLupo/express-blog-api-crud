const posts = require('../data/posts')

const index = (req, res) => {
    let filteredPost = posts;

    if (req.query.tags) {
        filteredPost = posts.filter(post => post.tags.includes(req.query.tags))
        return res.json(filteredPost);
    }

    res.json(posts)
}

const show = (req, res) => {
    const id = parseInt(req.params.id)

    const post = posts.find(post => post.id === id);

    if (!post) {
        return res.status(404).json({ error: 'Post not found' });
    }

    res.json(post)
}

module.exports = { index, show };