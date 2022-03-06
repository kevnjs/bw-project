const classes = [
  {
    class_name: "Plus Abs",
    class_info: "An intense ab workout",
    class_duration: 45,
    instructor_id: 1
  },
  {
    class_name: "Zumba Class",
    class_info: "Dance your way to fit!",
    class_duration: 35,
    instructor_id: 2
  },
  {
    class_name: "Sweaty Saturday",
    class_info: "An hour session of intense cardio",
    class_duration: 60,
    instructor_id: 3
  },
  {
    class_name: "Sweaty Sunday",
    class_info: "An hour session of intense cardio",
    class_duration: 60,
    instructor_id: 4
  },
  {
    class_name: "Pilates Class",
    class_info: "Add Pilates to your fitness routine and see great benefits!",
    class_duration: 55,
    instructor_id: 5
  },
  {
    class_name: "Yoga Fitness",
    class_info: "A relaxing and healthy session of beginner yoga",
    class_duration: 30,
    instructor_id: 6
  },
  {
    class_name: "Swimming Fundamentals",
    class_info: "A great way of exercising and cooling down!",
    class_duration: 45,
    instructor_id: 7
  },
  {
    class_name: "Strength and Focus",
    class_info: "Focusing on increasing your strength!",
    class_duration: 60,
    instructor_id: 8
  },
]




/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('classes').truncate()
  await knex('classes').insert(classes);
};
