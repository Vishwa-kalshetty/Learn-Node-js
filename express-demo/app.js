const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Welcome to Home");
});

app.get('/courses/api', (req, res) => {
    res.send(["Course 1", "Course 2", "Course 3"]);
});

app.listen(3000, () => console.log("Listning on port 3000..."));

