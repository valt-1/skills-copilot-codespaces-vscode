// Create web server
const express = require('express');
const app = express();
const port = 3000;
// Create comments array
const comments = [
    "This is the first comment",
    "This is the second comment",
    "This is the third comment"
];
// Create a GET route that returns the comments
app.get('/comments', (req, res) => {
    res.send(comments);
});
// Start the server
app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});
// Run the server with the command node comments.js
// Access the server at http://localhost:3000/comments
// The server will return the comments array
// ["This is the first comment","This is the second comment","This is the third comment"]