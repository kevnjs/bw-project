/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
    return knex.schema.createTable('instructors', tbl => {
      tbl.increments('instructor_id')
      tbl.string('instructor_name').notNullable()
    })
  
    .createTable('clients', tbl => {
        tbl.increments('client_id')
        tbl.string('client_name').notNullable()
    })
  
    .createTable('classes', tbl => {
        tbl.increments('class_id')
        tbl.string('class_name').notNullable()
        tbl.string('class_info', 280).notNullable()
        tbl.integer('class_duration').unsigned().notNullable()
        tbl.integer('instructor_id').notNullable().unsigned()
        .references('instructor_id').inTable('instructors')
    })
  
    .createTable('client_classes', tbl => {
        tbl.increments('client_class_id')
        tbl.integer('client_id').unsigned().notNullable()
        .references('client_id').inTable('clients')
        tbl.integer('class_id').unsigned().notNullable()
        .references('class_id').inTable('classes')
    })
  
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('client_classes')
    .dropTableIfExists('classes')
    .dropTableIfExists('clients')
    .dropTableIfExists('instructors')
  };
  