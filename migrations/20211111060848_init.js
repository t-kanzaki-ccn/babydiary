
exports.up = async function(knex, Promise) {
    await knex.schema.createTable("baby", (t) => {
        t.increments()
            .index();

        t.string("first_name", 15)
            .notNullable()
            .index();
            
        t.string("last_name", 15)
            .notNullable()
            .index();

        t.date("birth_day")
            .notNullable();
    });

    await knex.schema.createTable("diary", (t) => {
        t.increments()
            .index();

        t.integer("baby_id")
            .notNullable()
            .references("id")
            .inTable("baby");

        t.date("date")
            .notNullable();

        t.string("branch", 2)
            .notNullable();

        t.string("title", 50)
            .notNullable();

        t.string("comment", 250)
            .notNullable();

        t.string("author", 20)
            .notNullable();
    });
};

exports.down = async function(knex) {
    await knex.schema.dropTable("baby");
    await knex.schema.dropTable("diary");

};
