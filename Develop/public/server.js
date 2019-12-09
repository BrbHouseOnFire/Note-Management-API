const express = require("express");
const app = express();
const htmlRoutes = require("./routes/htmlRoutes");
const apiRoutes = require("./routes/apiRoutes");
// Initialize the app and create a port
const PORT = process.env.PORT || 3000;
// Set up body parsing, static, and route middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("../public"));

app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

// Start the server on the port
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));














// // my old stuff:
// let path = require("path");
// let express = require("express");
// let app = express();
// let PORT = process.env.PORT || 3000;
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());


// app.get("/", function(req, res) {
//     res.sendFile(path.join(__dirname, "index.html"));
// });

// app.get("/api/notes", function(req, res) {
//     res.sendFile(path.join(__dirname, "notes.html"));
// });





// fs.readFileAsync(db.json); // or something
// app.get("/api/characters", function(req, res) {
//     return res.json(characters);
// });
// app.get("/api/characters/:character", function(req, res) {
//     const chosen = req.params.character;
//     console.log(chosen);
//     const chosenOne = characters.filter(obj => {
//       return obj.routeName === chosen;
//     });
//     if (chosenOne.length) {
//       return res.json(chosenOne[0]);
//     }
//     else {
//       return res.send("A character I do not see, that is.");
//     };
// });

// app.post("/api/characters", function(req, res) {
//     // req.body hosts is equal to the JSON post sent from the user
//     // This works because of our body parsing middleware
//     var newCharacter = req.body;
//     // Using a RegEx Pattern to remove spaces from newCharacter
//     // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
//     newCharacter.routeName = newCharacter.name.replace(/\s+/g, "").toLowerCase();
//     console.log(newCharacter);
//     characters.push(newCharacter);
//     res.json(newCharacter);
// });

