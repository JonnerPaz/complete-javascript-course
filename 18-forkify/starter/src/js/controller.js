import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';
import bookmarksView from './views/bookmarksView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { async } from 'regenerator-runtime';

const controlRecipes = async function () {
  try {
    const id = window.location.hash; // changes hash, changes ingredient id
    if (!id) return;
    // resultsView.renderSpinner();
    recipeView.renderSpinner();

    // Update results view to mark selected search results
    resultsView.update(model.getSearchResultPage());
    bookmarksView.update(model.state.bookmarks);

    // 1) loading recipe
    await model.loadRecipe(id);

    // 2) rendering recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    console.error(err);
    recipeView.renderError();
  }

  // TEST
  // controlServings();
};

// Executes each time the search bar is pressed
const controlSearchResults = async function () {
  try {
    const query = searchView.getQuery();
    if (!query) return;

    await model.loadSearchResults(query);

    resultsView.render(model.getSearchResultPage());

    // render pagination btns
    paginationView.render(model.state.search);
  } catch (err) {
    console.error(err);
  }
};

const controlPagination = function (goToPage) {
  // Render New pagination view
  resultsView.render(model.getSearchResultPage(goToPage));
  bookmarksView.update(model.state.bookmarks);

  // Render new pagination btns
  paginationView.render(model.state.search);
};

const controlServings = function (newServings) {
  // update the recipe servings (in state)
  model.updateServings(newServings);

  // Update the view
  // recipeView.render(model.state.recipe);
  recipeView.update(model.state.recipe);
};

const controlAddBookmark = function () {
  // Add or remove bookmark
  if (!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe);
  else {
    console.log('entering to delete...');
    model.deleteBookmark(model.state.recipe.id);
  }

  // update recipeView
  recipeView.update(model.state.recipe);

  // render the bookmarks
  bookmarksView.render(model.state.bookmarks);
};

controlBookmarks = function () {
  bookmarksView.render(model.state.bookmarks);
};

const init = function () {
  bookmarksView.addHandlerRender(controlBookmarks);
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerAddBookmark(controlAddBookmark);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
};

init();
