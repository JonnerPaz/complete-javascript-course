import { API_URL, RES_PER_PAGE } from './config';
import { getJSON } from './helpers';

export const state = {
  recipe: {},
  search: {
    query: '',
    results: [],
    page: 1,
    resultsPerPage: RES_PER_PAGE,
  },
  bookmarks: [],
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

    if (state.bookmarks.some(bookmark => bookmark.id === id.slice(1)))
      state.recipe.bookmarked = true;
    else state.recipe.bookmarked = false;
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
    state.search.page = 1; // Reset pagination number each time a new result is pressed
  } catch (err) {
    // Throw err to controller's catch statement
    throw err;
  }
};

export const getSearchResultPage = function (page = state.search.page) {
  state.search.page = page;
  const start = (page - 1) * state.search.resultsPerPage;
  const end = page * state.search.resultsPerPage;

  return state.search.results.slice(start, end);
};

export const updateServings = function (newServings) {
  state.recipe.ingredients.forEach(ing => {
    ing.quantity = (ing.quantity * newServings) / state.recipe.servings;
  });

  state.recipe.servings = newServings;
};

const persisBookmarks = function () {
  localStorage.setItem('bookmarks', JSON.stringify(state.bookmarks));
};

export const addBookmark = function (recipe) {
  // Add bookmark
  state.bookmarks.push(recipe);

  // Mark current recipe as bookmark
  if (recipe.id === state.recipe.id) state.recipe.bookmarked = true;

  persisBookmarks();
};

export const deleteBookmark = function (id) {
  const index = state.bookmarks.findIndex(el => el.id === id);
  state.bookmarks.splice(index, 1);

  // Mark current recipe as bookmark
  if (id === state.recipe.id) state.recipe.bookmarked = false;

  persisBookmarks();
};

const init = function () {
  const storage = localStorage.getItem('bookmarks');

  if (storage) state.bookmarks = JSON.parse(storage);
};
init();

const clearBookmarks = () => localStorage.clear('bookmarks');
clearBookmarks();
