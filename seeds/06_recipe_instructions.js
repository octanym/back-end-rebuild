
exports.seed = async function(knex) {
// Inserts seed entries
  await knex('recipe_instructions').insert([
    {recipe_id: 1, instructions_id: 1 },
    {recipe_id: 1, instructions_id: 2 },
    {recipe_id: 1, instructions_id: 3 },
    {recipe_id: 1, instructions_id: 4 },
    {recipe_id: 1, instructions_id: 5 },
    {recipe_id: 1, instructions_id: 6 },
    {recipe_id: 1, instructions_id: 7 },
    {recipe_id: 2, instructions_id: 8 },
    {recipe_id: 2, instructions_id: 9 },
    {recipe_id: 2, instructions_id: 10 },
    {recipe_id: 2, instructions_id: 11 },
    {recipe_id: 2, instructions_id: 12 },
    {recipe_id: 2, instructions_id: 13 },
    {recipe_id: 2, instructions_id: 14 },
    {recipe_id: 2, instructions_id: 15 },
    {recipe_id: 2, instructions_id: 16 },
    {recipe_id: 3, instructions_id: 17 },
    {recipe_id: 3, instructions_id: 18 },
    {recipe_id: 3, instructions_id: 19 },
    {recipe_id: 3, instructions_id: 20 },
    {recipe_id: 3, instructions_id: 21 },
    {recipe_id: 4, instructions_id: 22 },
    {recipe_id: 4, instructions_id: 23 },
    {recipe_id: 4, instructions_id: 24 },
    {recipe_id: 4, instructions_id: 25 },
    {recipe_id: 4, instructions_id: 26 },
    {recipe_id: 4, instructions_id: 27 },
    {recipe_id: 4, instructions_id: 28 },
    {recipe_id: 4, instructions_id: 29 },
    {recipe_id: 5, instructions_id: 30 },
    {recipe_id: 5, instructions_id: 31 },
    {recipe_id: 5, instructions_id: 32 },
    {recipe_id: 5, instructions_id: 33 },
    {recipe_id: 5, instructions_id: 34 },
    {recipe_id: 5, instructions_id: 35 },
    {recipe_id: 5, instructions_id: 36 },
    {recipe_id: 5, instructions_id: 37 },
  ]);
};
