const express = require("express");
const app = express();
app.use(express.json()); // for parsing application/json

const setupServer = (knex) => {
    app.get("/api/v1/:id/diary/:date" , async (req, res) => {
        const { id, date } = req.params;
        const { branch } = req.query;
        
        try {
            if(branch != undefined) {
                const result = await knex("diary")
                    .where({
                        baby_id: Number(id),
                        date: date,
                        branch: branch
                    })
                    .select();
                res.send(result);
            } else {
                const result = await knex("diary")
                    .where({
                        baby_id: Number(id),
                        date: date,
                    })
                    .select();
                res.send(result);
            }
        } catch(err) {
            res.status(500).end();
        }
    });

    return app;
};

module.exports = { setupServer };
