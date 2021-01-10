const path = require("path");
const router = require("express").Router();

// get the api/ notes from the noe html

router.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});

//everything else is from index
// *= all
router.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = router;