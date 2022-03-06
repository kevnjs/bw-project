/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('users', tbl => {
      tbl.increments('user_id')
      tbl.string('username').notNullable().unique()
      tbl.string('password', 500).notNullable()
      tbl.integer('client_id').unsigned()
      .references('client_id').inTable('clients')
      tbl.integer('instructor_id').unsigned()
      .references('instructor_id').inTable('instructors')
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users')
};
