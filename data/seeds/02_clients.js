const clients = [
  {client_name: "Bob Ricky"},
  {client_name: "Rachel Kim"},
  {client_name: "Sarah Jewels"},
  {client_name: "Kiara Williams"},
  {client_name: "Jin Akai"}
]


/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('clients').truncate()
  await knex('clients').insert(clients);
};
