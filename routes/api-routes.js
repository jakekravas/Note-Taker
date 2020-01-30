// const fs = require("fs");
// const path = require("path");
// // let noteData = require("./db/db.json");

// let dbArr = [];
// let noteID = 0;
// module.exports = function(app){
//     app.get("/api/notes", (req, res) => {
//         // res.json(noteData);
//         fs.readFile(path.join(__dirname, "db/db.json", "utf8", (err, data) => {
//             if (err) throw err;
//             res.json(data)
//         }))
//     });
    
//     app.post("/api/notes", (req, res) => {
//         let note = req.body;
//         note.id = noteID;
//         // req.body.id = noteID;
//         dbArr.push(req.body);
//         console.log(dbArr);
//         fs.writeFile("db.json", dbArr, (err) => {
//             if (err) throw err;
//             console.log("File saved");
//         })
//         console.log(req.body);
//         noteID++;
//         // noteData.push(req.body);
//     });

//     app.get("/api/notes/:id", (req, res) => {
//         let searchedID = req.params.id;
        
//         for (let i = 0; i < noteData.length; i++){
//             if (searchedID === noteData[i].id){
//                 return res.json(noteData[i]);
//             }
//         }

//         return "ID not found";
//     })
// }