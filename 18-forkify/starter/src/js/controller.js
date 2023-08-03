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

const showRecipe = async function (url) {
  try {
    const res = await fetch(url);
    const data = await res.json();

    if (!res.ok)
      throw new Error(`Connection Failed: ${data.message} (${res.status})`);

    let { recipe } = data.data;
    recipe = {
      id: recipe?.id,
      title: recipe?.title,
      publisher: recipe?.publisher,
      sourceUrl: recipe?.source_url,
      image: recipe?.image_url,
      servings: recipe?.servings,
      cookingTime: recipe?.cooking_time,
      ingredients: recipe?.ingredients,
    };

    console.log(recipe);
  } catch (err) {
    console.log(err);
  }
};
showRecipe(
  `https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886`
);

//
