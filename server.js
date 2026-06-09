const express = require('express');
const app = express();
const port = 3000;

const postRouter = require('./routers/post');

app.use(express.static('public'))

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
})

app.get('/', (req, res) => {
    res.send('Hello')
})

app.use('/post', postRouter);