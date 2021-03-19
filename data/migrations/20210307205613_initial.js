
exports.up = async function(knex) {
    await knex.schema.createTable("projects", (table) => {
        table.increments("project_id")
        table.text("project_name").notNullable()
        table.text("project_description")
        table.integer("project_completed").defaultTo(0)
    })

    await knex.schema.createTable("resources", (table) => {
        table.increments("resource_id")
        table.text("resource_name").notNullable().unique()
        table.text("resource_description")
    })

    await knex.schema.createTable("tasks", (table) => {
        table.increments("task_id")
        table.text("task_description").notNullable()
        table.text("task_notes")
        table.text("task_completed").defaultTo(0)
        table
            .integer("project_id")
            .notNullable()
            .references("project_id")
            .inTable("projects")
            .onDelete("CASCADE")
            .onUpdate("CASCADE")
    })

    await knex.schema.createTable("project_resources", (table) => {
        table
            .integer("project_id")
            .notNullable()
            .references("project_id")
            .inTable("projects")
            .onDelete("CASCADE")
            .onUpdate("CASCADE")

        table
            .integer("resource_id")
            .notNullable()
            .references("resource_id")
            .inTable("resources")
            .onDelete("CASCADE")
            .onUpdate("CASCADE")

        table.primary(["project_id", "resource_id"])
    })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("project_resources")
    await knex.schema.dropTableIfExists("tasks")
    await knex.schema.dropTableIfExists("resources")
    await knex.schema.dropTableIfExists("projects")
};
