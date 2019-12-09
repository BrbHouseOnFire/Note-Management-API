let path = require("path");
let router = require("express").Router();

router.get("/notes", function(req, res) {
    console.log("route: html notes");
    res.sendFile(path.join(__dirname, "../notes.html"));
});

router.get("*", function(req, res) {
    console.log("route: *");
    res.sendFile(path.join(__dirname, "../index.html"));
});

module.exports = router;


