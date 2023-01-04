const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    try {
        res.json({ message: "Hello" })
    } catch(error) {
        console.error(error)
        res.status(500).send("Server error")
    }
})

module.exports = router;