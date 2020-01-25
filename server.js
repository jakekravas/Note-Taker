const express = require("express");
const path = require("path");

const app = express();
const PORT = 1006;

require("./routes/api-routes")(app);
require("./routes/html-routes")(app);

app.listen(PORT, () => {
    console.log(`Server up at http://localhost:${PORT}`);
})