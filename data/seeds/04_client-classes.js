const client_classes = [
  {client_id: 1, class_id: 1},
  {client_id: 2, class_id: 2},
  {client_id: 3, class_id: 2},
  {client_id: 4, class_id: 1},
  {client_id: 5, class_id: 3},
]



/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('client_classes').truncate()
  await knex('client_classes').insert(client_classes);
};
