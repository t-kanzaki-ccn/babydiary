const express = require("express");
const app = express();
app.use(express.json()); // for parsing application/json

const setupServer = (knex) => {
    app.get("/api/v1/:id/diary/:date" , async (req, res) => {
        const { id, date } = req.params;

        res.status(200);
        // console.log(knex);
        const result = await knex("diary")
            .where({
                baby_id: Number(id),
                date: date
            })
            .select();
        res.send(result);
    });

    return app;
};

module.exports = { setupServer };
