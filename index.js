const express = require('express');
const router = express.Router();
const PORT = process.env.PORT || 3000;
const users = require('./api/users');

app.use('/api/users', users);

app.listen(PORT, () => { console.log("Listening on ", PORT) });