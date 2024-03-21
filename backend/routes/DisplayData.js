const express = require('express');
const router = express.Router();
router.post("/mediData", (req, res) => {
    try {
        res.send([global.medi_items, global.medi_items_Category])


    } catch (error) {
        console.error(error.message)
        res.send("server error")

    }
})
module.exports = router;