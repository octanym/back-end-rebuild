
exports.seed = async function(knex) {
// Inserts seed entries
  await knex('recipe_ingredients').insert([
    {recipe_id: 1, ingredients_id: 1 },
    {recipe_id: 1, ingredients_id: 2 },
    {recipe_id: 1, ingredients_id: 3 },
    {recipe_id: 1, ingredients_id: 4 },
    {recipe_id: 1, ingredients_id: 5 },
    {recipe_id: 1, ingredients_id: 6 },
    {recipe_id: 2, ingredients_id: 7 },
    {recipe_id: 2, ingredients_id: 8 },
    {recipe_id: 2, ingredients_id: 9 },
    {recipe_id: 2, ingredients_id: 10 },
    {recipe_id: 2, ingredients_id: 11 },
    {recipe_id: 2, ingredients_id: 12 },
    {recipe_id: 3, ingredients_id: 13 },
    {recipe_id: 3, ingredients_id: 14 },
    {recipe_id: 3, ingredients_id: 15 },
    {recipe_id: 3, ingredients_id: 16 },
    {recipe_id: 3, ingredients_id: 17 },
    {recipe_id: 3, ingredients_id: 18 },
    {recipe_id: 3, ingredients_id: 19 },
    {recipe_id: 3, ingredients_id: 20 },
    {recipe_id: 4, ingredients_id: 21 },
    {recipe_id: 4, ingredients_id: 22 },
    {recipe_id: 4, ingredients_id: 23 },
    {recipe_id: 4, ingredients_id: 24 },
    {recipe_id: 4, ingredients_id: 25 },
    {recipe_id: 5, ingredients_id: 26 },
    {recipe_id: 5, ingredients_id: 27 },
    {recipe_id: 5, ingredients_id: 28 },
    {recipe_id: 5, ingredients_id: 29 },
    {recipe_id: 5, ingredients_id: 30 },
    {recipe_id: 5, ingredients_id: 31 },
    {recipe_id: 5, ingredients_id: 32 },
    {recipe_id: 5, ingredients_id: 33 },
    {recipe_id: 5, ingredients_id: 34 },
    {recipe_id: 5, ingredients_id: 35 },
    {recipe_id: 5, ingredients_id: 36 },
    {recipe_id: 5, ingredients_id: 37 },
  ]);
};
