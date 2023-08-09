import { API_URL } from './config';
import { getJSON } from './helpers';

export const state = {
  recipe: {},
  search: {
    query: '',
    results: [],
  },
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
    throw err;
  }
};

export const loadSearchResults = async function (query) {
  try {
    state.search.query = query;

    const data = await getJSON(`${API_URL}?search=${query}`);
    // console.log(data);

    state.search.results = data.data.recipes.map(el => {
      return {
        id: el?.id,
        title: el?.title,
        publisher: el?.publisher,
        image: el?.image_url,
      };
    });
  } catch (err) {
    // Throw err to controller's catch statement
    throw err;
  }
};
