const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const users = require('./api/users');

app.use('/api/users', users);

app.listen(PORT, () => { console.log("Listening on ", PORT) });