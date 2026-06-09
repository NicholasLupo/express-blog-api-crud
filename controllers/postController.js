const posts = require('../data/posts')

const index = (req, res) => {
    let filteredPost = posts;

    if (req.query.tags) {
        filteredPost = posts.filter(post => post.tags.includes(req.query.tags))
        return res.json(filteredPost);
    }

    res.json(posts)
}

module.exports = { index };