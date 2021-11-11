const express = require("express");
const app = express();
app.use(express.json()); // for parsing application/json

const setupServer = () => {
    app.get("/api/v1/:id/diary/:date" , (req, res) => {
        const { id, date } = req.query;
        res.status(200);
        res.send(date);
    });

    return app;
};

module.exports = { setupServer };
