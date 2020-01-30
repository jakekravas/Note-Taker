const fs = require("fs");
const express = require("express");
const path = require("path");

const app = express();
let PORT = process.env.PORT || 1006;

let dbArr = [];
idCount = 0;

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
    dbArr.push(note);
    fs.writeFile("dbb.json", JSON.stringify(dbArr), (err) => {
        if (err) throw err;
        console.log("File saved");
    })
    idCount++;
})

app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/notes.html"));
});


app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.listen(PORT, () => {
    console.log(`Server up at http://localhost:${PORT}`);
});