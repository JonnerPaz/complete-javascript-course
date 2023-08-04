import { API_URL } from './config';
import { getJSON } from './views/helpers';

export const state = {
  recipe: {},
};

export const loadRecipe = async function (id) {
  try {
    const data = await getJSON(`${API_URL}/${id.slice(1)}`);
    const { recipe } = data.data;

    // This will override recipe var with data from fetch
    state.recipe = {
      id: recipe?.id,
      title: recipe?.title,
      publisher: recipe?.publisher,
      sourceUrl: recipe?.source_url,
      image: recipe?.image_url,
      servings: recipe?.servings,
      cookingTime: recipe?.cooking_time,
      ingredients: recipe?.ingredients,
    };
    console.log(state.recipe);
  } catch (err) {
    console.error(`${err}`);
  }
};
