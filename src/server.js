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
                        branch: Number(branch)
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

    app.post("/api/v1/:id/diary/:date", async (req, res) => {
        const { id, date } = req.params;
        const { title, comment, author } = req.body;

        try {

            const branchCount = await knex("diary")
                .where({
                    baby_id: Number(id),
                    date: date
                })
                .count('id');

            const branchNum = Number(branchCount[0].count) + 1;

            const result = await knex("diary")
                .insert({
                    baby_id: Number(id),
                    date: date,
                    branch: branchNum,
                    title: title,
                    comment: comment,
                    author: author
                })
                .returning(["id", "date", "branch"]);

            res.status(201);
            res.send(result);
        } catch(err) {
            console.log(err);
            res.status(400).end();
        }


    });

    return app;
};

module.exports = { setupServer };
