import axios from 'axios';

//
export async function getDishes() {
  try {
    const response = await axios.get(
      'https://api.spoonacular.com/recipes/complexSearch?apiKey=e5efa520d806449eb6185b9de8fdcf64&addRecipeInformation=true'
    );
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
}

export async function searchDishes(query = '') {
  try {
    const response = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=e5efa520d806449eb6185b9de8fdcf64&addRecipeInformation=true&query=${query}`
    );
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
}

export async function getDish(id) {
  try {
    const response = await axios.get(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=e5efa520d806449eb6185b9de8fdcf64&includeNutrition=false`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}