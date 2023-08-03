import * as model from './model.js';
import recipeView from './views/recipeView.js';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import recipeView from './views/recipeView.js';

const recipeContainer = document.querySelector('.recipe');
const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

// Later use
const apiKey = '6caa6664-9844-488d-bd83-01c7fbdb5e48';
const url = 'https://forkify-api.herokuapp.com/api/v2/recipes';

const controlRecipes = async function () {
  try {
    const id = window.location.hash; // changes hash, changes ingredient id
    if (!id) return; // guard clause
    recipeView.renderSpinner();

    // 1) loading recipe
    await model.loadRecipe(url, id);

    // 2) rendering recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    console.error(err);
  }
};

['hashchange', 'load'].forEach(e => window.addEventListener(e, controlRecipes));
