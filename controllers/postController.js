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

const store = (req, res) => {
    const newId = posts[posts.length - 1].id + 1;

    const newPost = {
        id: newId,
        title: req.body.title,
        content: req.body.content,
        image: req.body.image,
        tags: req.body.tags
    }

    posts.push(newPost)

    res.status(201)
    res.json(newPost)

}

const update = (req, res) => {
    const id = parseInt(req.params.id)

    const post = posts.find(post => post.id === id);

    if (!post) {
        return res.status(404).json({ error: 'Post not found' });
    }

    post.title = req.body.title || post.title;
    post.content = req.body.content || post.content;
    post.image = req.body.image || post.image;
    post.tags = req.body.tags || post.tags;

    res.json(post)
}

const destroy = (req, res) => {
    const id = parseInt(req.params.id)

    const post = posts.find(post => post.id === id);

    if (!post) {
        return res.status(404).json({ error: 'Post not found' });
    }

    posts.splice(posts.indexOf(post), 1);

    res.sendStatus(204)
}

module.exports = { index, show, destroy, store, update };