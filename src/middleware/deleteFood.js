const fs = require("fs");
const recipesModel = require("../model/recipes.model");

const remove = async (req, res, next) => {
  const id_recipes = req.params.id;
  const data = await recipesModel.getDetailRecipes(id_recipes);
  if (data.rows[0].picture) {
    const photo = data.rows[0].picture;
    fs.unlink(`./public/gambar food/${photo}`, (err) => {
      if (err) {
        console.log(err);
        next();
      }
    });
    next();
  } else {
    res.json("Not found image");
  }
};

module.exports = remove;
