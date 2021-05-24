const express = require('express');
const bodyParser = require('body-parser');

const postsRoute = require('./routes/posts');
const userRoute = require('./routes/user');
const commentsRoute = require('./routes/comments');
const imageRoute = require('./routes/images');
const tripsRoute = require('./routes/trips');

const app = express();

app.use(bodyParser.json());
app.use('/uploads', express.static('uploads'));

app.use("/posts", postsRoute);
app.use("/user", userRoute);
app.use("/comments", commentsRoute);
app.use("/images", imageRoute);
app.use("/employee", postsRoute);
app.use("/trips", tripsRoute);

module.exports = app;
