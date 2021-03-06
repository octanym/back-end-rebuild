const express = require("express");

const Recipes = require("./model");

const router = express.Router();

/** GET REQUEST */
router.get("/", (req, res) => {
  Recipes.getRecipes()
    .then((recipes) => {
      res.status(200).json(recipes);
    })
    .catch((error) => {
      res.status(500).json({ error: "The recipes could not be retrieved" });
    });
});

/** PUT REQUEST */
router.put("/:id", (req, res) => {
  const changes = req.body;
  const id = req.params.id;

  Recipes.editRecipe(changes, id)
    .then((recipe) => {
      if (recipe) {
        res
          .status(200)
          .json({ success: "The recipe was successfully updated", ...recipe });
      } else {
        res
          .status(500)
          .json({ error: "There was an error updating the recipe" });
      }
    })
    .catch((error) => {
      res.status(404).json({ message: "Could not find a recipe by that id" });
    });
});

/** POST REQUEST */
router.post("/", (req, res) => {
  const recipe = req.body;

  Recipes.addRecipe(recipe)
    .then((recipes) => {
      if (recipes) {
        res.status(200).json({
          message: "new recipe created",
          recipe_id: recipes[0],
          title: recipes[1],
        });
      } else {
        res
          .status(500)
          .json({ error: "there was an error creating the recipe" });
      }
    })
    .catch((error) => {
      res.status(400).json({ message: "the recipe could not be created" });
    });
});

/** DELETE REQUEST */
router.delete("/:id", (req, res) => {
  const id = req.params.id;

  Recipes.deleteRecipe(id)
    .then((del) => {
      if (del) {
        res
          .status(200)
          .json({ success: `recipe ${id} was successfully deleted` });
      } else {
        res
          .status(500)
          .json({ message: "There was an error deleting the recipe" });
      }
    })
    .catch((error) => {
      res.status(400).json({ message: "The recipe could not be deleted" });
    });
});

/** GET A RECIPES INGREDIENTS */
router.get("/:id/ingredients", (req, res) => {
  const id = req.params.id;

  Recipes.getRecipeIngredients(id)
    .then((ingreds) => {
      if (ingreds) {
        res.status(200).json(ingreds);
      } else {
        res.status(400).json({
          message: "The ingredients for this recipe could not be retrieved",
        });
      }
    })
    .catch((error) => {
      res.status(500).json({
        error: "There was an error retrieving ingredients for this recipe",
      });
    });
});

/** GET A RECIPES INSTRUCTIONS */
router.get("/:id/instructions", (req, res) => {
  const id = req.params.id;

  Recipes.getRecipeInstructions(id)
    .then((instr) => {
      if (instr) {
        res.status(200).json(instr);
      } else {
        req.status(400).json({
          message: "The instructions for this recipe could not be retrieved",
        });
      }
    })
    .catch((error) => {
      res.status(500).json({
        error: "There was an error retrieving instructions for this recipe",
      });
    });
});

/** GET A RECIPES CATEGORIES */
router.get("/:id/categories", (req, res) => {
  const id = req.params.id;

  Recipes.getRecipeCategorizations(id)
    .then((cats) => {
      if (cats) {
        res.status(200).json(cats);
      } else {
        res.status(400).json({
          message: "The categories for this recipe could not be retrieved",
        });
      }
    })
    .catch((error) => {
      res.status(500).json({
        error: "There was an error retrieving categories for this recipe",
      });
    });
});

module.exports = router;
