const express = require('express');
const app = express();
const port = 3000;

const postRouter = require('./routers/post');

const logRequest = require('./middlewares/logRequest');
const notFound = require('./middlewares/notFound');
const serverError = require('./middlewares/serverError');

app.use(express.static('public'));

app.use(express.json());

app.get('/', logRequest, (req, res) => {
    res.send('Welcome')
})

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
})

app.use('/post', postRouter);

app.use(notFound)
app.use(serverError)