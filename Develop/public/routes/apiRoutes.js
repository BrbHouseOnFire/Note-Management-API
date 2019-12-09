const router = require("express").Router();
const path = require('path');
const fs = require('fs');


router.get('/notes', (req, res) => {
        console.log("route: api get notes");
        fs.readFile(path.join(__dirname, '../../db/db.json'), (err,data)  => {
        res.json(JSON.parse(data));
    });
});


router.post('/notes', (req, res) => {
    console.log("route: api post notes");
    fs.readFile(path.join(__dirname, '../../db/db.json'), (err,data)  => {
        let notes = JSON.parse(data);
        let currentNote = req.body;
        // Set ID for notes
        if(notes.length === 0){
            currentNote.id = 1;
        } 
        else {
            currentNote.id = notes[notes.length - 1].id + 1;
        }


        notes.push(currentNote);
        fs.writeFile(path.join(__dirname, '../../db/db.json'), JSON.stringify(notes), (err) => {
            if (err) throw err;
            console.log('note saved');
        });
    });
    res.send('post sent');
});


// DELETE data by ID
router.delete("/notes/:id", function(req, res) {
    console.log("route: api delete by id");
    fs.readFile(path.join(__dirname, '../../db/db.json'), 'utf8', (err,data)  => {
        if (err) throw err;
        const filtered = JSON.parse(data).filter(item => item.id !== parseInt(req.params.id));
        fs.writeFile(path.join(__dirname, '../../db/db.json'), JSON.stringify(filtered), (err) => {
            if (err) throw err;
        });
    });
    res.send('Note removed successfully');
});


module.exports = router;