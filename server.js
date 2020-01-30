const fs = require("fs");
const express = require("express");
const path = require("path");

const app = express();
let PORT = process.env.PORT || 1006;

let dbj = require("./db/db.json");
let idCount = dbj.length;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.get("/api/notes", (req, res) => {
    fs.readFile(path.join(__dirname, "/db/db.json"), "utf8", (err, data) => {
        if (err) throw err;
        data = JSON.parse(data);
        res.json(data);
    })
});

app.post("/api/notes", (req, res) => {
    let note = req.body;
    note.id = idCount;
    console.log(note);
    dbj.push(note);
    fs.writeFile(path.join(__dirname, "/db/db.json"), JSON.stringify(dbj), (err) => {
        if (err) throw err;
        console.log("File saved");
    })
    idCount++;
})

app.delete("/api/notes/:id", (req, res) => {
    let searchedId = parseInt(req.params.id);
    for (let i = 0; i < dbj.length; i++){
        if (searchedId === dbj[i].id){
            console.log("Before\n");
            console.log(dbj);
            dbj.splice(i, 1);
            console.log("After\n");
            console.log(dbj);
            fs.writeFile(path.join(__dirname, "/db/db.json"), JSON.stringify(dbj), (err) => {
                if (err) throw err;
                console.log("File saved");
            });
        }
    };
});

app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/notes.html"));
});


app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.listen(PORT, () => {
    console.log(`Server up at http://localhost:${PORT}`);
});