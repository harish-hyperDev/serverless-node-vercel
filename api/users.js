const express = express();
const app = express();

app.get('/', (req, res) => {
    try {
        res.json({ message: "Hello" })
    } catch {}
})

module.exports = app;