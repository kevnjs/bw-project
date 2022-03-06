const instructors = [
  {instructor_name: "Anja Humbert"},
  {instructor_name: "Yen Vinicio"},
  {instructor_name: "Nixon Baz"},
  {instructor_name: "Krystine Quin"},
  {instructor_name: "Daniela Loyd"},
  {instructor_name: "Gary Landon"},
  {instructor_name: "Richard Ness"},
  {instructor_name: "Leonard Checker"},
]

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('instructors').truncate()
  await knex('instructors').insert(instructors);
};
