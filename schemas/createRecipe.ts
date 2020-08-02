import * as Yup from "yup";

const createRecipeSchema = Yup.object({
  name: (
    Yup
      .string()
      .required("You must provide a recipe name")
  ),
  ingredients: (
    Yup
      .string()
      .min(5, "You must provide valid ingredients")
      .required("You must provide the recipe ingredients")
  ),
  instructions: (
    Yup
      .string()
  ),
  imageUrl: (
    Yup
      .string()
      .required("You must provide the image URL")
  ),
  recipeUrl: (
    Yup
      .string()
      .required("You must provide the recipe URL")
  ),
});

export default createRecipeSchema;
