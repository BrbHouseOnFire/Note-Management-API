let path = require("path");
let router = require("express").Router();

// "/notes" responds with the notes.html file
router.get("/notes", function(req, res) {
    console.log("route: html notes");
    res.sendFile(path.join(__dirname, "../notes.html"));
    // res.sendFile(path.join(__dirname, "../../../notes.html"));
});
// All other routes respond with the index.html file
router.get("*", function(req, res) {
    console.log("route: *");
    res.sendFile(path.join(__dirname, "../index.html"));
});
// router.get("/indexjs", function(req, res) {
//     console.log("route: html indexjs")
//     res.send(path.join(__dirname + "../index.js"));
// })
// router.get("/stylescss", function(req, res) {
//     console.log("route: html stylecss")
//     res.send(path.join(__dirname + "../../css/styles.css"));
// })


module.exports = router;


