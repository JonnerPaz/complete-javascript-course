export const state = {
  recipe: {},
};

export const loadRecipe = async function (url, id) {
  try {
    const res = await fetch(`${url}/${id.slice(1)}`); // slice hash
    console.log('heheheh');
    const data = await res.json();

    if (!res.ok)
      throw new Error(`Connection Failed: ${data.message} (${res.status})`);

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
    console.error(err);
  }
};
