const express = require("express");
const app = express();
app.use(express.json()); // for parsing application/json

const setupServer = (knex) => {
    app.get("/api/v1/:id/diary/:date" , async (req, res) => {
        const { id, date } = req.params;
        console.log(id);

        res.status(200);
        // console.log(knex);
        const result = await knex("diary")
            .where({
                id: Number(id),
                date: date
            })
            .select();
        console.log(result);
        res.send(result);
    });

    return app;
};

module.exports = { setupServer };
