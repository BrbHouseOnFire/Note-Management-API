// =============================================================
// Office hours work Router 2?:
const router = require("express").Router();
const path = require('path');
const fs = require('fs');



router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "../../index.html"));
})

router.get('/api/notes', (req, res) => {
    // pull note data:
    // fs.readFile(__dirname + '../../../db/db.json', (err,data)  => {
    //     if (err) throw err;
    //     console.log("data: " + data); // why is the data a bunch of undefined stuff?
    //     // res.json(JSON.parse(data));
    // });

})

/* get the notes */
router.get('/notes', (req, res) => {
    // render page with pulled note data:
    res.sendFile(path.join(__dirname, "../../notes.html"));
});
router.post('/notes', (req, res) => {
  fs.readFile(__dirname + '../../../db/db.json', (err,data)  => {
      /* convert json data to array */
      let notes = JSON.parse(data);
      let newNote = req.body;
      notes.push(newNote);
      /* use normal write file to save to db.json */
      fs.writeFile(__dirname + './../db/db.json', JSON.stringify(notes), (err) => {
        if (err) throw err;
        console.log('note saved');
      });
    });
    res.send('post sent');
});
module.exports = router;