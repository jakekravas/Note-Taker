let journalData = require("../journal.json");
let dbData = require("../db/db.json");

module.exports = function(app){
    app.get("/api/journal", (req, res) => {
        res.json(journalData);
    });

    app.get("/api/db", (req, res) => {
        res.json(dbData);
    });
}